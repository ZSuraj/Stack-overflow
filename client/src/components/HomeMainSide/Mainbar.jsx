import React from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

import QuestionList from './QuestionList'
import './Mainbar.css'

const MainSide = () => {

  const loction = useLocation()
  const user = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)

  function checkAuth() {
    if (user === null) {
      alert("Login or Signup")
      navigate('/Auth')
    }
    else {
      navigate('/AskQuestion')
    }
  }

//   var questionsList = [{
//     _id:1,
//     votes:2,
//     noOfAnswers:2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java", "C", "python", "node js", "mongoDB", "Swift", "C++"],
//     userPosted: "charlie",
//     userId: 1,
//     askedOn: "jan 1",
//     answer: [{
//       answerBody: "Answer",
//       userAnswered: "john",
//       answeredOn: "jan 2",
//       userId:2,
//     }]
//   },
// ]

  return (
    <div className='main-bar'>
      <div className='main-header'>
        <h1>
          {
            loction.pathname === '/' ? "Top Questions" : "All Questions"
          }
        </h1>
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ? 
          <h1>Loading...</h1>:
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default MainSide