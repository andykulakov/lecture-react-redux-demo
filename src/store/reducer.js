const initialState = {
  students: [],
  friends: []
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'updateStudents':
      return {
        ...state,
        students: action.payload
      }
    case 'addFriend':
      return {
        ...state,
        friends: [...state.friends, action.payload]
      }
    case 'removeFriend':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.name !== action.payload.name)
      }
    default:
      return state;
  }

}