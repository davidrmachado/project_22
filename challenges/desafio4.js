// 3 - Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido:

db.produtos
  .find({ vendidos: { $gt: 50, $lt: 100 } }, { _id: 0, nome: 1, vendidos: 1 })
  .sort({ vendidos: 1 });
