import React, { Component} from 'react';
import { connect } from 'react-redux';
import { increaseClicked, decreaseClicked } from '../actions/actions.js';

const mapStateToProps = state => {
    const props = {
        count: state.count
    };
    return props;
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementClick: () => { dispatch(increaseClicked()) },
        onDecrementClick: () => { dispatch(decreaseClicked()) },
    }
};

class Counter extends Component {

    render(){
        const { count, onIncrementClick, onDecrementClick } = this.props;
        return (
        <div id="counter-component">
            <h1>Counter</h1>
            <h3>{count}</h3>
            <div>
                <button onClick = {onIncrementClick}>increment</button>
                <button onClick = {onDecrementClick}>decrement</button>
            </div>
        </div>
    );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
