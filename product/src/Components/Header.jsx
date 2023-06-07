import { Link } from "react-router-dom"

export default () => {
    return  <div className="bg-white shadow-sm sticky top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
      <div className="flex items-center justify-center md:justify-center">
  
        <Link to="/" className="font-bold text-gray-700 text-2xl">Header</Link>
  
      </div>
  
  
    </div>
  </div>
}