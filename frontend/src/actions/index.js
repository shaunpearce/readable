import { getPost, getAllPosts, getComments, votePost, addNewPost, editPost} from '../utils/ReadableAPI'

const GET_POSTS = 'GET_POSTS'
const VOTE_POST = 'VOTE_POST'
const GET_POST = 'GET_POST'
const ADD_NEW_POST = 'ADD_NEW_POST'
const EDIT_POST = 'EDIT_POST'

export const fetchPosts = () => dispatch => (
    getAllPosts()
        ///Have to dispatch on each post to get comments as need post id for comments call (No all comments api call available)
        .then(posts => {
          posts.map(post => {
            getComments(post.id)
              .then(comments => {
                dispatch({
                  type: GET_POSTS,
                  post: post,
                  comments: comments
                })
              })
          })
        })
)

export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type: GET_POST,
            post,
            comments,
            id: id
          })
        })
    })
)

export const upVotePostAction = (id) => dispatch => (
    votePost(id, "upVote")
      .then((post) => {
        dispatch({
          type: VOTE_POST,
          voteScore: post.voteScore,
          id: id
        })
      })
  )

  export const downVotePostAction = (id) => dispatch => (
    votePost(id, "downVote")
      .then((post) => {
        dispatch({
          type: VOTE_POST,
          voteScore: post.voteScore,
          id: id
        })
      })
  )

  export const addNewPostAction = (post) => dispatch => (
    addNewPost(post)
      .then(post => {
        dispatch({
          type: ADD_NEW_POST,
          post
        })
      })
  )

  export const editPostAction = (id, post) => dispatch => (
    editPost(id, post)
      .then((post) => {
        dispatch({
          type: EDIT_POST,
          id, 
          post
        })
      })
  )
