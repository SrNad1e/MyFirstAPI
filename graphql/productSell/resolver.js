const Recipe = require("../../models/productSell/productSell");

module.exports = {
  Query: {
    async productSell({ ID }) {
      return await Recipe.findById(ID);
    },
    async getProductsSell({ amount }) {
      return await Recipe.find()
        .sort({
          createdAt: -1,
        })
        .limit(amount);
    },
  },
  Mutation: {
    async createProductSell(
      _,
      { productSellInput: { name, description, cost, price } }
    ) {
      const createdProductSell = new Recipe({
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
        cost: cost,
        price: price,
      });

      const res = await createdProductSell.save();
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteProductSell({ ID }) {
      const wasDeleted = (
        await Recipe.deleteOne({
          _id: ID,
        })
      ).deletedCount;

      return wasDeleted;
    },

    async editProductSell(
      _,
      { ID, productSellInput: { name, description, cost, price } }
    ) {
      const wasEdited = (
        await Recipe.updateOne(
          {
            _id: ID,
          },
          {
            name: name,
            description: description,
            cost: cost,
            price: price,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
