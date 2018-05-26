import React, { Component } from 'react'
import { UpArrowIcon, DownArrowIcon } from './icons'

class VoteControl extends Component {
  render () {

    const { score, upVoteClick, downVoteClick} = this.props

    return (
      <div className="vote-control-container">
        <div className="vote-up-control vote-control" onClick={upVoteClick}><UpArrowIcon/></div>
        <div className="vote-score">{score}</div>
        <div className="vote-down-control vote-control" onClick={downVoteClick}><DownArrowIcon/></div> 
      </div>
    )
  }
}

export default VoteControl