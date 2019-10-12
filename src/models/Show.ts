import Stuntsheet from './Stuntsheet'
import Dot from './Dot'

/*
 * Holds the collection of Stuntsheets and descriptors
 * for a Marching Band Show.
 */
export class Show {
  title: string;
  stuntSheets: Stuntsheet[];
  dotLabels: string[]

  constructor (title: string, dotNum: number, dotLabels: string[]) {
    this.title = title
    this.stuntSheets = [new Stuntsheet(undefined, dotNum, undefined)]
    this.dotLabels = dotLabels
  }

  addNewStuntsheet (beats: number): void {
    this.stuntSheets.push(new Stuntsheet(
      beats, undefined, this.stuntSheets[this.stuntSheets.length - 1]
    ))
  };

  /*
   * Helper function to set all Dots' nextDot to null.
   * Helpful if author wants to focus on setting Dots'
   * coordinates without worrying about Continuities.
   * Then, the author can manually set each nextDot
   * and work on the flows.
   */
  unsetNextDots (stuntsheetIndex: number): void {
    this.stuntSheets[stuntsheetIndex].dots.forEach(function (dot: Dot, index: number) {
      if (dot.hasNextDot) {
        dot.flow = [dot.coord]
        dot.hasNextDot = false
      }
    })
  };
};

/*
 * Dot Label Generation helper functions
 *
 * Numerical: [1, 2, 3, 4, 5, 6, 7, ...]
 */
const generateNumericalLabels = function (maxNum: number): string[] {
  let i = 1
  let arr: string[] = []
  while (arr.push((i++).toString()) < maxNum);
  return arr
}

export const ShowLabels: string[][] = [
  generateNumericalLabels(400)
]
