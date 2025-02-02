/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const [day, month, year] = date.split('.').map(Number);
    const vacationDate = new Date(year, month - 1, day);

    vacationDate.setDate(vacationDate.getDate() + 14);

    const newDay = String(vacationDate.getDate()).padStart(2, '0');
    const newMonth = String(vacationDate.getMonth() + 1).padStart(2, '0');
    const newYear = vacationDate.getFullYear();

    return `${newDay}.${newMonth}.${newYear}`;
}

module.exports = vacation;
