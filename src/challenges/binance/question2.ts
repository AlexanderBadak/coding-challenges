//A: what is the order of the console logs?
//B: click on the button? what is the order of the console logs?

// import { useEffect, useState } from "react"
// import "./styles.css"

// what is output after the first load?
// what is output after clicking "update"?

// export default function App() {
//     const [val, setVal] = useState(0)
    
//     useEffect(() => {
//         console.log("1")
    
//         return () => {
//             console.log("2")
//         }
//     }, [val])
    
//     console.log("3")
    
//     return (
//         <div className="App">
//             <h1>Hello CodeSandbox</h1>
//             <h2>Start editing to see some magic happen!</h2>

//             <button onClick={() => setVal(val + 1)}> update </button>
//         </div>
//     )
// }

//Solution A: 3, 1
//Solution B: 3, 2, 1