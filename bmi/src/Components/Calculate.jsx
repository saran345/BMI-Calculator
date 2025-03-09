import { useState } from "react"
// import Display from "./display";

export default function Calculate() {

     const [ count,setCount]=useState([]);

  const handleChange=(e)=>{
    const { name, value}=e;

    setCount({...count,[name]:value})

  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container mx-auto p-6 max-w-lg shadow-lg rounded-lg bg-white">
       <div>
       <h1 className="text-2xl text-center font-bold mb-6 text-blue-500  " >BMI CALCULATOR</h1>
      <div className="space-y-4">
      <input name="meter"
      type="text" value={count.meter}
      onChange={handleChange}
      placeholder="Enter Height(cm)"
      className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input name="weight"
      type="text" value={count.weight}
      placeholder="Enter Weight(Kg)"
      onChange={handleChange}
      className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
      <button className="w-full bg-blue-500 text-white py-3 rounded-md text-xl hover:bg-blue-600 transition">Calculate</button>
      </div>
       </div>
      </div>
     </div>

    </>
  )
}