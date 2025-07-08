// 0: 1st string
// 1: 2nd string
// 2: 3rd string
// 3: 4th string
// 4: 5th string
// 5: 6th string
export const INTERMEDIATE_CHORD_SHAPES = {
    'Sevenths': {
        levelName: 'Voicing Types',
        options: {
            'Drop 3': {
                levelName: 'String Sets',
                options: {
                    'High String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 11, degree: 7 },
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 4, semitones: 11, degree: 7 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -2, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                        },
                    },
                    'Low String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 11, degree: 7 },
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 3, semitones: 11, degree: 7 },
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 11, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                    options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 2, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 2, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: 2, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'Drop 2 of 2': {
                levelName: 'String Sets',
                options: {
                    'High String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 11, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 4, semitones: 11, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 3, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 3, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 3, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                        },
                    },
                    'Low String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 11, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 4, semitones: 11, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 3, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 3, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 3, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'Drop 3 of 2': {
                levelName: 'String Sets',
                options: {
                    'High String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 11, degree: 7 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 2, semitones: 11, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -1, semitones: 4, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 6th-string not played
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 4, fretOffset: -2, semitones: 3, degree: 3 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 4, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 6th-string not played
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 6th-string not played
                                        ],
                                    },
                                },
                            },
                        },
                    },
                    'Low String Set': {
                        levelName: 'Chord Qualities',
                        options: {
                            'Maj7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 4, semitones: 11, degree: 7 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 11, degree: 7 },
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 2, semitones: 11, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Dom7': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -1, semitones: 7, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: -1, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: 0, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 7, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                            'Min7b5': {
                                levelName: 'Positions',
                                options: {
                                    'Root': {
                                        name: 'Root pos.',
                                        rootString: 5,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 3, semitones: 10, degree: 7 },
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 2, fretOffset: -2, semitones: 6, degree: 5 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 10, degree: 7 },
                                            { string: 5, fretOffset: -2, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -1, semitones: 6, degree: 5 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            // 1st-string not played
                                            { string: 1, fretOffset: 2, semitones: 6, degree: 5 },
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 1, semitones: 10, degree: 7 },
                                        ],
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'Raise 3/1 of 2': {
                levelName: 'Chord Qualities',
                options: {
                    'Maj7': {
                        levelName: 'Positions',
                        options: {
                            'Root': {
                                name: 'Root pos.',
                                rootString: 5,
                                pattern: [
                                    { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 1, semitones: 11, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                    { string: 1, fretOffset: 2, semitones: 11, degree: 7 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: -3, semitones: 11, degree: 7 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 2, semitones: 11, degree: 7 },
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2, semitones: 11, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -1, semitones: 11, degree: 7 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -1, semitones: 11, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -1, semitones: 11, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -1, semitones: 11, degree: 7 },
                                        ],
                                    }
                                ],
                            },
                        },
                    },
                    'Min7': {
                        levelName: 'Positions',
                        options: {
                            'Root': {
                                name: 'Root pos.',
                                rootString: 5,
                                pattern: [
                                    { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                    { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: -4, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 5, semitones: 10, degree: 7 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 5, semitones: 10, degree: 7 },
                                            { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 5, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: 2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 3, degree: 3 },
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    'Dom7': {
                        levelName: 'Positions',
                        options: {
                            'Root': {
                                name: 'Root pos.',
                                rootString: 5,
                                pattern: [
                                    { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                    { string: 1, fretOffset: 0, semitones: 7, degree: 5 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4, semitones: 4, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 4, semitones: 7, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                    { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            { string: 1, fretOffset: -4, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 5, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 5, semitones: 10, degree: 7 },
                                            { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 2, semitones: 4, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 7, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -3, semitones: 4, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                    // 2nd-string not played
                                    { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 3, fretOffset: -3, semitones: 4, degree: 3 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 4, degree: 3 },
                                            { string: 5, fretOffset: -2, semitones: 7, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -3, semitones: 4, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            { string: 3, fretOffset: -3, semitones: 7, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 1, semitones: 4, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 2, semitones: 7, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    }
                                ],
                            },
                        },
                    },
                    'Min7b5': {
                        levelName: 'Positions',
                        options: {
                            'Root': {
                                name: 'Root pos.',
                                rootString: 5,
                                pattern: [
                                    { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                    { string: 1, fretOffset: -1, semitones: 6, degree: 5 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3, semitones: 3, degree: 3 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 3, semitones: 6, degree: 5 },
                                            { string: 3, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: 0, semitones: 0, degree: 1 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 4, semitones: 6, degree: 5 },
                                    { string: 1, fretOffset: 1, semitones: 10, degree: 7 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 1, semitones: 3, degree: 3 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            { string: 1, fretOffset: -4, semitones: 10, degree: 7 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1, semitones: 6, degree: 5 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 10, degree: 7 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 5, fretOffset: -4, semitones: 3, degree: 3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 5, semitones: 10, degree: 7 },
                                    { string: 1, fretOffset: 0, semitones: 0, degree: 1 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: 0, semitones: 3, degree: 3 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: 1, semitones: 6, degree: 5 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1, semitones: 10, degree: 7 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 3, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -3, semitones: 6, degree: 5 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                    { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                    // 3rd-string not played
                                    { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                    // 5th-string not played
                                    { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            { string: 1, fretOffset: -4, semitones: 3, degree: 3 },
                                            // 3rd-string not played
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            { string: 3, fretOffset: -4, semitones: 6, degree: 5 },
                                            // 5th-string not played
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0, semitones: 0, degree: 1 },
                                            // 2nd-string not played
                                            { string: 2, fretOffset: 0, semitones: 3, degree: 3 },
                                            // 4th-string not played
                                            { string: 4, fretOffset: 1, semitones: 6, degree: 5 },
                                            { string: 5, fretOffset: -2, semitones: 10, degree: 7 },
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                },
            },
        },
    },
};
