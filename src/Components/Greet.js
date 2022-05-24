import React from "react";

// class Greet extends React.Component{
//     render(){
//         return(
//             <div>Hello</div>
//         )
//     }
// }
const Greet = (props) => {
    console.log(props)
    return(
        <div>Hello {props.name} a.k.a {props.nickName}</div>
    )
}
export default Greet;