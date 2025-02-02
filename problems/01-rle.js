/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    if (!value) return "";
    
    let result = "";
    let count = 1;
    
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i + 1]) {
            count++;
        } else {
            result += (count > 1 ? count : "") + value[i];
            count = 1;
        }
    }
    
    return result;
}

module.exports = rle;
