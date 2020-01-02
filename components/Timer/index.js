import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import Timer from './presenter';
import { actionCreators as timerActions } from '../../reducer';

function mapStateToProps(state){
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timeDuration
    }
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        restartTimer: bindActionCreators(timerActions.restartTimer, dispatch),
        addSecond : bindActionCreators(timerActions.addSecond, dispatch),
        refreshTimer: bindActionCreators(timerActions.refreshTimer, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);