// Natural‐letter base semitones
const LETTER_BASE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

// Accidental offsets
const ACCIDENTAL_OFFSETS = {
    '#': 1,
    b: -1,
    '##': 2,
    bb: -2,
};

// In‐order letter array for degree math
const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Map semitone offsets → degree index (0 = unison, 1 = second, …)
// semitones : degree
const DEGREE_INDEX = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 5,
    10: 6,
    11: 6,
};

// Natural major-scale semitone offsets by degree:
export const MAJOR_SCALE_OFFSETS = {
  1: 0,   // R
  2: 2,   // 2
  3: 4,   // 3
  4: 5,   // 4
  5: 7,   // 5
  6: 9,   // 6
  7: 11,  // 7
};

/**
 * Parse a note name like "C#", "Eb", or "F" into a 0–11 semitone.
 */
export function noteNameToSemitone(name) {
    const letter = name[0].toUpperCase();
    const acc = name.slice(1) || '';
    const base = LETTER_BASE[letter] ?? 0;
    const offset = ACCIDENTAL_OFFSETS[acc] || 0;
    return (base + offset + 12) % 12;
}

/**
 * Spell an interval *number* relative to a given root.
 *
 * @param {string} rootName    e.g. "Db", "F#", "C"
 * @param {number} semitones   0…11 half-steps above root
 * @param {number} degree      1…7 which diatonic slot this is
 * @returns {string}           e.g. "R", "b3", "#5", "bb7"
 */
export function spellInterval(rootName, semitones, degree) {
    // If this matches major-scale interval exactly, no accidental
    if (MAJOR_SCALE_OFFSETS[degree] === semitones) {
        return degree === 1 ? 'R' : String(degree);
    }

    // Figure out how far off from that natural major step
    const rootSem = noteNameToSemitone(rootName);
    const naturalAbs = (rootSem + MAJOR_SCALE_OFFSETS[degree]) % 12;
    const actualAbs = (rootSem + semitones) % 12;
    let diff = (actualAbs - naturalAbs + 12) % 12;
    if (diff > 6) diff -= 12; // wrap values above 6 into negative

    // Map diff to accidental
    let acc = '';
    if (diff === 1) acc = '#';
    if (diff === -1) acc = 'b';
    if (diff === 2) acc = '##';
    if (diff === -2) acc = 'bb';

    // Prefix degree with accidental
    return acc + String(degree);
}

/**
 * Spell a note name relative to a given root.
 *
 * @param {string} rootName    e.g. "E", "Bb"
 * @param {number} semitones   0…11 half-steps above root
 * @returns {string}           e.g. "C", "D#", "Eb", "G"
 */
export function spellNote(rootName, semitones) {
    const rootLetter = rootName[0].toUpperCase();
    const rootSem = noteNameToSemitone(rootName);

    // Determine which letter to advance to
    // Here degreeIdx = semitones mapped to 0–6 as above
    const degreeIdx = DEGREE_INDEX[semitones];
    const rootIdx = LETTERS.indexOf(rootLetter);
    const letter = LETTERS[(rootIdx + degreeIdx) % 7];

    // Find letter's natural semitone
    const naturalSem = LETTER_BASE[letter];

    // If difference, it's accidental
    let diff = (rootSem + semitones - naturalSem + 12) % 12;
    if (diff > 6) diff -= 12;

    let acc = '';
    if (diff === 1) acc = '#';
    if (diff === -1) acc = 'b';
    if (diff === 2) acc = '##';
    if (diff === -2) acc = 'bb';

    // Combine
    return letter + acc;
}
