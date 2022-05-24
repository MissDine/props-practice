import React from "react";

class Welcome extends React.Component{
    render(){
        return(
            <div>Welcome {this.props.name} a.k.a {this.props.nickName}!</div>
        )
    }
}
export default Welcome