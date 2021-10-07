// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create typedefs
const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    
    type Auth {
        token: ID!
        user: User!
    }
    
    
    type Query {
        me: User
    }
    
    input bookData {
        bookId: ID!
        authors: [String]!
        description: String
        title: String
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(content: bookData!): User
        removeBook(bookId: String!): User
    }
`;

// export typeDefs
module.exports = typeDefs;