import React from 'react'
import { Link } from 'react-router-dom'
import './Mainbar.css'
import moment from 'moment'

const QuestionList = ({ questionList }) => {
  return (
        <>
            {
                questionList.map((question) => (
                    <Question question={question} key={question._id}/>
                ))
            }
        </>
  )
}

export default QuestionList

const Question = ({question}) => {

  return (
    <div className='question-container'>
      <div className='question-vot-ans'>
        <p style={{fontSize:"20px"}}>{question.upVotes.length - question.downVotes.length}</p>
        <p style={{fontSize:"13px"}}>votes</p>
      </div>
      <div className='question-vot-ans'>
        <p style={{fontSize:"20px"}}>{question.noOfAnswers}</p>
        <p style={{fontSize:"13px"}}>answers</p>
      </div>
      <div className='display-question'>
        <Link to={`/Questions/${question._id}`} className='question-title'>
          {question.questionTitle}
        </Link>
        <div className='display-tags-time'>
          <div className='display-tags'>
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>
          <p className='display-time'>
            asked {moment(question.askedOn).fromNow()} by {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}
