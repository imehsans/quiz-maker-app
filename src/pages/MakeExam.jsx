import React from 'react'
import PreviewComponent from '../components/PreviewComponent'
import Question from '../components/Question'
const MakeExam = () => {
	return (
		<>
			<h1 className="py-4 text-3xl text-center">Quiz Maker App</h1>
			<div className="flex">
				<div className="w-1/3  mx-auto">
					<Question />
				</div>
				<div className="max-h-[70vh] overflow-auto w-2/3 border shadow-lg">
					<PreviewComponent />
				</div>
			</div>
		</>
	)
}

export default MakeExam
