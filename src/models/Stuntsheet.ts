import { Continuity } from './Continuity'
import Dot from './Dot'

/*
 * Holds all dots and information needed to
 * generate each dots' flows to their nextDot.
 */
class Stuntsheet {
  beats: number; // Number of beats
  dotTypes: Continuity[][]; // Dot Types represent the list of continuities a dot does
  dots: Dot[]; // The index of each dot is their unique identifier

  constructor (
    beats: number|undefined,
    dotNum: number|undefined,
    prevSS: Stuntsheet|undefined) {
    this.beats = beats !== undefined ? beats : 32
    this.dotTypes = [[new Continuity(undefined, undefined, undefined)]]
    this.dots = []
    if (dotNum !== undefined) {
      let x = 0
      let y = 0
      while (this.dots.push(new Dot(undefined, [x, y])) < dotNum) {
        x += 2
      }
    } else if (prevSS !== undefined) {
      let dots: Dot[] = []
      prevSS.dots.forEach(function (dot) {
        dots.push(new Dot(dot, undefined))
      })
      this.dots = dots
    }
  }
};

export default Stuntsheet
