// ------------------------------------
// Constants
// ------------------------------------
export const COUNT_INCREASE = 'COUNT_INCREASE'
export const COUNT_DOUBLE_INCREASE_ASYNC = 'COUNT_DOUBLE_INCREASE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNT_INCREASE,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNT_DOUBLE_INCREASE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 2000)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNT_INCREASE]    : (state, action) => state + action.payload,
  [COUNT_DOUBLE_INCREASE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}