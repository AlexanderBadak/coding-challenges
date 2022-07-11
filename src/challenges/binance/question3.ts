// import { useEffect, useState } from "react";
// import "./styles.css";

// // issue:
// /**
//  * click page 2, then click page 1
//  * => expect: result should be 1
//  * actual (fail): result is 2
//  */
// How to prevent this buggy behavior?

// export default function App() {
//   const [data, setData] = useState(0);
//   const [page, setPage] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       await new Promise((resolve) => setTimeout(resolve, page * 1000));
//       setData(page);
//       setPage(page);
//     };
//     fetchData();
//   }, [page]);

//   return (
//     <div className="App">
//       <div>Page: {page}</div>
//       <div style={{ margin: "20px" }}>Result: {data}</div>
//       page
//       <button onClick={() => setPage(1)}>1</button>
//       <button onClick={() => setPage(2)}>2</button>
//     </div>
//   );
// }

// add a variable to the useEffect called let isCancelled = false
// set it to true in the return method of useEffect
// only set data / page when isCancelled = false