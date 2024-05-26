import React from "react";

// export const Wraper = (childeren) => {
//     return(
//         <div className="wrapper">   
//             {childeren}
//         </div>
//     )
// } 
export const Wraper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };