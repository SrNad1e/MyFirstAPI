const {
    gql
} = require('apollo-server');

module.exports = gql `
type userTeamDev {
    _id: String
    name: String
    description: String
    createdAt: String
    charge: String
}

input userTeamDevInput {
    name: String
    description: String
    _id: String
    charge: String
}

type Query {
    userTeam(ID: ID!): userTeamDev!
    getUsersTeamDev(amount: Int): [userTeamDev]
}

type Mutation {
    createUserTeamDev(userTeamDevInput: userTeamDevInput): userTeamDev!
    deleteUserTeamDev(ID: ID!): Boolean
    editUserTeamDev(ID: ID!, userTeamDevInput: userTeamDevInput): Boolean
}
`;