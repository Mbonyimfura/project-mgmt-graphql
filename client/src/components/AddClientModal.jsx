import { useState } from "react"
import {useMutation} from '@apollo/client'
import {FaUser} from 'react-icons/fa'
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_Clients } from "../queries/clientQueries";
export default function AddClientModal() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');   
    
    const [addClient] = useMutation(ADD_CLIENT,{
        variables:{name,email,phone},
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({
              query: GET_Clients,
            });
      
            cache.writeQuery({
              query: GET_Clients,
              data: { clients: [...clients, addClient]},
            });
          },
    })

    const onFormSubmit = (e)=>{
        e.preventDefault();
        if ( name===''|| email === '' || phone ===''){
            alert('Please fill in all fileds')
        }
        addClient(name, email, phone);

        setName('');
        setEmail('');
        setPhone('');
    }
  return (
   <>
   <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#AddClientModal">
  <div className="d-flex align-items-center">
    <FaUser className="icon"/>
    <div>Add Client</div>
  </div>
</button>
<div className="modal fade" id="AddClientModal" tabIndex="-1" aria-labelledby="AddClientModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fs-5" id="AddClientModal">Add Client</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={onFormSubmit}>
             <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
             <input type="text" name="name" id="name"  className="form-control"
             value={name} onChange={ (e) => setName(e.target.value )}/>
             </div>
             <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
             <input type="email" name="email" id="email"  className="form-control"
             value={email} onChange={ (e) => setEmail(e.target.value )}/>
             </div>
             <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
             <input type="text" name="phone" id="phone"  className="form-control"
             value={phone} onChange={ (e) => setPhone(e.target.value )}/>
             </div>
             <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal"
             >Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
   </>
  )
}
