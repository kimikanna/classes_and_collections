/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false;
    
    const stack = [];
    
    for (let char of value) {
        if (char === '(' || char === '{' || char === '<') {
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === '>') {
            if (
                (char === ')' && stack[stack.length - 1] !== '(') ||
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === '>' && stack[stack.length - 1] !== '<')
            ) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

module.exports = parentheses;
