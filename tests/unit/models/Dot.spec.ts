import Dot from '@/models/Dot'

test('initializing Dot with no previous Dot', () => {
  let dot = new Dot(undefined, [1.5, 2])
  expect(dot.dotType).toBe(0)
  expect(dot.coord).toEqual([1.5, 2])
  expect(dot.flow).toEqual([[1.5, 2]])
  expect(dot.hasNextDot).toBe(false)
})

describe('initializing Dot with previous Dot', () => {
  let firstSSDot: Dot,
    secondSSDot: Dot

  beforeAll(() => {
    firstSSDot = new Dot(undefined, [0, 0])
    firstSSDot.flow = [
      firstSSDot.coord,
      [firstSSDot.coord[0] + 1.0, firstSSDot.coord[1] + 1.0]
    ]
    secondSSDot = new Dot(firstSSDot, undefined)
  })

  test('new Dot is based on previous Dot', () => {
    expect(secondSSDot.dotType).toBe(0)
    expect(secondSSDot.coord).toEqual([firstSSDot.coord[0] + 1.0, firstSSDot.coord[1] + 1.0])
    expect(secondSSDot.flow).toEqual([secondSSDot.coord])
    expect(secondSSDot.hasNextDot).toBe(false)
    expect(firstSSDot.hasNextDot).toBe(true)
  })
})
