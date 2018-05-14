import { combineReducers } from 'redux'

const initialState = {
    
}

//FOR POSTS
const posts = (state = initialState, action) => {
  
  let commentsArray
  
  switch(action.type) {

    case 'GET_POSTS':
    
      //RECHECK: Use reducer?
      // const posts = action.posts.reduce((array, post) => {
      //   array[post.id] = {
      //     ...post,
      //     comments: []
      //   }
      //   return array
      // },{})

      // return {
      //     ...state, 
      //     ...posts,
      // }

      // const commentsArray = action.comments.map
      // console.log(commentsArray)

        commentsArray = action.comments.reduce((array, comment) => {
          array[comment.id] = {
            ...comment
          }
          return array
        },{})

      return{
        ...state,
        [action.post.id]:{
          ...action.post,
          comments: commentsArray
        }
      }

    case 'GET_POST':
    
      commentsArray = action.comments.reduce((array, comment) => {
        array[comment.id] = {
          ...comment
        }
        return array
      },{})

      return {
        ...state, 
        [action.id]: {
          ...action.post,
          comments: commentsArray
        }
      }
    
    case 'VOTE_POST':
      return {
        ...state, 
        [action.id]: {
          ...state[action.id],
          voteScore: action.voteScore 
        }
      }

    default:
      return state
  }
}


export default combineReducers({
    posts,
})
