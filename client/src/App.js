import Header from "./components/Header"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
const cache = new InMemoryCache({
  typePolicies:{
    Query: {
      fields:{
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri:"http://localhost:7000/graphql",
  cache,
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Router>
    <Header />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
       <Route path="/projects/:id" element={<Product/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>

    </Routes>
    </div>
    </Router>
    </ApolloProvider> 
    </>
    
  );
}

export default App;
