import React from 'react'

import CourseDetailsHeader from '../courseDetails1/courseDetailsHeader'
import CurriculumRoots from './curriculumRoots'
import CurriculumRootsMap from './roadmap'

const cirriculum = () => {
  return (
    <div>
        <CourseDetailsHeader/>
        <div className='d-flex'>
        <CurriculumRootsMap/>
        {/* <CurriculumRootsMap/> */}
        </div>
    </div>
  )
}

export default cirriculum
