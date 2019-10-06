/*
 * Represents a marcher's starting position in
 * a Stuntsheet and how they will reach the
 * next Stuntsheet.
 * Flow should be set by GenerateFlow.
 */
class Dot {
  dotType: number;
  coord: number[];
  flow: number[][];
  nextDot: Dot|null;

  constructor (prevDot: Dot|undefined, coord: number[]|undefined) {
    this.dotType = 0
    this.nextDot = null
    if (prevDot === undefined) {
      this.coord = coord !== undefined ? coord : [0, 0]
      this.flow = [this.coord]
    } else {
      let flow = prevDot.flow
      this.coord = flow[flow.length - 1].slice()
      this.flow = [this.coord]
      prevDot.nextDot = this
    }
  }

  flowIsValid (): boolean {
    if (this.flow[0][0] !== this.coord[0] &&
      this.flow[0][1] !== this.coord[1]) { return false }

    if (this.nextDot === null) { return this.flow.length === 1 }

    return this.flow[this.flow.length - 1][0] === this.nextDot.coord[0] &&
      this.flow[this.flow.length - 1][1] === this.nextDot.coord[1]
  };
}

export default Dot
