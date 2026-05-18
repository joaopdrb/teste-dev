"use strict";
function main() {
    let names = ['Camila', 'Tatiana', 'Roberto', 'Mariana', 'Felipe', 'Cláudia', 'Juliana',
        'Gustavo',
        'Roana',
        'Beatriz',
        'Cristiana',
        'Diego',
        'Fabiana',
        'Carla',
        'Ana Beatriz',
        'Thiago',
        'Susana',
        'Vanessa',
        'Carlos',
        'Loriana',
        'Patrícia',
        'Adriana',
        'Eduardo',
        'Renata',
        'Sílvio',
        'Marcos',
        'Fernanda',
        'Bruno',
        'Rodrigo',
        'Letícia'];
    let search = 'ana';
    const params = { pages: 2, limit: 5, actualPage: 2 };
    console.log(filtrarEPaginar(names, params, search, (item, search) => item.toLowerCase().includes(search.toLowerCase())));
    console.log(`Total de valores filtrados: ${params.limit}`);
}
function filtrarEPaginar(items, params, search, filtro) {
    let startPage = (params.actualPage - 1) * params.limit;
    let endPage = startPage + params.limit;
    let results = items.filter(item => filtro(item, search)).slice(startPage, endPage);
    return results;
}
main();
