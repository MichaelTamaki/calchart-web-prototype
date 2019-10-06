import Dot from '@/models/Dot'

test('initializing Dot with no previous Dot', () => {
  let dot = new Dot(undefined, [1.5, 2])
  expect(dot.dotType).toBe(0)
  expect(dot.coord).toEqual([1.5, 2])
  expect(dot.flow).toEqual([[1.5, 2]])
  expect(dot.nextDot).toBeNull()
  expect(dot.flowIsValid()).toBe(true)
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
    expect(secondSSDot.nextDot).toBeNull()
    expect(secondSSDot.flowIsValid()).toBe(true)
    expect(firstSSDot.nextDot).toBe(secondSSDot)
  })
})

test('Dot validates if flow is correct', () => {
  let firstSSDot = new Dot(undefined, [1, 1])
  let secondSSDot = new Dot(firstSSDot, undefined)
  expect(firstSSDot.flowIsValid()).toBe(true)
  secondSSDot.coord = [2, 2]
  expect(firstSSDot.flowIsValid()).toBe(false)
  firstSSDot.flow = [[1, 1], [2, 2]]
  expect(firstSSDot.flowIsValid()).toBe(true)
  firstSSDot.nextDot = null
  expect(firstSSDot.flowIsValid()).toBe(false)
  firstSSDot.flow = [[1, 1]]
  expect(firstSSDot.flowIsValid()).toBe(true)
})
