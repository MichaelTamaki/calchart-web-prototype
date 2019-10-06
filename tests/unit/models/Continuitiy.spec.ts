import { Continuity, MarchTypes, Directions } from '@/models/Continuity'

test('initializing a Continuity defaults to MTHS E', () => {
  let continuity = new Continuity(undefined, undefined, undefined)
  expect(continuity.marchType).toBe(MarchTypes.MTHS)
  expect(continuity.direction).toBe(Directions.E)
  expect(continuity.beats).toBeNull()
  expect(continuity.toString()).toBe('[MTHS E]')
})

test('initializing a FMHS Continuity with no direction defaults to EWNS', () => {
  let continuity = new Continuity(MarchTypes.FMHS, undefined, undefined)
  expect(continuity.marchType).toBe(MarchTypes.FMHS)
  expect(continuity.direction).toBe(Directions.EWNS)
  expect(continuity.beats).toBeNull()
  expect(continuity.toString()).toBe('FMHS EW/NS')
})

test('initializing a Continuity with MTHS 16 W', () => {
  let continuity = new Continuity(MarchTypes.MTHS, Directions.W, 16)
  expect(continuity.marchType).toBe(MarchTypes.MTHS)
  expect(continuity.direction).toBe(Directions.W)
  expect(continuity.beats).toBe(16)
  expect(continuity.toString()).toBe('MTHS 16 W')
})

test('initializing a Continuity with FMHS EW/NS', () => {
  let continuity = new Continuity(MarchTypes.FMHS, Directions.NSEW, undefined)
  expect(continuity.marchType).toBe(MarchTypes.FMHS)
  expect(continuity.direction).toBe(Directions.NSEW)
  expect(continuity.beats).toBeNull()
  expect(continuity.toString()).toBe('FMHS NS/EW')
})
