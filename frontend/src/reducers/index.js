import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const initialState = {
    
}

//FOR POSTS
const posts = (state = initialState, action) => {
  
  let commentsArray
  
  switch(action.type) {

    case 'GET_POSTS':
        //RECHECK: Short hand maye within return
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

    case 'ADD_NEW_POST':
      return {
        ...state,
        //posts: [...state.posts, action.post]
        [action.post.id]:{
          ...action.post,
          comments: []
        }
      }

    case 'EDIT_POST':
      return {
        ...state,
        [action.post.id]:{
          ...action.post
        }
      }

    default:
      return state
  }
}


export default combineReducers({
    posts,
    form: formReducer,
})
