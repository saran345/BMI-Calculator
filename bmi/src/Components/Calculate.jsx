import { useState } from "react"
import Display from "./display";
// import Display from "./display";

export default function Calculate() {

     const [ count,setCount]=useState({weight:"",height:"",bmi:null});

  const handleChange=(e)=>{
    const { name, value}=e.target;

    setCount({...count,[name]:value})

  }
  function bmical(weight,height){ 
    if(!weight || !height) return null;
     let calheight=height/100;

    return (weight /(calheight*calheight)).toFixed(2);
  }

   const handlecalculate=()=>{
   const find=bmical(Number(count.weight),Number(count.height));
   setCount({...count,bmi:find});
   console.log("value:"+find);
   }


  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container mx-auto p-6 max-w-2xl  shadow-lg rounded-lg bg-white">
       <div className="flex flex-col md:flex-row gap-4">
      <div className="space-y-4">
      <h1 className="text-2xl text-center font-bold mb-6 text-blue-900  " >BMI CALCULATOR</h1>

      <input name="height"
      type="text" value={count.height}
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
      <button onClick={handlecalculate} className="w-full bg-blue-500 text-white py-3 rounded-md text-xl hover:bg-blue-600 transition">Calculate</button>
      </div>
      <div>
     <Display value={count.bmi} />
      </div>
       </div>
      </div>
     </div>

    </>
  )
}