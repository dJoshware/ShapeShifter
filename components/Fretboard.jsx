// components/FretboardDiagram.jsx

const FretboardDiagram = ({
    chordShape,
    // tuning,
    rootNote,
    fretboardMap,
    numFrets = 24,
    numStrings = 6,
}) => {
    // Reduced fretWidth to make 24 frets fit better on screen
    const fretWidth = 50;
    const stringSpacing = 30; // Pixels between strings
    const diagramWidth = fretWidth * numFrets + 50; // Add some margin
    const diagramHeight = stringSpacing * (numStrings - 1) + 50; // Add some margin

    // Standard fret marker positions for a 24-fret neck
    const singleDotFrets = [3, 5, 7, 9, 15, 17, 19, 21];
    const doubleDotFrets = [12, 24];

    return (
        <svg
            style={{ height: 'auto', width: '100%' }}
            viewBox={`0 0 ${diagramWidth} ${diagramHeight}`}>
            {/* Draw Frets (vertical lines) */}
            {[...Array(numFrets + 1)].map((_, i) => (
                <line
                    key={`fret-${i}`}
                    x1={i * fretWidth + 25}
                    y1={25}
                    x2={i * fretWidth + 25}
                    y2={diagramHeight - 25}
                    stroke='black'
                    strokeWidth={i === 0 ? 4 : 2} // Thicker for nut
                />
            ))}

            {/* Draw Strings (horizontal lines) */}
            {[...Array(numStrings)].map((_, i) => (
                <line
                    key={`string-${i}`}
                    x1={25}
                    y1={i * stringSpacing + 25}
                    x2={diagramWidth - 25}
                    y2={i * stringSpacing + 25}
                    stroke='black'
                    strokeWidth={1.5}
                />
            ))}

            {/* Draw Single Fret Markers */}
            {singleDotFrets.map(
                fret =>
                    fret <= numFrets && (
                        <circle
                            key={`marker-${fret}`}
                            cx={fret * fretWidth + 25 - fretWidth / 2}
                            cy={diagramHeight / 1.99}
                            r={6}
                            fill='#aaa'
                        />
                    )
            )}

            {/* Draw Double Fret Markers */}
            {doubleDotFrets.map(
                fret =>
                    fret <= numFrets && (
                        <g key={`marker-double-${fret}`}>
                            <circle
                                cx={fret * fretWidth + 25 - fretWidth / 2}
                                cy={diagramHeight / 3 + 4}
                                r={6}
                                fill='#aaa'
                            />
                            <circle
                                cx={fret * fretWidth + 25 - fretWidth / 2}
                                cy={(diagramHeight * 1.96) / 3}
                                r={6}
                                fill='#aaa'
                            />
                        </g>
                    )
            )}

            {/* Draw Chord/Scale Notes (circles) */}
            {chordShape.map((pos, index) => {
                if (
                    pos.fret < 0 ||
                    pos.fret === null ||
                    pos.fret > numFrets ||
                    !fretboardMap
                ) return null; // Don't draw notes outside the fret range

                // Determine if the current note is the root
                // 1. Find the note name for this specific position using the map
                const note = fretboardMap[pos.string][pos.fret];
                // 2. Check if it matches the rootNote prop
                const isRoot = note === rootNote;
                // console.log(`Comparing: Note-from-map is '${note}', rootNote-prop is '${rootNote}', Match: ${isRoot}`);

                // For open strings (fret 0), place dot to the left of the nut
                if (pos.fret === 0) {
                    return (
                        <circle
                            key={`note-${index}`}
                            cx={15} // Position left of the nut
                            cy={pos.string * stringSpacing + 25}
                            r={8}
                            fill='transparent'
                            stroke={isRoot ? 'red' : '#39434b'}
                            strokeWidth='2'
                        />
                    );
                }

                // For fretted notes
                return (
                    <circle
                        key={`note-${index}`}
                        cx={(pos.fret - 1) * fretWidth + 25 + fretWidth / 2}
                        cy={pos.string * stringSpacing + 25}
                        r={10}
                        fill={isRoot ? 'red' : '#39434b'}
                    />
                );
            })}
        </svg>
    );
};

export default FretboardDiagram;
