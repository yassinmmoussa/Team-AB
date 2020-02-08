import { TagNode } from "./tag-list.component";

// const lecturesAndLabs: TagNode[] = [
//     {
//         name: "Y1",
//         tags: [
//             {
//                 name: "Y1 Lecture",
//                 selected: false
//             },
//             {
//                 name: "Y1 Lab",
//                 selected: false
//             },
//             {
//                 name: "Y1 Tutorials",
//                 selected: false
//             }
//         ],
//         leaf: true
//     },
//     {
//         name: "Y2",
//         tags: [
//             {
//                 name: "Y2 Lecture",
//                 selected: false
//             },
//             {
//                 name: "Y2 Lab",
//                 selected: false
//             },
//             {
//                 name: "Y2 Tutorials",
//                 selected: false
//             }
//         ],
//         leaf: true
//     },
//     {
//         name: "Y3",
//         tags: [
//             {
//                 name: "Y3 Lecture",
//                 selected: false
//             },
//             {
//                 name: "Y3 Lab",
//                 selected: false
//             },
//             {
//                 name: "Y3 Tutorials",
//                 selected: false
//             }
//         ],
//         leaf: true
//     },
//     {
//         name: "Y4",
//         tags: [
//             {
//                 name: "Y4 Lecture",
//                 selected: false
//             },
//             {
//                 name: "Y4 Lab",
//                 selected: false
//             },
//             {
//                 name: "Y4 Tutorials",
//                 selected: false
//             }
//         ],
//         leaf: true
//     }
// ]

const y1ColorLecture = "#FFA500";
const y1ColorLab = "#CC8400";
const y1ColorTutorial = "#996300";

const y2ColorLecture = "#008080";
const y2ColorLab = "#006666";
const y2ColorTutorial = "#004C4C";

const y3ColorLecture = "#4E4EDB";
const y3ColorLab = "#3E3EAF";
const y3ColorTutorial = "#2E2E83";

const y4ColorLecture = "#F0C511";
const y4ColorLab = "#C09D0D";
const y4ColorTutorial = "#90760A";


export const DATA: TagNode[] = [
    {
        name: "EECS",
        children: [
            {
                name: "Y1",
                tags: [
                    {
                        name: "Y1 Lecture",
                        selected: false,
                        color: y1ColorLecture
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: y1ColorLab
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: y1ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y2",
                tags: [
                    {
                        name: "Y2 Lecture",
                        selected: false,
                        color: y2ColorLecture
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: y2ColorLab
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: y2ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y3",
                tags: [
                    {
                        name: "Y3 Lecture",
                        selected: false,
                        color: y3ColorLecture
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: y3ColorLab
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: y3ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y4",
                tags: [
                    {
                        name: "Y4 Lecture",
                        selected: false,
                        color: y4ColorLecture
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: y4ColorLab
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: y4ColorTutorial
                    }
                ],
                leaf: true
            }
        ]
    },
    {
        name: "MECH",
        children: [
            {
                name: "Y1",
                tags: [
                    {
                        name: "Y1 Lecture",
                        selected: false,
                        color: y1ColorLecture
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: y1ColorLab
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: y1ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y2",
                tags: [
                    {
                        name: "Y2 Lecture",
                        selected: false,
                        color: y2ColorLecture
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: y2ColorLab
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: y2ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y3",
                tags: [
                    {
                        name: "Y3 Lecture",
                        selected: false,
                        color: y3ColorLecture
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: y3ColorLab
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: y3ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y4",
                tags: [
                    {
                        name: "Y4 Lecture",
                        selected: false,
                        color: y4ColorLecture
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: y4ColorLab
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: y4ColorTutorial
                    }
                ],
                leaf: true
            }
        ]
    },
    {
        name: "CIVL",
        children: [
            {
                name: "Y1",
                tags: [
                    {
                        name: "Y1 Lecture",
                        selected: false,
                        color: y1ColorLecture
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: y1ColorLab
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: y1ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y2",
                tags: [
                    {
                        name: "Y2 Lecture",
                        selected: false,
                        color: y2ColorLecture
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: y2ColorLab
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: y2ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y3",
                tags: [
                    {
                        name: "Y3 Lecture",
                        selected: false,
                        color: y3ColorLecture
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: y3ColorLab
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: y3ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y4",
                tags: [
                    {
                        name: "Y4 Lecture",
                        selected: false,
                        color: y4ColorLecture
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: y4ColorLab
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: y4ColorTutorial
                    }
                ],
                leaf: true
            }
        ]
    },
    {
        name: "ESSE",
        children: [
            {
                name: "Y1",
                tags: [
                    {
                        name: "Y1 Lecture",
                        selected: false,
                        color: y1ColorLecture
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: y1ColorLab
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: y1ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y2",
                tags: [
                    {
                        name: "Y2 Lecture",
                        selected: false,
                        color: y2ColorLecture
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: y2ColorLab
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: y2ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y3",
                tags: [
                    {
                        name: "Y3 Lecture",
                        selected: false,
                        color: y3ColorLecture
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: y3ColorLab
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: y3ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y4",
                tags: [
                    {
                        name: "Y4 Lecture",
                        selected: false,
                        color: y4ColorLecture
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: y4ColorLab
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: y4ColorTutorial
                    }
                ],
                leaf: true
            }
        ]
    },
    {
        name: "ENG",
        children: [
            {
                name: "Y1",
                tags: [
                    {
                        name: "Y1 Lecture",
                        selected: false,
                        color: y1ColorLecture
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: y1ColorLab
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: y1ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y2",
                tags: [
                    {
                        name: "Y2 Lecture",
                        selected: false,
                        color: y2ColorLecture
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: y2ColorLab
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: y2ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y3",
                tags: [
                    {
                        name: "Y3 Lecture",
                        selected: false,
                        color: y3ColorLecture
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: y3ColorLab
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: y3ColorTutorial
                    }
                ],
                leaf: true
            },
            {
                name: "Y4",
                tags: [
                    {
                        name: "Y4 Lecture",
                        selected: false,
                        color: y4ColorLecture
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: y4ColorLab
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: y4ColorTutorial
                    }
                ],
                leaf: true
            }
        ]
    }
]