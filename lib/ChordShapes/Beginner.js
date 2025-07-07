// 0: 1st string
// 1: 2nd string
// 2: 3rd string
// 3: 4th string
// 4: 5th string
// 5: 6th string
export const BEGINNER_CHORD_SHAPES = {
    'CAGED': {
        levelName: 'Positions',
        options: {
            'C': {
                name: 'C Shape',
                rootString: 4,
                pattern: [
                    { string: 0, fretOffset: -3 },
                    { string: 1, fretOffset: -2 },
                    { string: 2, fretOffset: -3 },
                    { string: 3, fretOffset: -1 },
                    { string: 4, fretOffset: 0 },
                    { string: 5, fretOffset: null },
                ],
            },
            'A': {
                name: 'A Shape',
                rootString: 4,
                pattern: [
                    { string: 0, fretOffset: 0 },
                    { string: 1, fretOffset: 2 },
                    { string: 2, fretOffset: 2 },
                    { string: 3, fretOffset: 2 },
                    { string: 4, fretOffset: 0 },
                    { string: 5, fretOffset: null },
                ],
            },
            'G': {
                name: 'G Shape',
                rootString: 5,
                pattern: [
                    { string: 0, fretOffset: 0 },
                    { string: 1, fretOffset: -3 },
                    { string: 2, fretOffset: -3 },
                    { string: 3, fretOffset: -3 },
                    { string: 4, fretOffset: -1 },
                    { string: 5, fretOffset: 0 },
                ],
            },
            'E': {
                name: 'E Shape',
                rootString: 5,
                pattern: [
                    { string: 0, fretOffset: 0 },
                    { string: 1, fretOffset: 0 },
                    { string: 2, fretOffset: 1 },
                    { string: 3, fretOffset: 2 },
                    { string: 4, fretOffset: 2 },
                    { string: 5, fretOffset: 0 },
                ],
            },
            'D': {
                name: 'D Shape',
                rootString: 3,
                pattern: [
                    { string: 0, fretOffset: 2 },
                    { string: 1, fretOffset: 3 },
                    { string: 2, fretOffset: 2 },
                    { string: 3, fretOffset: 0 },
                    { string: 4, fretOffset: null },
                    { string: 5, fretOffset: null },
                ],
            },
        },
    },
    'Sevenths': {
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
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 3 },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: null },
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
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: -1 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
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
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 2 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
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
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: 1 },
                                    { string: 1, fretOffset: -1 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -1 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 0,
                                pattern: [
                                    { string: 0, fretOffset: 0 },
                                    { string: 1, fretOffset: -1 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: null },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                        },
                    },
                },
            },
            'Mid String Set': {
                levelName: 'Chord Qualities',
                options: {
                    'Maj7': {
                        levelName: 'Positions',
                        options: {
                            'Root': {
                                name: 'Root pos.',
                                rootString: 4,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 2 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 3 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 4 },
                                    { string: 4, fretOffset: 2 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: -1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: -1 },
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
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 2 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 3 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 3 },
                                    { string: 4, fretOffset: 1 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: -2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: -1 },
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
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 2 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 3 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 3 },
                                    { string: 4, fretOffset: 2 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: -1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: -1 },
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
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: null },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 2 },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 3 },
                                    { string: 4, fretOffset: 1 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 1 },
                                    { string: 2, fretOffset: -2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: -1 },
                                    { string: 5, fretOffset: null },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 1,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: 0 },
                                    { string: 2, fretOffset: -2 },
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
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 1 },
                                    { string: 4, fretOffset: 2 },
                                    { string: 5, fretOffset: 0 },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 4 },
                                    { string: 5, fretOffset: 2 },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: -1 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: 0 },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
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
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 2 },
                                    { string: 5, fretOffset: 0 },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 3 },
                                    { string: 5, fretOffset: 1 },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -2 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: 0 },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
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
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 2 },
                                    { string: 5, fretOffset: 0 },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 2 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 3 },
                                    { string: 5, fretOffset: 2 },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -1 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: 0 },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
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
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 1 },
                                    { string: 5, fretOffset: 0 },
                                ]
                            },
                            '1st Inv.': {
                                name: '1st Inv.',
                                rootString: 3,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 1 },
                                    { string: 3, fretOffset: 0 },
                                    { string: 4, fretOffset: 3 },
                                    { string: 5, fretOffset: 1 },
                                ],
                            },
                            '2nd Inv.': {
                                name: '2nd Inv.',
                                rootString: 4,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -2 },
                                    { string: 4, fretOffset: 0 },
                                    { string: 5, fretOffset: -1 },
                                ],
                            },
                            '3rd Inv.': {
                                name: '3rd Inv.',
                                rootString: 2,
                                pattern: [
                                    { string: 0, fretOffset: null },
                                    { string: 1, fretOffset: null },
                                    { string: 2, fretOffset: 0 },
                                    { string: 3, fretOffset: -1 },
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
};
