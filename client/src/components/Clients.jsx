import { useQuery} from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_Clients } from '../queries/clientQueries';
import Spinner from './Spinner';
export default function Clients() {
  const { loading , error, data} = useQuery(GET_Clients)
  if (loading)  return <Spinner/>
  if( error)  return <p>Something went wrong!</p>
  return (
   <>
   {!loading && ! error &&  (
   <table class="table table-hover mt-3">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
        </thead>
     <tbody>
      {data.clients.map(client => (
        <ClientRow key={client.id} client={client}/>
      ))}
     </tbody>
    
   </table>
   )}
   </>
  )
}
