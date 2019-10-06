export enum MarchTypes {
  'MTHS' = 'MTHS',
  'FMHS' = 'FMHS',
  // 'DHS/FMHS',
  // 'FMHS/DHS',
  // 'MM'
};

export enum Directions {
  'EWNS' = 'EW/NS',
  'NSEW' = 'NS/EW',
  'E' = 'E',
  'W' = 'W',
  'N' = 'N',
  'S' = 'S'
};

/*
 * Represents an instruction on how a Dot's flow
 * should be generated from one Stuntsheet to the next.
 */
export class Continuity {
  marchType: MarchTypes;
  direction: Directions;
  beats: number|null;

  constructor (
    marchType = MarchTypes.MTHS,
    direction: Directions|undefined,
    beats: number|undefined) {
    this.marchType = marchType
    if (direction === undefined) {
      this.direction = this.marchType === MarchTypes.MTHS
        ? Directions.E
        : Directions.EWNS
    } else {
      this.direction = direction
    }
    this.beats = beats === undefined ? null : beats
  }

  toString (): string {
    let string: string = MarchTypes[this.marchType]
    if (this.beats !== null && this.beats !== 0) {
      string += ' ' + this.beats.toString()
    }
    string += ' ' + this.direction
    if ((this.beats === null || this.beats === 0) &&
      this.marchType === MarchTypes.MTHS) {
      string = '[' + string + ']'
    }
    return string
  }
};
