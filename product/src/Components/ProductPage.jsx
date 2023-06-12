import { Link, useParams } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"
import { useEffect, useState } from "react";
import  axios from 'axios';
// import Loader from "./Loader";

export default ({loading,setLoading}) => {

    const { productId } = useParams(); 
    const [ product , setProduct ] = useState({});

    useEffect(() => {
        if(!Object.keys(product).length){
            fetechProducts()
        }
    }, [product])

    async  function fetechProducts () {
      // setLoading(true);
        const { data } = await  axios.get("https://fakestoreapi.com/products/"+productId)
        setProduct(data);
        // setLoading(false)
    }
    return <div className="antialiased">
    <div className="py-6">
      <Breadcrumbs options={["Home"]}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div x-show="image === 1" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img src={product.image} alt="Product" className="h-72 w-full object-contain object-center" />
                </div>

              </div>
    
              <div className="flex -mx-2 mb-4">
                {/* <template x-for="i in 4">
                  <div className="flex-1 px-2">
                    <button x-on:click="image = i" :className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                      <span x-text="i" className="text-2xl"></span>
                    </button>
                  </div>
                </template> */}
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product?.title}</h2>
            <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{product?.category}</a></p>
    
            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">{product?.price}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>
    
            <p className="text-gray-500">{product?.description}.</p>
    
            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
    
              </div>
    
                <Link to={`/orders/${productId}/checkout`} state={{ product }}>
                <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Buy Now
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
}