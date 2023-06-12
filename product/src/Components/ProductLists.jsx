import axios from "axios";
import { useEffect, useState } from "react"
import ProudctCard from "./ProudctCard";
import Seach from "./Seach";

export default ({loading,setLoading}) => {
    const [ products , setProducts ] = useState([]);
    const [query, setQuery ] = useState({
        category: "",
        title: ""
    })

    useEffect(() => {
        if(!products.length){
            fetechProducts()
        }
    }, [products])

   async  function fetechProducts () {
        const { data } = await  axios.get("https://fakestoreapi.com/products")
        setProducts(data);
    }

    function handleChange  (e) {
        setQuery({...query, [e.target.name] : e.target.value })
    }

    function handleSubmit() {

    }

    
    return <>
    <Seach query={query}  handleChange={handleChange} handleSubmit={handleSubmit}/>
<section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
  {products.map((product, index) => <ProudctCard index={index} product={product}/>)}
</section>
</>
}