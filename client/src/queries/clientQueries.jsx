import  {gql} from '@apollo/client'
const GET_Clients = gql `
query getClients {
    clients{
       id,
      name,
      email,
      phone,
  }
}`

export {GET_Clients}