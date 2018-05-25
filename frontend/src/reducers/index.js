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

    case 'DELETE_POST':
      return {
        ...state,
        [action.id]:{
          ...state[action.id],
          deleted: true
        }
      }

    case 'ADD_NEW_COMMENT':
      return {
        ...state,
        [action.parentId]:{
          ...state[action.parentId],
          comments: {
            ...state[action.parentId].comments,
            [action.comment.id]:{
              ...action.comment
            }
          }
        }
      }

    case 'EDIT_COMMENT':
      return {
        ...state,
        [action.comment.parentId]:{
          ...state[action.comment.parentId],
          comments: {
            ...state[action.comment.parentId].comments,
            [action.id]:{
              ...action.comment
            }
          }
        }
      }

    case 'DELETE_COMMENT':
      return {
        ...state,
        [action.comment.parentId]:{
          ...state[action.comment.parentId],
          comments: {
            ...state[action.comment.parentId].comments,
            [action.comment.id]:{
              ...action.comment,
              deleted: true
            }
          }
        }
      }

    case 'VOTE_COMMENT':
      return {
        ...state, 
        [action.parentId]:{
          ...state[action.parentId],
          comments:{
            ...state[action.parentId].comments,
            [action.id]:{
                ...state[action.parentId].comments[action.id],
                voteScore: action.voteScore 
              }
          }
        }
      } 

    default:
      return state
  }
}

const categories = (state = initialState, action) => {

  let categoriesArray

  switch(action.type) {

    case 'GET_CATEGORIES':
      categoriesArray = action.categories.reduce((array, category) => {
        array[category.name] = {
          ...category
        }
        return array
      },{})

      return {
        ...state, 
        ...categoriesArray
      }

    default:
      return state

  }

}

export default combineReducers({
    posts,
    categories,
    form: formReducer,
})
