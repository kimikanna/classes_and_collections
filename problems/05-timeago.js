/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 0) return 'undefined';
    if (seconds < 10) return 'just now';
    if (seconds < 60) return `${Math.floor(seconds / 10) * 10} seconds ago`;
    if (seconds < 3600) {
        let minutes = Math.max(1, Math.floor(seconds / 60));
        if (minutes > 2 && minutes < 24) {
            minutes = Math.floor(minutes / 10) * 10;
        } else if (minutes > 24 && minutes < 30) {
            minutes = 25;
        } else if (minutes > 30) {
            minutes = 30;
        }
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }
    if (seconds < 86400) {
        let hours = Math.floor(seconds / 3600);
        if (hours > 12) {
            hours = 12;
        }
        return `${hours} hour${seconds < 7200 ? '' : 's'} ago`;
    }
    if (seconds < 604800) {
        let days = Math.floor(seconds / 86400);
        if (days > 1) {
            days = 'a few';
        }
        return `${days} day${days === 1 ? '' : 's'} ago`;
    }
    if (seconds < 2419200) return `${Math.floor(seconds / 604800)} week${seconds < 1209600 ? '' : 's'} ago`;
    
    return 'undefined';
}

module.exports = timeago;
