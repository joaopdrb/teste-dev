interface PageParams {
    pages: number;
    limit: number;
    actualPage: number;
}

function main(): void {
    let names: string[] = ['Camila', 'Tatiana', 'Roberto', 'Mariana', 'Felipe', 'Cláudia', 'Juliana', 
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
    let search: string = 'ana';

    const params: PageParams = {pages: 2, limit: 5, actualPage: 1};

    console.log(filtrarEPaginar<string>(names, params, search, (item:string, search: string) => item.toLowerCase().includes(search.toLowerCase())));

    console.log(`Total de valores filtrados: ${params.limit}`);
}

function filtrarEPaginar<T> (
    items: T[],
    params: PageParams,
    search: string,
    filtro: (item: T, search: string) => boolean
) {
    
    let startPage: number = (params.actualPage - 1) * params.limit;
    let endPage: number = startPage + params.limit;
    let results: T[] = items.filter(item => filtro(item, search)).slice(startPage, endPage);
    
    return results;
}

main();
