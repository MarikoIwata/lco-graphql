import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type Course {
    id: ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssist]
  }
  
  type TeachingAssist {
    firstName: String
    lastName: String
    experience: Int
  }
  
  enum Stack {
    WEB
    MOBILE
    OTHER
  }

  type Query {
    getCourse(id: ID): Course
  }

  input CourseInput {
    id: ID
    courseName: String!
    category: String
    price: Int!
    language: String
    email: String
    stack: Stack
    teachingAssists: [TeachingAssistInput]!

  }

  input TeachingAssistInput {
    firstName: String
    lastName: String
    experience: Int
  }

  type Mutation {
    createCourse(input: CourseInput): Course
  }

`) 
//wrapped in back ticks

// enum  An enum is a GraphQL schema type that represents a predefined list of possible values.
//there will be a method in my resolvers getCourse that accepts ID and returns a Course

//input, whatever schema is defined you put input and name of the defined schema, this is a standard

//mutation responsible for filling data in database or where you put it

export default schema;
