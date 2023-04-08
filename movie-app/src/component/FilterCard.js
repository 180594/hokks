import { useState } from "react"



const Filter =({handleSearch})=>{
    const [value,SetValue]= useState('') 
    return( 
    <div> 
        <input type='text' onChange={(e)=>SetValue(e.target.value)}/>
        <button onClick={()=> handleSearch(value)} > Search </button>
    </div>
)
}

export default Filter 