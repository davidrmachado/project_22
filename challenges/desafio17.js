// 17 - Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos:

db.resumoProdutos.insert(
    { franquia: "McDonalds", totalProdutos: db.produtos.countDocuments({}) },
);

db.resumoProdutos.find({}, { _id: 0, franquia: 1, totalProdutos: 1 });
