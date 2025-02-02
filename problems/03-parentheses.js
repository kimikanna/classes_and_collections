/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false;
    
    let balance = 0;
    
    for (let char of value) {
        if (char === '(') {
            balance++;
        } else if (char === ')') {
            balance--;
            if (balance < 0) return false;
        }
    }
    
    return balance === 0;
}

module.exports = parentheses;
