import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
// import Loader from "./Loader";


export default () => {

	const [ orders , setOrders ] = useState([]);

    useEffect(() => {
        if(!orders.length){
            fetechorders()
        }
    }, [orders])

	async  function fetechorders () {
        const { data } = await  axios.get("https://fakestoreapi.com/products?limit=3")
        setOrders(data);
    }
    return <div className="bg-white p-8 rounded-md w-full">
	<div className="flex items-center justify-center">
    <div className="text-center p-10">
    <h1 className="font-bold text-4xl mb-4">Search Orders</h1>
    <div className="flex w-full justify-center items-center p-6 space-x-6 bg-white rounded-xl hover:shadow-sm transform transition duration-500">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
          name="title" className="bg-gray-100 outline-none" type="text" placeholder="Enter A Product Name..." />
        </div>
      
        <div className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
          <span >Search</span>
        </div>
  </div>
  </div>
</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="flex justify-center rounded-lg overflow-hidden">
					<table className="w-4/5 leading-normal table-fixed">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
									orders
								</th>
								
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
									Qauntity
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-600 uppercase tracking-wider">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order, index) =><tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-20 h-20">
											<img className="w-full h-full rounded-full"
												src={order.image}
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap font-semibold">
													{order.title}
												</p>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap font-semibold">
										{index+1}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<Link to="/delivery">
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span className="relative">Active</span>
									</span>
									</Link>
								</td>
							</tr>)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
}

/*
 <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">Package Booked</h3>
            <p class="leading-tight text-justify w-full">
              21 July 2021, 04:30 PM
            </p>
          </div>
           */