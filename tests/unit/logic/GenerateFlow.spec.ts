import generateFlow from '@/logic/GenerateFlow'
import { Show, ShowLabels } from '@/models/Show'
import { Continuity, MarchTypes, Directions } from '@/models/Continuity'
import Dot from '@/models/Dot'

describe('GenerateFlow', () => {
  let show: Show
  beforeEach(() => {
    show = new Show('T Swizzle Show', 1, ShowLabels[0])
    show.addNewStuntsheet(16)
  })

  test('no flow if start and end coord are the same', () => {
    let firstSSDot: Dot = show.stuntSheets[0].dots[0]
    let secondSSDot: Dot = show.stuntSheets[1].dots[0]
    expect(firstSSDot.coord).toEqual(secondSSDot.coord)
    generateFlow(show, 0, [firstSSDot])
    expect(firstSSDot.flow).toHaveLength(1)
    expect(firstSSDot.flow).toEqual([firstSSDot.coord])
    expect(firstSSDot.flowIsValid()).toBe(true)
  })

  describe('FHS', () => {
    let firstSSDot: Dot,
      secondSSDot: Dot

    beforeEach(() => {
      firstSSDot = show.stuntSheets[0].dots[0]
      secondSSDot = show.stuntSheets[1].dots[0]
      secondSSDot.coord = [firstSSDot.coord[0] + 2, firstSSDot.coord[1] + 2]
    })

    test('FHS EW/NS', () => {
      show.stuntSheets[0].dotTypes[0].splice(0, 0, new Continuity(
        MarchTypes.FMHS,
        Directions.EWNS,
        undefined
      ))
      generateFlow(show, 0, [firstSSDot])
      expect(firstSSDot.flow).toHaveLength(5)
      expect(firstSSDot.flow).toEqual([
        firstSSDot.coord,
        [firstSSDot.coord[0], firstSSDot.coord[1] + 1],
        [firstSSDot.coord[0], firstSSDot.coord[1] + 2],
        [firstSSDot.coord[0] + 1, firstSSDot.coord[1] + 2],
        secondSSDot.coord
      ])
      expect(firstSSDot.flowIsValid()).toBe(true)
    })

    test('FHS NS/EW', () => {
      show.stuntSheets[0].dotTypes[0].splice(0, 0, new Continuity(
        MarchTypes.FMHS,
        Directions.NSEW,
        undefined
      ))
      generateFlow(show, 0, [firstSSDot])
      expect(firstSSDot.flow).toHaveLength(5)
      expect(firstSSDot.flow).toEqual([
        firstSSDot.coord,
        [firstSSDot.coord[0] + 1, firstSSDot.coord[1]],
        [firstSSDot.coord[0] + 2, firstSSDot.coord[1]],
        [firstSSDot.coord[0] + 2, firstSSDot.coord[1] + 1],
        secondSSDot.coord
      ])
      expect(firstSSDot.flowIsValid()).toBe(true)
    })
  })

  describe('MTHS to something else', () => {
    let firstSSDot: Dot,
      secondSSDot: Dot

    beforeEach(() => {
      firstSSDot = show.stuntSheets[0].dots[0]
      secondSSDot = show.stuntSheets[1].dots[0]
      secondSSDot.coord = [firstSSDot.coord[0] + 2, firstSSDot.coord[1] + 2]
      show.stuntSheets[0].dotTypes[0].splice(0, 0, new Continuity(
        MarchTypes.MTHS,
        Directions.E,
        4
      ))
    })

    test('FHS EW/NS', () => {
      show.stuntSheets[0].dotTypes[0].splice(1, 0, new Continuity(
        MarchTypes.FMHS,
        Directions.EWNS,
        undefined
      ))
      generateFlow(show, 0, [firstSSDot])
      expect(firstSSDot.flow).toHaveLength(8)
      expect(firstSSDot.flow).toEqual([
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord,
        [firstSSDot.coord[0], firstSSDot.coord[1] + 1],
        [firstSSDot.coord[0], firstSSDot.coord[1] + 2],
        [firstSSDot.coord[0] + 1, firstSSDot.coord[1] + 2],
        secondSSDot.coord
      ])
      expect(firstSSDot.flowIsValid()).toBe(true)
    })

    test('another MTHS', () => {
      show.stuntSheets[0].dotTypes[0].splice(1, 0, new Continuity(
        MarchTypes.MTHS,
        Directions.NSEW,
        2
      ))
      generateFlow(show, 0, [firstSSDot])
      expect(firstSSDot.flow).toHaveLength(6)
      expect(firstSSDot.flow).toEqual([
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord,
        firstSSDot.coord
      ])
      expect(firstSSDot.flowIsValid()).toBe(false)
    })
  })
})
