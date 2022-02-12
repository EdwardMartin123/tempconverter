const {f2c, c2f} = require('./converters')

test('converts positive C to F', () => {
    expect(c2f(100)).toBe(212)
})

test('converts negative C to F', () => {
    expect(c2f(-40)).toBe(-40)
})

test('converts zero C to F', () => {
    expect(c2f(0)).toBe(32)
})

test('converts positive F to C', () => {
    expect(f2c(212)).toBe(100)
})

test('converts negative F to C', () => {
    expect(f2c(-40)).toBe(-40)
})

test('converts zero F to C', () => {
    expect(Math.floor(f2c(0))).toBe(-18)
})

test('throws error when converting string C to F', () => {
    expect(() => c2f("a")).toThrow()
})

test('throws error when converting string F to C', () => {
    expect(() => f2c("a")).toThrow()
})