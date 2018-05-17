import { getPost, getAllPosts, getComments, votePost, addNewPost, editPost, deletePost, addNewComment, editComment, voteComment, deleteComment } from '../utils/ReadableAPI'

const GET_POSTS = 'GET_POSTS'
const VOTE_POST = 'VOTE_POST'
const GET_POST = 'GET_POST'
const ADD_NEW_POST = 'ADD_NEW_POST'
const EDIT_POST = 'EDIT_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'
const VOTE_COMMENT = 'VOTE_COMMENT'

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

  export const deletePostAction = (id) => dispatch => (
    deletePost(id)
      .then(() => {
        dispatch({
          type: DELETE_POST,
          id,
        })
      })
  )

  export const addNewCommentAction = (comment, parentId) => dispatch => (
    addNewComment(comment)
      .then(comment => {
        dispatch({
          type: ADD_NEW_COMMENT,
          comment,
          parentId
        })
      })
  )

  export const editCommentAction = (id, comment) => dispatch => {
    return editComment(id, comment)
      .then((comment) => {
        dispatch({
          type: EDIT_COMMENT,
          id,
          comment
        })
      })
  }

  export const deleteCommentAction = (comment) => dispatch => {
    return deleteComment(comment.id)
      .then(() => {
        dispatch({
          type: DELETE_COMMENT,
          comment,
        })
      })
  }

  export const upVoteCommentAction = (id) => dispatch => (
    voteComment(id, "upVote")
      .then((comment) => {
        dispatch({
          type: VOTE_COMMENT,
          voteScore: comment.voteScore,
          id: id,
          parentId: comment.parentId
        })
      })
  )

  export const downVoteCommentAction = (id) => dispatch => (
    voteComment(id, "downVote")
      .then((comment) => {
        dispatch({
          type: VOTE_COMMENT,
          voteScore: comment.voteScore,
          id: id,
          parentId: comment.parentId
        })
      })
  ) 