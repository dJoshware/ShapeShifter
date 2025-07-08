"use client";

import * as React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Header from '../components/Header';
import FretboardDiagram from '../components/Fretboard';
import NotesIntervalsToggle from '../components/NotesIntervalsToggle';
import {
    generateFretboardMap,
    generateAllVoicingsForShape,
    NOTES,
    shuffleArray
} from '../lib/fretboardMap';
import { BEGINNER_CHORD_SHAPES } from '../lib/ChordShapes/Beginner';
import { INTERMEDIATE_CHORD_SHAPES } from '../lib/ChordShapes/Intermediate';
import { ADVANCED_CHORD_SHAPES } from '../lib/ChordShapes/Advanced';
import { spellInterval, MAJOR_SCALE_OFFSETS } from '../lib/ChordSpelling';

const allChordShapes = {
    Beginner: BEGINNER_CHORD_SHAPES,
    Intermediate: INTERMEDIATE_CHORD_SHAPES,
    Advanced: ADVANCED_CHORD_SHAPES
};
const TUNING = ['E', 'B', 'G', 'D', 'A', 'E'];
const NUM_FRETS = 24;
const SEMIS = [...Array(12).keys()];  // [0,1,2,…11]
const NATURALS = new Set([0,2,4,5,7,9,11]);

