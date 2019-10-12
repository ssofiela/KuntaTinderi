export const addMessage = () => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            message: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
      };
}

export const deleteMessage = () => {
    return {
        type: 'DELETE_MESSAGE'
      };
}