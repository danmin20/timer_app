//import

//actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SEC = "ADD_SEC";
const REFRESH_TIMER = "REFRESH_TIMER";

//action creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function refreshTimer() {
  return {
    type: REFRESH_TIMER
  }
}

function addSecond() {
  return {
    type: ADD_SEC
  };
}

//reducer

const TIME_DURATION = 1220;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timeDuration: TIME_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SEC:
      return applyAddSecond(state);
    case REFRESH_TIMER:
      return applyRefreshTimer(state);
    default:
      return state;
  }
}

//reducer functions

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyRestartTimer(state) {
  return {
    ...state,
    isPlaying: false
  };
}

function applyRefreshTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false,
      elapsedTime: 0
    };
  }
}

//export action creators

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond,
  refreshTimer
};

//export reducer

export default reducer;
export { actionCreators };