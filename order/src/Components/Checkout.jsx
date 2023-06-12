import { Link, useLocation } from "react-router-dom"


export default () => {
    const {state: { product }} = useLocation();
    return  <div>
    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex justify-start flex-col items-start space-y-2">
                <p className="text-3xl lg:text-4xl leading-7 lg:leading-9  dark:text-gray-50 font-bold text-gray-700 text-2xls">Place Your Order</p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full ">
                <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center  dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full ">
                    <div className="flex flex-col justify-start items-start w-full space-y-4">
                        <p className="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">{product?.title}</p>
                        <p className="text-base font-semibold leading-none text-gray-600 dark:text-white">{product?.price}</p>
                    </div>
                    <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto transform overflow-hidden rounded-lg bg-white  duration-300 hover:scale-105 hover:shadow-lg">
                        <img src={product?.image} alt={product?.title} />
                    </div>
                </div>

                <div className="p-8 0 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
                    <div className="flex items-center justify-center md:justify-center">
                            <p className="font-bold text-gray-700 text-2xl">Checkout</p>
                        </div>
                    <div className="mt-8">
                        <input className="border bg-gray-100 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="Email" value="abc@example.com"/>
                    </div>

                    <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
                    <div className="mt-2 flex-col">
                        <div>
                            <input className="border rounded-tl rounded-tr bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="0000 1234 6549 15151" />
                        </div>
                        <div className="flex-row flex">
                            <input className="border rounded-bl bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="MM/YY" value="02/23"/>
                            <input className="border rounded-br bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="CVC" value="123"/>
                        </div>
                    </div>

                    <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
                    <div className="mt-2 flex-col">
                        <div>
                            <input className="border rounded bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="Name on card" value="John Doe"/>
                        </div>
                    </div>

                    <label className="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Country or region</label>
                    <div className="mt-2 flex-col">
                        <div className="relative">
                            <select id="changetext" className="text-left border rounded-tr rounded-tl  p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                                <option selected={true}>India</option>
                            </select>
                           
                        </div>
                        <input className="border rounded-bl rounded-br bg-gray-100 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="" id="" placeholder="ZIP" value="400043"/>
                    </div>

                    <button className="mt-8 bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                        <div>
                            <Link to="/orders">
                            <p className="text-base leading-4">Pay </p>
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
}