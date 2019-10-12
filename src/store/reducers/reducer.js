import {ADD_MESSAGE, DELETE_MESSAGE} from './types'

export default messageReducer = (state = {messages: [457]}, action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        console.log(state.messages)
        const updatedMessages = state.messages.concat(action.payload.message)
        return { ...state, messages: updatedMessages }
      case DELETE_MESSAGE:
        const updatedDeleteMessages = state.messages
        updatedDeleteMessages.pop()
        return { ...state, messages: updatedDeleteMessages };
      default:
        return state;
    }
  }