export default function Home() {

    const theme = useTheme();
    // Media queries
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 600px - 1200px

    // Complete state
    const [difficulty, setDifficulty] = React.useState('Beginner');
    const [selectedCategory, setSelectedCategory] = React.useState('');

    // State for 'Sevenths' sub-levels
    const [selectedVoicingType, setSelectedVoicingType] = React.useState('Drop 3');
    const [selectedStringSet, setSelectedStringSet] = React.useState('High String Set');
    const [selectedChordQuality, setSelectedChordQuality] = React.useState('Maj7');

    // State for final position/inversion toggle
    const [selectedPosition, setSelectedPosition] = React.useState('All');

    // State for Alternate Shape position
    const [selectedAltShape, setSelectedAltShape] = React.useState(0);

    // State for generation engine
    const [currentRootNote, setCurrentRootNote] = React.useState('C');
    const [displayShape, setDisplayShape] = React.useState([]);

    // State for deck of unpicked notes
    const [noteDeck, setNoteDeck] = React.useState([]);

    // State for chord shuffler
    const [shuffleChecked, setShuffleChecked] = React.useState(false);

    // State for interval, or note, view
    const [showIntervals, setShowIntervals] = React.useState(false);

    // Generate the fretboard map once
    const fretboardMap = React.useMemo(() => 
        generateFretboardMap(TUNING, NUM_FRETS), []
    );
    
    // Gets all data for chord types
    const selectionHierarchy = React.useMemo(() => {
        const hierarchy = {
            categories: Object.keys(allChordShapes[difficulty] || {}),
            subLevels: [],
            finalFormulas: null,
            positions: [],
        };

        if (!selectedCategory) return hierarchy;
        let currentLevel = allChordShapes[difficulty]?.[selectedCategory];

        // if selectedCategory *is* already a pattern level, grab immediately
        if (
            currentLevel?.options &&
            Object.values(currentLevel.options)[0]?.pattern != null
        ) {
            hierarchy.finalFormulas = currentLevel.options;
            hierarchy.positions = Object.keys(currentLevel.options);
        }

        const selections = {
            'Voicing Types': selectedVoicingType,
            'String Sets': selectedStringSet,
            'Chord Qualities': selectedChordQuality,
        };

        // Only drill down as long as we’re *not* at a pattern level
        while (
            currentLevel &&
            currentLevel.levelName &&
            currentLevel.options &&
            !(
                currentLevel.options &&
                Object.values(currentLevel.options)[0]?.pattern != null
            )
        ) {
            const levelName = currentLevel.levelName;
            const options = Object.keys(currentLevel.options);
            const currentSelection = selections[levelName];

            hierarchy.subLevels.push({ levelName, options });

            if (!currentSelection || !currentLevel.options[currentSelection]) {
                return hierarchy; // Stop drilling down if a selection for this level isn't set
            }
            currentLevel = currentLevel.options[currentSelection];
        }

        // Now currentLevel is pattern object
        if (currentLevel?.options) {
            hierarchy.finalFormulas = currentLevel.options;
            hierarchy.positions = Object.keys(currentLevel.options);
        }

        return hierarchy;

    }, [difficulty, selectedCategory, selectedVoicingType, selectedStringSet, selectedChordQuality]);

    // Derives list of ALL finger patterns for selected position
    const availableAlts = React.useMemo(() => {
        if (!selectedPosition || selectedPosition === 'All' || !selectionHierarchy.finalFormulas) {
            return [];
        }
        const positionData = selectionHierarchy.finalFormulas[selectedPosition];
        if (!positionData) return [];

        // Default pattern is always first option
        const allPatterns = [positionData];

        // If altShapes exists, add them to list
        if (positionData.altShapes && Array.isArray(positionData.altShapes)) {
            allPatterns.push(...positionData.altShapes);
        }

        return allPatterns;
    }, [selectedPosition, selectionHierarchy.finalFormulas]);

    // FINAL STATE MANAGEMENT

    // Setter function for default voicings, string sets, and chord qualities
    const getSetterForLevel = levelName => {
        switch (levelName) {
            case 'Voicing Types': return setSelectedVoicingType;
            case 'String Sets': return setSelectedStringSet;
            case 'Chord Qualities': return setSelectedChordQuality;
            default: return () => {};
        }
    };

    const drillDownAndSetDefaults = startLevel => {
        let currentLevel = startLevel;
        if (!currentLevel) return;

        let newVoicingType = '';
        let newStringSet = '';
        let newChordQuality = '';

        while (currentLevel && currentLevel.levelName && currentLevel.options) {
            const levelName = currentLevel.levelName;
            const firstOption = Object.keys(currentLevel.options)[0];
            if (!firstOption) break;

            if (levelName === 'Voicing Types') newVoicingType = firstOption;
            else if (levelName === 'String Sets') newStringSet = firstOption;
            else if (levelName === 'Chord Qualities') newChordQuality = firstOption;

            currentLevel = currentLevel.options[firstOption];
        }

        setSelectedVoicingType(newVoicingType);
        setSelectedStringSet(newStringSet);
        setSelectedChordQuality(newChordQuality);
    };

    const handleDifficultyChange = newDifficulty => {
        // Flip difficulty
        setDifficulty(newDifficulty);
        // Pick first category of it
        const difficultyData = allChordShapes[newDifficulty] || {};
        const firstCategory = Object.keys(difficultyData)[0] || '';
        setSelectedCategory(firstCategory);
        // Reset final two toggles
        setSelectedPosition('All');
        setSelectedAltShape(0);
        // Drill-down into new tree to extract defaults
        drillDownAndSetDefaults(difficultyData[firstCategory]);
    };

    const handleCategoryChange = newCategory => {
        // Flip difficulty
        setSelectedCategory(newCategory);
        // Reset final two toggles
        setSelectedPosition('All');
        setSelectedAltShape(0);
        // Drill-down into new tree to extract defaults
        const nextLevel = allChordShapes[difficulty]?.[newCategory];
        drillDownAndSetDefaults(nextLevel);
    };

    const handlePositionChange = newPosition => {
        setSelectedPosition(newPosition);
        setSelectedAltShape(0);
    };

    // Handler to generate new, random Root Note and Chord data
    const handleGenerateNewRoot = () => {
        // Draw new root note
        let deck = noteDeck.length ? [...noteDeck] : shuffleArray(SEMIS);
        const nextSem = deck.pop();
        setNoteDeck(deck);

        // Build enharmonic candidates from NOTES array
        const candidates = NOTES[nextSem];

        // If shuffle is OFF, reset Position pill and stop
        if (!shuffleChecked) {
            const simple = candidates.find(r =>
                !r.includes('#') && !r.includes('b'))
                || candidates[1]
                || candidates[0];
            setCurrentRootNote(simple);
            return;
        }

        // Helper to detect Positions level
        // const isPatternLevel = lvl =>
        //     lvl?.options &&
        //     Object.values(lvl.options)[0]?.pattern != null;

        // Prepare blank slate
        const newSelections = {
            voicingType: '',
            stringSet: '',
            quality: '',
            position: '',
            altShape: 0,
        };

        // Walk exact same hierarchy that navigator uses
        let cursor = allChordShapes[difficulty]?.[selectedCategory];
        while (cursor && !(cursor.options && cursor.levelName === 'Positions')) {
            const { levelName, options } = cursor;
            const keys = Object.keys(options);
            const pick = keys[Math.floor(Math.random() * keys.length)];

            // Stash in correct slot
            if (levelName === 'Voicing Types') newSelections.voicingType = pick;
            else if (levelName === 'String Sets') newSelections.stringSet = pick;
            else if (levelName === 'Chord Qualities') newSelections.quality = pick;

            // Drill down to next level
            cursor = options[pick];
        }

        // Randomize position & altShape from new cursor
        const posKeys = Object.keys(cursor.options);
        newSelections.position = posKeys[Math.floor(Math.random() * posKeys.length)];
        const pd = cursor.options[newSelections.position];
        newSelections.altShape =
            Array.isArray(pd.altShapes) && pd.altShapes.length
            ? Math.floor(Math.random() * pd.altShapes.length)
            : 0;
        
        // Pull the exact `pattern` you’ll render
        const positionData = cursor.options[newSelections.position];
        const formula = Array.isArray(positionData.altShapes)
            ? positionData.altShapes[newSelections.altShape]
            : positionData;

        // Pull pattern that we need to draw
        const pattern = formula.pattern;

        // Helper to test if root note candidate is clean
        function isCleanRoot(root) {
            // Exclude B# and E#
            if (root === 'B#' || root === 'E#') return false;
            // Run spelling algorithm and reject any unnatural accidentals
            return pattern.every(({ semitones, degree }) => {
                const label = spellInterval(root, semitones, degree);
                if (degree !== 1 && MAJOR_SCALE_OFFSETS[degree] !== semitones) {
                    // Must start with '#' or 'b'
                    return /^[#b][2-7]$/.test(label);
                } else {
                    // Must NOT start with '#' or 'b'
                    return !/^[#b]/.test(label);
                }
            });
        }

        // Gather all candidates that pass test
        const valid = candidates.filter(isCleanRoot);

        // If more than one is valid (e.g. both sharps & flats work), pick one at random
        let rootName;
        if (valid.length > 1) {
            rootName = valid[Math.floor(Math.random() * valid.length)];
        } else if (valid.length === 1) {
            rootName = valid[0];
        } else {
            // Prefer the one without any accidental in its literal name,
            // or else the first one
            rootName = candidates.find(isCleanRoot)
                    || candidates.find(r => !r.includes('#') && !r.includes('b'))
                    || candidates[0];
        }

        // !spellInterval(root, pattern[0].semitones, pattern[0].degree).includes('##') &&
        // !spellInterval(root, pattern[0].semitones, pattern[0].degree).includes('bb')

        // Commit all selections at once
        setCurrentRootNote(rootName);
        setSelectedVoicingType(newSelections.voicingType);
        setSelectedStringSet(newSelections.stringSet);
        setSelectedChordQuality(newSelections.quality);
        setSelectedPosition(newSelections.position);
        setSelectedAltShape(newSelections.altShape);
    };

    // Default-setting handler
    React.useEffect(() => {
        const difficultyData = allChordShapes[difficulty];
        const categories = Object.keys(difficultyData || {});

        // If current category isn't valid for new difficulty, select first one
        if (!categories.includes(selectedCategory)) {
            const firstCategory = categories[0] || '';
            setSelectedCategory(firstCategory);
            // When category changes this way, trigger drill-down for defaults
            drillDownAndSetDefaults(difficultyData?.[firstCategory]);
        }
    }, [difficulty, selectedCategory]);

    // Runs only ONCE on page load to set initial state
    React.useEffect(() => {
        handleDifficultyChange('Beginner');
    }, []);

    // Generation engine
    React.useEffect(() => {
        // The engine now works with whatever formulas our navigator provides
        const formulas = selectionHierarchy.finalFormulas;
        if (!currentRootNote || !formulas) {
            setDisplayShape([]);
            return;
        }

        const finalShapes = [];
        
        if (selectedPosition === 'All') {
            // 'ALL' VIEW LOGIC
            // Loop through all positions
            for (const posName in formulas) {
                const positionData = formulas[posName];
                // Add default pattern's voicings
                finalShapes.push(...generateAllVoicingsForShape(currentRootNote, positionData, fretboardMap));

                // If altShapes exist, add all those voicings
                if (positionData.altShapes) {
                    for (const altFormula of positionData.altShapes) {
                        finalShapes.push(...generateAllVoicingsForShape(currentRootNote, altFormula, fretboardMap));
                    }
                }
            }
            // Flatten final array of shape arrays
            setDisplayShape(finalShapes.flat());
            
        } else {
            // SINGLE POSITION VIEW LOGIC

            // Ensure selectedAltShape index is valid
            if (availableAlts.length > 0 && availableAlts[selectedAltShape]) {
                // Pick specific formula to use based on user's selection
                const formulaToUse = availableAlts[selectedAltShape];
                // Generate all voicings for just that one
                const voicings = generateAllVoicingsForShape(currentRootNote, formulaToUse, fretboardMap);
                setDisplayShape(voicings.flat());
            } else {
                setDisplayShape([]); // Clear if selection is invalid
            }
        }
    }, [currentRootNote, selectedPosition, selectedAltShape, selectionHierarchy.finalFormulas, availableAlts, fretboardMap]);

    return (
        <>
            {/* Header component */}
            <Header
                difficulty={difficulty}
                onDifficultyChange={handleDifficultyChange}
            />

            {/* Content */}
            <Box
                sx={theme => ({
                    // alignItems: 'center',
                    bgcolor: theme.palette.sand.one,
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '100vh',
                })}>
                <Container maxWidth='xl'>
                    {/* Container Grid */}
                    <Grid
                        alignItems='center'
                        container
                        flexDirection='column'
                        justifyContent={isMobile || isTablet ? 'center' : 'space-evenly'}
                        sx={theme => ({
                            color: theme.palette.main.dark_blue,
                        })}
                        textAlign='center'>

                        {/* Fretboard */}
                        <Grid
                            size={12} // Was conditional on device; Made bigger for interval text in dots
                            sx={theme => ({
                                my: 2,
                            })}>
                            <FretboardDiagram
                                chordShape={displayShape}
                                rootNote={currentRootNote}
                                fretboardMap={fretboardMap}
                                showIntervals={showIntervals}
                            />
                        </Grid>

                        {/* Category toggles */}
                        <Grid>
                            <ButtonGroup
                                sx={theme => ({
                                    '& .MuiButton-outlined': {
                                        borderColor: theme.palette.main.dark_blue,
                                    },
                                })}
                                variant='outlined'>
                                {selectionHierarchy.categories.map(type => (
                                    <Button
                                        key={type}
                                        onClick={() => handleCategoryChange(type)}
                                        sx={theme => ({
                                            bgcolor:
                                                selectedCategory === type ?
                                                theme.palette.sand.four :
                                                theme.palette.sand.one,
                                            color:
                                                selectedCategory === type ?
                                                theme.palette.sand.one :
                                                theme.palette.main.dark_blue,
                                            fontWeight:
                                                selectedCategory === type ? 600 : 400,
                                            textTransform: 'none',
                                            mb: 2,
                                        })}>
                                        {type}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Grid>

                        {/* All Sub-level toggles */}
                        {selectionHierarchy.subLevels.map(({ levelName, options }) => {
                            const selectedValue =
                                levelName === 'Voicing Types' ? selectedVoicingType :
                                levelName === 'String Sets' ? selectedStringSet :
                                selectedChordQuality;
                            const setter = getSetterForLevel(levelName);

                            return (
                                <Grid key={levelName}>
                                    <ButtonGroup
                                        sx={theme => ({
                                            '& .MuiButton-outlined': {
                                                borderColor: theme.palette.main.dark_blue,
                                            },
                                        })}
                                        variant='outlined'>
                                        {options.map(option => (
                                            <Button
                                                key={option}
                                                onClick={() => setter(option)}
                                                sx={theme => ({
                                                    bgcolor:
                                                        selectedValue === option ?
                                                        theme.palette.sand.four :
                                                        theme.palette.sand.one,
                                                    color:
                                                        selectedValue === option ?
                                                        theme.palette.sand.one :
                                                        theme.palette.main.dark_blue,
                                                    fontWeight:
                                                        selectedValue === option ? 600 : 400,
                                                    textTransform: 'none',
                                                    mb: 2,
                                                })}>
                                                {option}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </Grid>
                            )
                        })}

                        {/* Position toggles */}
                        {selectionHierarchy.positions.length > 0 && (
                            <Grid>
                                <ButtonGroup
                                    sx={theme => ({
                                        '& .MuiButton-outlined': {
                                            borderColor: theme.palette.main.dark_blue,
                                        },
                                    })}
                                    variant='outlined'>
                                        <Button
                                            key={'All'}
                                            onClick={() => handlePositionChange('All')}
                                            sx={theme => ({
                                                bgcolor:
                                                    selectedPosition === 'All' ?
                                                    theme.palette.sand.four :
                                                    theme.palette.sand.one,
                                                color:
                                                    selectedPosition === 'All' ?
                                                    theme.palette.sand.one :
                                                    theme.palette.main.dark_blue,
                                                fontWeight:
                                                    selectedPosition === 'All' ? 600 : 400,
                                                mb: 2,
                                                textTransform: 'none',
                                            })}>
                                            All
                                        </Button>
                                    {selectionHierarchy.positions.map(pos => (
                                        <Button
                                            key={pos}
                                            onClick={() => handlePositionChange(pos)}
                                            sx={theme => ({
                                                bgcolor:
                                                    selectedPosition === pos ?
                                                    theme.palette.sand.four :
                                                    theme.palette.sand.one,
                                                color:
                                                    selectedPosition === pos ?
                                                    theme.palette.sand.one :
                                                    theme.palette.main.dark_blue,
                                                fontSize:
                                                    isMobile || isTablet ?
                                                    12 : 14,
                                                fontWeight:
                                                    selectedPosition === pos ? 600 : 400,
                                                lineHeight: 1.4,
                                                mb: 2,
                                                textTransform: 'none',
                                            })}>
                                            {selectionHierarchy.finalFormulas?.[pos]?.name || pos}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </Grid>
                        )}

                        {/* 'Alternate patterns' toggles; if exists */}
                        {availableAlts.length > 1 && (
                            <Grid>
                                <Typography
                                    display='block'
                                    sx={{
                                        fontWeight: 500,
                                        textTransform: 'none'
                                    }}
                                    variant='caption'>
                                    Alternate Positions
                                </Typography>
                                <ButtonGroup
                                    sx={theme => ({
                                        '& .MuiButton-outlined': {
                                            borderColor: theme.palette.main.dark_blue,
                                        },
                                    })}
                                    variant='outlined'>
                                    {availableAlts.map((formula, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => setSelectedAltShape(index)}
                                            sx={theme => ({
                                                bgcolor:
                                                    selectedAltShape === index ?
                                                    theme.palette.sand.four :
                                                    theme.palette.sand.one,
                                                color:
                                                    selectedAltShape === index ?
                                                    theme.palette.sand.one :
                                                    theme.palette.main.dark_blue,
                                                fontSize:
                                                    isMobile || isTablet ?
                                                    12 : 14,
                                                fontWeight:
                                                    selectedAltShape === index ? 600 : 400,
                                                lineHeight: 1.4,
                                                mb: 2,
                                                textTransform: 'none',
                                            })}>
                                            {index + 1}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </Grid>
                        )}

                        {/* Content Grid */}
                        <Grid size={isMobile || isTablet ? 8 : 3}
                            sx={theme => ({
                                bgcolor: theme.palette.sand.four,
                                borderRadius: 3,
                                // mt: '',
                                py: 2
                            })}>
                            <Typography
                                display='block'
                                sx={theme => ({
                                    // color: theme.palette.main.white,
                                    fontSize:
                                        isMobile || isTablet ?
                                        theme.typography.mobile.h3.fontSize :
                                        theme.typography.desktop.h3.fontSize,
                                    fontWeight: 600,
                                    mb: 2,
                                    textTransform: 'none',
                                })}>
                                {
                                selectedCategory === 'CAGED' ?
                                    `${currentRootNote}` :
                                    `${currentRootNote} ${selectedChordQuality}`
                                }
                            </Typography>
                            <Button
                                onClick={handleGenerateNewRoot}
                                sx={theme => ({
                                    bgcolor: theme.palette.main.dark_blue,
                                    borderRadius: 6,
                                    color: theme.palette.sand.one,
                                    fontSize:
                                        isMobile || isTablet ?
                                        theme.typography.mobile.h5.fontSize :
                                        theme.typography.desktop.h5.fontSize,
                                    fontWeight: 600,
                                    maxWidth: 'fit-content',
                                    mx: 'auto',
                                    px: 2,
                                    textTransform: 'none',
                                })}>
                                New Chord
                            </Button>
                        </Grid>
                        {/* Shuffle toggle */}
                        <FormControlLabel
                            checked={shuffleChecked}
                            control={
                                <Checkbox
                                    sx={theme => ({
                                        color: theme.palette.main.dark_blue,
                                        '&.Mui-checked': {
                                            color: theme.palette.main.dark_blue,
                                        },
                                    })}
                                />
                            }
                            label='Shuffle'
                            onChange={e => setShuffleChecked(e.target.checked)}
                        />
                        {/* View toggle */}
                        <NotesIntervalsToggle
                            showIntervals={showIntervals}
                            onToggle={setShowIntervals}
                        />
                    </Grid>
                </Container>
            </Box>
        </>
    );
}