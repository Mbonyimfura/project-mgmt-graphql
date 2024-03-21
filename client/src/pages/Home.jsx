import AddClientModal from "../components/AddClientModal"
import Projects from "../components/Projects"
import Clients from "../components/Clients"
import AddProductModal from "../components/AddProductModal"

export default function Home() {
  return (
    <>
     <div className="d-flex gap-3 mb-4">
     <AddClientModal/>
     <AddProductModal/>
     </div>
    <Projects/>
      <Clients/>  
    </>
  )
}
