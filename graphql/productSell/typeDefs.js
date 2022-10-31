const {
    gql
} = require('apollo-server');

module.exports = gql `
type productSell {
    name: String
    description: String
    createdAt: String
    cost: Int
    price: Int
}

input productSellInput {
    name: String
    description: String
    cost: Int
    price: Int
}

type Query {
    productSell(ID: ID!): productSell!
    getProductsSell(amount: Int): [productSell]
}

type Mutation {
    createProductSell(productSellInput: productSellInput): productSell!
    deleteProductSell(ID: ID!): Boolean
    editProductSell(ID: ID!, productSellInput: productSellInput): Boolean
}
`;