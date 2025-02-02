const parentheses = require('../03-parentheses');

test('Тестирование задачи "022-parentheses"', () => {
    expect(parentheses('')).toBe(false);
    expect(parentheses('()')).toBe(true);
    expect(parentheses('())(')).toBe(false);
    expect(parentheses('()()')).toBe(true);
    expect(parentheses('(())')).toBe(true);
    expect(parentheses('(()())')).toBe(true);
    expect(parentheses('((()))((()()))')).toBe(true);
    expect(parentheses('(())((()())())')).toBe(true);
    expect(parentheses('(')).toBe(false);
    expect(parentheses(')')).toBe(false);
    expect(parentheses('(()')).toBe(false);
    expect(parentheses(')()')).toBe(false);
    expect(parentheses('())')).toBe(false);
    expect(parentheses('()(')).toBe(false);
    expect(parentheses('(())((()()))()))')).toBe(false);
});
