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
                    text: 'Note [Notes]',
                    arguments: {
                        Notes: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'NOTES_MENU',
                            defaultValue: 'C'
                        }
                    } 
                },
                {
                    opcode: 'accidental',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Accidental [Accidentals]',
                    arguments: {
                        Accidentals: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'ACCIDENTALS_MENU',
                            defaultValue: 'natural'
                        }
                    }
                },
                {
                    opcode: 'octave',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Octave [Octave]',
                    arguments: {
                        Octave: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        }
                    }
                },
                {
                    opcode: 'bpm',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'BPM at [BPM]',
                    arguments: {
                        BPM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '120'
                        }
                    }
                },
                {
                    opcode: 'measure',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Play on Beat [BEAT] of Measure [MEASURE]',
                    arguments: {
                        BEAT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        MEASURE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'playnote',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Play [NOTE] with Accidental [ACCIDENTAL] and at [OCTAVE] Octave. Play on Beat [beat] of Measure [measure] at [bpm] BPM',
                    arguments: {
                        NOTE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        ACCIDENTAL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'natural'
                        },
                        OCTAVE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5'
                        },
                        beat: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        measure: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                        },
                        bpm: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '120'
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
                    return args(Notes + 0.5);
                }
            }
        }
    }
    accidental (args) {
        return args.Accidentals;
    }
    octave (args) {
        return args.Octave;
    }
    bpm (args) {
        return args.BPM;
    }
    measure (args) {
        return args.BEAT;
        return args.MEASURE;
    }
    playnote (args) {
        if (await Scratch.canFetch('www.youtube.com/watch?v=_q8QmJadSEE')) {
            const audio = new audio('www.youtube.com/watch?v=_q8QmJadSEE');
        }
        vm.setPitch
    }

}
Scratch.extensions.register(new ExtraRealisticMusic());
})(Scratch);