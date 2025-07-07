// export const NOTES = [
//     'Ab', 'A', 'A#',
//     'Bb', 'B',
//     'C', 'C#',
//     'Db', 'D', 'D#',
//     'Eb', 'E',
//     'F', 'F#',
//     'Gb', 'G', 'G#'
// ];
export const NOTES = [
    'A', 'A#/Bb',
    'B',
    'C', 'C#/Db',
    'D', 'D#/Eb',
    'E',
    'F', 'F#/Gb',
    'G', 'G#/Ab'
];

export function generateFretboardMap(tuning, numFrets) {
    const fretboardMap = [];

    for (const openStringNote of tuning) {
        const stringNotes = [];
        // Find the starting note index in the chromatic scale
        const startNoteIndex = NOTES.indexOf(openStringNote);

        for (let fret = 0; fret <= numFrets; fret++) {
            // Cycle through the NOTES array using the modulo operator
            const noteIndex = (startNoteIndex + fret) % NOTES.length;
            stringNotes.push(NOTES[noteIndex]);
        }
        fretboardMap.push(stringNotes);
    }

    return fretboardMap;
}

export function generateAllVoicingsForShape(rootNote, shapeFormula, fretboardMap) {
    const { rootString, pattern } = shapeFormula;
    const allVoicings = [];

    // 1. Find all occurrences of root note on its designated string.
    const stringNotes = fretboardMap[rootString];

    for (let rootFret = 0; rootFret < stringNotes.length; rootFret++) {
        if (stringNotes[rootFret] === rootNote) {
            // 2. Build shape based on this anchor fret
            const newShape = pattern.map(note => {
                if (note.fretOffset === null) {
                    return { string: note.string, fret: null };
                }
                const finalFret = rootFret + note.fretOffset;

                // Ensure calculated fret is within bounds of fretboard
                if (finalFret < 0 || finalFret >= fretboardMap[0].length) {
                    return null;
                }
                return { string: note.string, fret: finalFret };
            }).filter(Boolean); // Filter out any null values

            // 3. If generated shape is valid, add it to list of voicings
            if (newShape.length > 0) {
                allVoicings.push(newShape);
            }
        }
    }

    // 4. Return array containing all possible voicings for this shape
    return allVoicings;
}

export function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
