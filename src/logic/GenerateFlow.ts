import { Continuity, MarchTypes, Directions } from '@/models/Continuity'
import Dot from '@/models/Dot'
import { Show } from '@/models/Show'

const ewFlowHelper = function (flow: number[][], toDotCoord: number[]): void {
  let coordX = flow[flow.length - 1][0]
  let coordY = flow[flow.length - 1][1]
  let toDotY = toDotCoord[1]
  let direction = coordY < toDotY ? 1 : -1

  while (coordY !== toDotY) {
    coordY += direction
    flow.push([coordX, coordY])
  }
}

const nsFlowHelper = function (flow: number[][], toDotCoord: number[]): void {
  let coordX = flow[flow.length - 1][0]
  let coordY = flow[flow.length - 1][1]
  let toDotX = toDotCoord[0]
  let direction = coordX < toDotX ? 1 : -1

  while (coordX !== toDotX) {
    coordX += direction
    flow.push([coordX, coordY])
  }
}

/*
 * Calculates how marchers will reach the next Stuntsheet
 * by reading their list of Continuities.
 */
const generateFlow = function (show: Show, stuntsheetIndex: number, dots: Dot[]): void {
  var fromSS = show.stuntSheets[stuntsheetIndex]
  var toSS = show.stuntSheets[stuntsheetIndex + 1]

  dots.forEach(function (fromDot: Dot) {
    if (!fromDot.hasNextDot) return

    let fromIndex = fromSS.dots.indexOf(fromDot)
    var toDot: Dot = toSS.dots[fromIndex]
    var continuities: Continuity[] = fromSS.dotTypes[fromDot.dotType]
    var flow: number[][] = [fromDot.coord]

    continuities.forEach(function (continuity: Continuity, toIndex: number) {
      if (flow[flow.length - 1] === toDot.coord) return

      if (continuity.marchType === MarchTypes.MTHS) {
        // MTHS
        if (continuity.beats === null) return
        let i = toIndex === 0 ? 1 : 0
        for (; i < continuity.beats; i++) {
          flow.push(flow[flow.length - 1])
        }
      } else if (continuity.marchType === MarchTypes.FMHS) {
        // FMHS
        if (continuity.direction === Directions.EWNS) {
          // EW/NS
          ewFlowHelper(flow, toDot.coord)
          nsFlowHelper(flow, toDot.coord)
        } else if (continuity.direction === Directions.NSEW) {
          // NS/EW
          nsFlowHelper(flow, toDot.coord)
          ewFlowHelper(flow, toDot.coord)
        }
      }
    })

    fromDot.flow = flow
  })
}

export default generateFlow
