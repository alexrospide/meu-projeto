console.log('Pizzaria DH')

const pizzas = [
    {
        id: 1,
        sabor: "Quatro Queijos",
        categoria: "Salgada",
        preco: 15.89
    },
    {
        id: 2,
        sabor: "Morango com Nutella",
        categoria: "Doce",
        preco: 30.50
    },
    {
        id: 3,
        sabor: "Brócolis",
        categoria: "Vegetariana",
        preco: 35
    },
    {
        id: 4,
        sabor: "Lombo Canadense",
        categoria: "Salgada",
        preco: 25
    }

]

const listarTodasAsPizzas = () => {
    let conteudo = [];

    //da para criar a função dentro do for each
    //ou criar uma funcao fora e chamar no forEach
    pizzas.forEach((pizza) => {
        conteudo +=  `
                    id: ${pizza.id},
                    Sabor: ${pizza.sabor}
                    Categoria: ${pizza.categoria}
                    Preço: ${pizza.preco}
                    `
    });
    return conteudo;

};

const adicionarPizza = function (sabor,categoria,preco){
    const pizzaNova = {
        id: pizzas[pizzas.length-1].id +1,
        sabor,
        categoria,
        preco
        // sabor: sabor,
        // categoria: categoria,
        // preco: preco,
    }
    pizzas.push(pizzaNova)

}

adicionarPizza("Marguerita","Salgada",28.20)
adicionarPizza("Frango com Catupery","Salgada",24.80)


console.log(listarTodasAsPizzas())