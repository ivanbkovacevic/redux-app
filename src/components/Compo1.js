import React, { Component } from 'react';
import {connect} from "react-redux";

class Compo1 extends Component {

   
    render() {
        console.log(this.props)
      
        let mapiraj=this.props.kita.map((p,i)=>{
            return ( <p>{p.title}</p>)
        })
        return (
            <div>
                Component1
                {mapiraj}
              
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
        return {
            kita:state.posts
        }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deletePost:(id)=>{ dispatch({type:'DELETE_POST', id:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compo1);