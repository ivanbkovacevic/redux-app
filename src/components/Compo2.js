import React, { Component } from 'react';
import {connect} from "react-redux";
import {deletePost} from '../actions/postActions';
import {INCREMENT,DECREMENT} from '../actions/counterActions';

class Compo2 extends Component {
    handleClick=()=>{
        this.props.deleteP(this.props.burek);
    }

    handleIncrement=()=>{
        this.props.INCREMENT();
    }

    handleDecrement=(interval)=>{
        this.props.DECREMENT();
    }


    render() {
        console.log(this.props)
        return (
            <div>
                Component2 {this.props.burek}
                <button onClick={this.handleClick}>delete post</button>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <p>{this.props.count}</p>
                <p>{this.props.interval}</p>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        count:state.count,
        interval:state.interval
    }
}
const broj=8;
const mapDispatchToProps=(dispatch)=>{
    return {
        INCREMENT:()=>{ dispatch(INCREMENT(broj))},
        DECREMENT:()=>{ dispatch(DECREMENT(broj))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compo2);