const { gql } = require('apollo-server-express');

// category: [Category]!
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  
  type Contract {
    _id: ID
    username: String!
    title: String!
    description: String!
    category: String
    price: String
    contractDate: String
    responses: [Response]
  }

  type Response {
    _id: ID
    responseAuthor: String!
    responseDescription: String!
    price: String
    responseDate: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    joinDate: String
  }

  type Transaction {
    _id: ID
    contractUser: Contract!
    responseUser: Response!
    contractId: Contract!
    category: [Category]!
    price: String
    transactionDate: String
  }
  
  type Comment {
    _id: ID
    username: User!
    description: String!
    contractId: [Contract]!
    commentDate: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    contracts: [Contract]
    userContracts: [Contract]
    category(category: String): [Contract]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String! password: String!, firstName: String!, lastName: String!): Auth
    addContract(user_id: String!, username: String! , title: String!, description: String!, category: String, price: String, contractDate: String): Contract
    addResponse(contractId: ID!, responseDescription: String!, price: String, responseDate: String): Contract
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    deleteContract(contractId: ID!): Contract
    deleteResponse(contractId: ID!, responseId: ID!): Contract
    
  }
`;

module.exports = typeDefs;
