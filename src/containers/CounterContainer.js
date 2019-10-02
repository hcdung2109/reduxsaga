import {connect} from "react-redux";
import CounterComponent from "../components/CounterComponent";
import { increaseAction, decreaseAction} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        number: state.counterReducers ? state.counterReducers : 0
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: (step) => {
            dispatch(increaseAction(step));
        },
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        }
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

export default CounterContainer;
