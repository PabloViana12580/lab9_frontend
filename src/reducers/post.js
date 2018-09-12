const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          karma: action.karma,
        }
      ]
    case "KARMA_UPED": {
      const singlePost = state[action.payload]
      return {
        ...state,
        [action.payload]:{
          ...singlePost,
          karma: singlePost.karma + 1,
        },
      }
    }
    case "KARMA_DOWNED": {
      const singlePost = state[action.payload]
      return {
        ...state,
        [action.payload]:{
          ...singlePost,
          karma: singlePost.karma - 1,
        },
      }
    }
    default:
      return state;
  }
}

export default posts;