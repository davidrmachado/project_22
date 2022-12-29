// 16 - Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac:

db.produtos.updateMany(
    { nome: "Big Mac" },
    { $set: { ultimaModificacao: Date() } },
);

db.produtos.find(
    { ultimaModificacao: { $exists: true } },
    { _id: 0, nome: 1 },
);
