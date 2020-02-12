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




// *********************** BY Year **************************
// const y1ColorLecture = "#FFA500";
// const y1ColorLab = "#CC8400";
// const y1ColorTutorial = "#996300";

// const y2ColorLecture = "#008080";
// const y2ColorLab = "#006666";
// const y2ColorTutorial = "#004C4C";

// const y3ColorLecture = "#4E4EDB";
// const y3ColorLab = "#3E3EAF";
// const y3ColorTutorial = "#2E2E83";

// const y4ColorLecture = "#F0C511";
// const y4ColorLab = "#C09D0D";
// const y4ColorTutorial = "#90760A";


// export const DATA: TagNode[] = [
//     {
//         name: "EECS",
//         children: [
//             {
//                 name: "Y1",
//                 tags: [
//                     {
//                         name: "Y1 Lecture",
//                         selected: false,
//                         color: y1ColorLecture
//                     },
//                     {
//                         name: "Y1 Lab",
//                         selected: false,
//                         color: y1ColorLab
//                     },
//                     {
//                         name: "Y1 Tutorials",
//                         selected: false,
//                         color: y1ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y2",
//                 tags: [
//                     {
//                         name: "Y2 Lecture",
//                         selected: false,
//                         color: y2ColorLecture
//                     },
//                     {
//                         name: "Y2 Lab",
//                         selected: false,
//                         color: y2ColorLab
//                     },
//                     {
//                         name: "Y2 Tutorials",
//                         selected: false,
//                         color: y2ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y3",
//                 tags: [
//                     {
//                         name: "Y3 Lecture",
//                         selected: false,
//                         color: y3ColorLecture
//                     },
//                     {
//                         name: "Y3 Lab",
//                         selected: false,
//                         color: y3ColorLab
//                     },
//                     {
//                         name: "Y3 Tutorials",
//                         selected: false,
//                         color: y3ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y4",
//                 tags: [
//                     {
//                         name: "Y4 Lecture",
//                         selected: false,
//                         color: y4ColorLecture
//                     },
//                     {
//                         name: "Y4 Lab",
//                         selected: false,
//                         color: y4ColorLab
//                     },
//                     {
//                         name: "Y4 Tutorials",
//                         selected: false,
//                         color: y4ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             }
//         ]
//     },
//     {
//         name: "MECH",
//         children: [
//             {
//                 name: "Y1",
//                 tags: [
//                     {
//                         name: "Y1 Lecture",
//                         selected: false,
//                         color: y1ColorLecture
//                     },
//                     {
//                         name: "Y1 Lab",
//                         selected: false,
//                         color: y1ColorLab
//                     },
//                     {
//                         name: "Y1 Tutorials",
//                         selected: false,
//                         color: y1ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y2",
//                 tags: [
//                     {
//                         name: "Y2 Lecture",
//                         selected: false,
//                         color: y2ColorLecture
//                     },
//                     {
//                         name: "Y2 Lab",
//                         selected: false,
//                         color: y2ColorLab
//                     },
//                     {
//                         name: "Y2 Tutorials",
//                         selected: false,
//                         color: y2ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y3",
//                 tags: [
//                     {
//                         name: "Y3 Lecture",
//                         selected: false,
//                         color: y3ColorLecture
//                     },
//                     {
//                         name: "Y3 Lab",
//                         selected: false,
//                         color: y3ColorLab
//                     },
//                     {
//                         name: "Y3 Tutorials",
//                         selected: false,
//                         color: y3ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y4",
//                 tags: [
//                     {
//                         name: "Y4 Lecture",
//                         selected: false,
//                         color: y4ColorLecture
//                     },
//                     {
//                         name: "Y4 Lab",
//                         selected: false,
//                         color: y4ColorLab
//                     },
//                     {
//                         name: "Y4 Tutorials",
//                         selected: false,
//                         color: y4ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             }
//         ]
//     },
//     {
//         name: "CIVL",
//         children: [
//             {
//                 name: "Y1",
//                 tags: [
//                     {
//                         name: "Y1 Lecture",
//                         selected: false,
//                         color: y1ColorLecture
//                     },
//                     {
//                         name: "Y1 Lab",
//                         selected: false,
//                         color: y1ColorLab
//                     },
//                     {
//                         name: "Y1 Tutorials",
//                         selected: false,
//                         color: y1ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y2",
//                 tags: [
//                     {
//                         name: "Y2 Lecture",
//                         selected: false,
//                         color: y2ColorLecture
//                     },
//                     {
//                         name: "Y2 Lab",
//                         selected: false,
//                         color: y2ColorLab
//                     },
//                     {
//                         name: "Y2 Tutorials",
//                         selected: false,
//                         color: y2ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y3",
//                 tags: [
//                     {
//                         name: "Y3 Lecture",
//                         selected: false,
//                         color: y3ColorLecture
//                     },
//                     {
//                         name: "Y3 Lab",
//                         selected: false,
//                         color: y3ColorLab
//                     },
//                     {
//                         name: "Y3 Tutorials",
//                         selected: false,
//                         color: y3ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y4",
//                 tags: [
//                     {
//                         name: "Y4 Lecture",
//                         selected: false,
//                         color: y4ColorLecture
//                     },
//                     {
//                         name: "Y4 Lab",
//                         selected: false,
//                         color: y4ColorLab
//                     },
//                     {
//                         name: "Y4 Tutorials",
//                         selected: false,
//                         color: y4ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             }
//         ]
//     },
//     {
//         name: "ESSE",
//         children: [
//             {
//                 name: "Y1",
//                 tags: [
//                     {
//                         name: "Y1 Lecture",
//                         selected: false,
//                         color: y1ColorLecture
//                     },
//                     {
//                         name: "Y1 Lab",
//                         selected: false,
//                         color: y1ColorLab
//                     },
//                     {
//                         name: "Y1 Tutorials",
//                         selected: false,
//                         color: y1ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y2",
//                 tags: [
//                     {
//                         name: "Y2 Lecture",
//                         selected: false,
//                         color: y2ColorLecture
//                     },
//                     {
//                         name: "Y2 Lab",
//                         selected: false,
//                         color: y2ColorLab
//                     },
//                     {
//                         name: "Y2 Tutorials",
//                         selected: false,
//                         color: y2ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y3",
//                 tags: [
//                     {
//                         name: "Y3 Lecture",
//                         selected: false,
//                         color: y3ColorLecture
//                     },
//                     {
//                         name: "Y3 Lab",
//                         selected: false,
//                         color: y3ColorLab
//                     },
//                     {
//                         name: "Y3 Tutorials",
//                         selected: false,
//                         color: y3ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y4",
//                 tags: [
//                     {
//                         name: "Y4 Lecture",
//                         selected: false,
//                         color: y4ColorLecture
//                     },
//                     {
//                         name: "Y4 Lab",
//                         selected: false,
//                         color: y4ColorLab
//                     },
//                     {
//                         name: "Y4 Tutorials",
//                         selected: false,
//                         color: y4ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             }
//         ]
//     },
//     {
//         name: "ENG",
//         children: [
//             {
//                 name: "Y1",
//                 tags: [
//                     {
//                         name: "Y1 Lecture",
//                         selected: false,
//                         color: y1ColorLecture
//                     },
//                     {
//                         name: "Y1 Lab",
//                         selected: false,
//                         color: y1ColorLab
//                     },
//                     {
//                         name: "Y1 Tutorials",
//                         selected: false,
//                         color: y1ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y2",
//                 tags: [
//                     {
//                         name: "Y2 Lecture",
//                         selected: false,
//                         color: y2ColorLecture
//                     },
//                     {
//                         name: "Y2 Lab",
//                         selected: false,
//                         color: y2ColorLab
//                     },
//                     {
//                         name: "Y2 Tutorials",
//                         selected: false,
//                         color: y2ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y3",
//                 tags: [
//                     {
//                         name: "Y3 Lecture",
//                         selected: false,
//                         color: y3ColorLecture
//                     },
//                     {
//                         name: "Y3 Lab",
//                         selected: false,
//                         color: y3ColorLab
//                     },
//                     {
//                         name: "Y3 Tutorials",
//                         selected: false,
//                         color: y3ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             },
//             {
//                 name: "Y4",
//                 tags: [
//                     {
//                         name: "Y4 Lecture",
//                         selected: false,
//                         color: y4ColorLecture
//                     },
//                     {
//                         name: "Y4 Lab",
//                         selected: false,
//                         color: y4ColorLab
//                     },
//                     {
//                         name: "Y4 Tutorials",
//                         selected: false,
//                         color: y4ColorTutorial
//                     }
//                 ],
//                 leaf: true
//             }
//         ]
//     }
// ]


