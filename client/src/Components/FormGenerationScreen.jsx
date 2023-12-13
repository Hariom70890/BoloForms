import React from 'react'
import CategorizeQuestion from './CategorizeQuestion'
import ComprehensiveForm from './ComprehensiveFormQuestion'
import ClozeQuestion from './ClozeQuestion'


const FormGenerationScreen = () => {
  return (
    <>
      <CategorizeQuestion/>
      <ComprehensiveForm />
      <ClozeQuestion/>
    </>
  )
}

export default FormGenerationScreen