// 15 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo:

db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

db.produtos.updateMany(
    { tags: "bovino" },
    { $set: { avaliacao: 5 } },
);

db.produtos.updateMany(
    { tags: "ave" },
    { $set: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
