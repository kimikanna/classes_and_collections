/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {
    const visited = {};
    const inProcess = {};

    function dfs(service) {
        if (inProcess[service]) return true;
        if (visited[service]) return false;

        inProcess[service] = true;
        
        for (let dep of servicesMap[service]) {
            if (dfs(dep)) return true;
        }
        
        inProcess[service] = false;
        visited[service] = true;

        return false;
    }

    for (let service in servicesMap) {
        if (!visited[service]) {
            if (dfs(service)) {
                return true;
            }
        }
    }

    return false;
}

module.exports = hasCircularDependency;
