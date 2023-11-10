(function(scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This Extension Must Run Unsandboxed');
    }
    const vm = Scratch.vm;

class ExtraRealisticMusic {
    getInfo() {
        return {
            id: 'extrarealisticmusicunsandboxed',
            name: 'Extra Realistic Music Unsandboxed',
            blocks: [
                {
                    opcode: 'note',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Note [Notes] With Accidental [Accidentals]',
                    arguments: {
                        Notes: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'NOTES_MENU'
                        },
                        Accidentals: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'ACCIDENTALS_MENU'
                        }
                    } 
                }
            ],
            menus: {
                NOTES_MENU: {
                    acceptReporters: false,
                    items: [
                        {
                            text: 'A',
                            value: '1'
                        },
                        {
                            text: 'B',
                            value: '2'
                        },
                        {
                            text: 'C',
                            value: '3'
                        },
                        {
                            text: 'D',
                            value: '4'
                        },
                        {
                            text: 'E',
                            value: '5'
                        },
                        {
                            text: 'F',
                            value: '6'
                        },
                        {
                            text: 'G',
                            value: '7'
                        }
                    ]
                },
                ACCIDENTALS_MENU: {
                    acceptReporters: false,
                    items: ['flat', 'natural', 'sharp']
                }
            }
        };
    }
    note (args) {
        if (args.Accidentals == 'flat') {
            return args.Notes - 0.5;
        } else {
            if (args.Accidentals == 'natural') {
                return args.Notes;
            } else {

                if (args.Accidentals == 'sharp') {
                    return args.Notes + 0.5;
                }
            }
        }
    }
}
Scratch.extensions.register(new ExtraRealisticMusic());
})(Scratch);