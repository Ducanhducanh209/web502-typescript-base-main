import { useState } from "react";

function Counter(){
    const [count , setCount] = useState(0);
    return(
        <div>
            <h2 className="text-3 fornt-bold">Counter: {count}</h2>
            

            <button onClick={()=>setCount(count -1 )}
             className="border border-black px-4 py-2 mx-1">-</button>

            <button onClick={()=>setCount(count +1 )} 
            className="border border-black px-4 py-2 mx-1">+</button>

            <button onClick={()=>setCount(0 )} 
            className="border border-black px-4 py-2 mx-1">reset</button>
        </div>
    )
}
export default Counter;