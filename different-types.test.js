const solution = require('./different-types').solution

test('should give return one for single type', () => {
    expect(solution([0, 0])).toBe(1)
})

test('should give return one for types', () => {
    expect(solution([0, 1])).toBe(1)
})

test('should give return number for types', () => {
    expect(solution([0, 0, 1, 1, 0, 0])).toBe(2)
    expect(solution([0, 2, 1, 2, 0, 3])).toBe(3)
    expect(solution([0, 2, 1, 2, 0, 3, 0 ,0])).toBe(4)
})