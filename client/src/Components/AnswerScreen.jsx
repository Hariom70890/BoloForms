import React from 'react'
import CategorizeAnswer from './CategorizeAnswer'
import ComprehensiveFormAnswer from './ComprehensiveFormAnswer'
import ClozeAnswer from './ClozeAnswer'

const AnswerScreen = () => {
  return (
    <div>
      <CategorizeAnswer/>
      <ComprehensiveFormAnswer/>
      <ClozeAnswer/>
    </div>
  )
}

export default AnswerScreen