// ************************************************** BY DEPT ************************
const eecsColor = "#013A67";

const mechColor = "#009A99";

const civilColor = "#E56F26";

const esseColor = "#CD5D5D";

const engColor = "#E1AA12";

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
                        color: eecsColor
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: eecsColor
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: eecsColor
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
                        color: eecsColor
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: eecsColor
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: eecsColor
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
                        color: eecsColor
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: eecsColor
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: eecsColor
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
                        color: eecsColor
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: eecsColor
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: eecsColor
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
                        color: mechColor
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: mechColor
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: mechColor
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
                        color: mechColor
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: mechColor
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: mechColor
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
                        color: mechColor
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: mechColor
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: mechColor
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
                        color: mechColor
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: mechColor
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: mechColor
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
                        color: civilColor
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: civilColor
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: civilColor
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
                        color: civilColor
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: civilColor
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: civilColor
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
                        color: civilColor
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: civilColor
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: civilColor
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
                        color: civilColor
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: civilColor
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: civilColor
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
                        color: esseColor
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: esseColor
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: esseColor
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
                        color: esseColor
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: esseColor
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: esseColor
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
                        color: esseColor
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: esseColor
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: esseColor
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
                        color: esseColor
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: esseColor
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: esseColor
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
                        color: engColor
                    },
                    {
                        name: "Y1 Lab",
                        selected: false,
                        color: engColor
                    },
                    {
                        name: "Y1 Tutorials",
                        selected: false,
                        color: engColor
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
                        color: engColor
                    },
                    {
                        name: "Y2 Lab",
                        selected: false,
                        color: engColor
                    },
                    {
                        name: "Y2 Tutorials",
                        selected: false,
                        color: engColor
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
                        color: engColor
                    },
                    {
                        name: "Y3 Lab",
                        selected: false,
                        color: engColor
                    },
                    {
                        name: "Y3 Tutorials",
                        selected: false,
                        color: engColor
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
                        color: engColor
                    },
                    {
                        name: "Y4 Lab",
                        selected: false,
                        color: engColor
                    },
                    {
                        name: "Y4 Tutorials",
                        selected: false,
                        color: engColor
                    }
                ],
                leaf: true
            }
        ]
    }
]