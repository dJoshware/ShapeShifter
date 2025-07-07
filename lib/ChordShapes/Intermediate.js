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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 4 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: -2 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -2 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 3 },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: -1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: -1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: -1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -1 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 1 },
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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: -1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 4 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 3 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 2 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 3 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -1 },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 3 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 4 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -2 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 3 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 3 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: -1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -2 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 1 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 3 },
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
                                            { string: 0, fretOffset: 4 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 3 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 3 },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 2 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: 3 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -2 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: -1 },
                                            { string: 5, fretOffset: null },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: null },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 4 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: -1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: 2 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: 1 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -1 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: 1 },
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
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 3 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: 0 },
                                        ]
                                    },
                                    '1st Inv.': {
                                        name: '1st Inv.',
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: -2 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    '2nd Inv.': {
                                        name: '2nd Inv.',
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 1 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -1 },
                                        ],
                                    },
                                    '3rd Inv.': {
                                        name: '3rd Inv.',
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: null },
                                            { string: 1, fretOffset: 2 },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: 1 },
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
                                    { string: 0, fretOffset: 4 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 0 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 4 },
                                            { string: 3, fretOffset: 1 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5 },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -3 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -3 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 2 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: -3 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: -3 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -3 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -1 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: -3 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -1 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -1 },
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
                                    { string: 0, fretOffset: 3 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 0 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 4 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -4 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -4 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -4 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 5 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 1,
                                        pattern: [
                                            { string: 0, fretOffset: 5 },
                                            { string: 1, fretOffset: 0 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 5 },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -4 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: -4 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: -3 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -3 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -2 },
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
                                    { string: 0, fretOffset: 4 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 0 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 4 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 4 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 5 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -4 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -3 },
                                        ],
                                    },
                                    {
                                        rootString: 3,
                                        pattern: [
                                            { string: 0, fretOffset: 5 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 5 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 2 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -3 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -3 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: -3 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: -3 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -3 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: -3 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 1 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 2 },
                                            { string: 5, fretOffset: -2 },
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
                                    { string: 0, fretOffset: 3 },
                                    { string: 1, fretOffset: -1 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 0 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 5,
                                        pattern: [
                                            { string: 0, fretOffset: 3 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 3 },
                                            { string: 3, fretOffset: 0 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: 0 },
                                        ],
                                    },
                                ],
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 4 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: -4 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -4 },
                                        ],
                                    },
                                    {
                                        rootString: 4,
                                        pattern: [
                                            { string: 0, fretOffset: -1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 0 },
                                            { string: 5, fretOffset: -4 },
                                        ],
                                    },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 5 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: 1 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 2,
                                        pattern: [
                                            { string: 0, fretOffset: 1 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -4 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -3 },
                                        ],
                                    },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: -4 },
                                    { string: 2, fretOffset: null },
                                    { string: 3, fretOffset: -4 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: -2 },
                                ],
                                altShapes: [
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: -4 },
                                            { string: 2, fretOffset: null },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: -4 },
                                            { string: 4, fretOffset: null },
                                            { string: 5, fretOffset: -2 },
                                        ],
                                    },
                                    {
                                        rootString: 0,
                                        pattern: [
                                            { string: 0, fretOffset: 0 },
                                            { string: 1, fretOffset: null },
                                            { string: 2, fretOffset: 0 },
                                            { string: 3, fretOffset: null },
                                            { string: 4, fretOffset: 1 },
                                            { string: 5, fretOffset: -2 },
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
