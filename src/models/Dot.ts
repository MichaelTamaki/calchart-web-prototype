/*
 * Represents a marcher's starting position in
 * a Stuntsheet and how they will reach the
 * next Stuntsheet.
 *
 * Flow should be set by GenerateFlow.
 */
class Dot {
  dotType: number; // Defines which continuities to do
  coord: number[]; // (x, y) coordinates
  flow: number[][]; // (x, y) coordinates for each beat in time
  hasNextDot: boolean; // This dot is connected to the next stuntsheet's dot in the same index

  constructor (prevDot: Dot|undefined, coord: number[]|undefined) {
    this.dotType = 0
    this.hasNextDot = false
    if (prevDot === undefined) {
      this.coord = coord !== undefined ? coord : [0, 0]
      this.flow = [this.coord]
    } else {
      let flow = prevDot.flow
      this.coord = flow[flow.length - 1].slice()
      this.flow = [this.coord]
      prevDot.hasNextDot = true
    }
  }
}

export default Dot
