import Stuntsheet from '@/models/Stuntsheet'
import { Continuity } from '@/models/Continuity'
import Dot from '@/models/Dot'

test('initializing Stuntsheet without previous Stuntsheet', () => {
  let stuntsheet = new Stuntsheet(undefined, 10, undefined)
  expect(stuntsheet.beats).toBe(32)
  expect(stuntsheet.dotTypes).toHaveLength(1)
  expect(stuntsheet.dotTypes[0]).toHaveLength(1)
  expect(stuntsheet.dots).toHaveLength(10)
  let x = 0
  let y = 0
  stuntsheet.dots.forEach(function (dot: Dot) {
    expect(dot.dotType).toBe(0)
    expect(dot.coord).toEqual([x, y])
    expect(dot.flow).toEqual([[x, y]])
    x += 2
  })
})

describe('initializing Stuntsheet with previous Stuntsheet', () => {
  let prevSS: Stuntsheet,
    newSS: Stuntsheet

  beforeAll(() => {
    prevSS = new Stuntsheet(undefined, 10, undefined)
    newSS = new Stuntsheet(16, undefined, prevSS)
  })

  test('previous Stuntsheet has nextDot', () => {
    let x = 0
    let y = 0
    prevSS.dots.forEach(function (dot) {
      expect(dot.dotType).toBe(0)
      expect(dot.coord).toEqual([x, y])
      expect(dot.flow).toEqual([[x, y]])
      expect(newSS.dots).toEqual(expect.arrayContaining([dot.nextDot]))
      x += 2
    })
  })

  test('new Stuntsheet is correct', () => {
    expect(newSS.beats).toBe(16)
    expect(newSS.dotTypes).toHaveLength(1)
    expect(newSS.dotTypes[0]).toHaveLength(1)
    expect(newSS.dots).toHaveLength(10)
    let x = 0
    let y = 0
    newSS.dots.forEach(function (dot) {
      expect(dot.dotType).toBe(0)
      expect(dot.coord).toEqual([x, y])
      expect(dot.flow).toEqual([[x, y]])
      expect(dot.nextDot).toBeNull()
      x += 2
    })
  })
})
