import React, { useState } from 'react'
import AddQuestion from './addQuestion/AddQuestion'
import FormComponent from './formComponent/FormComponent'

const Question = () => {
	const [addOption, setAddOption] = useState([])
	// const [addQuestion, setAddQuestion] = useState([])

	// const qusetionObj = {
	// 	question: '',
	// 	options: {
	// 		a: '',
	// 		b: '',
	// 		c: '',
	// 		d: '',
	// 	},
	// }
	const obj = {
		label: '',
		input: '',
	}
	console.log(addOption)
	return (
		<>
			<form action="">
				<h1 className="text-2xl text-center pb-6">Add Question</h1>
				<AddQuestion />
				<FormComponent addOption={addOption} setAddOption={setAddOption} />
			</form>
			<button
				className="w-11/12 py-2 bg-gradient-to-tr from-red-600 via-white to-blue-800 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-8 border"
				onClick={() => {
					setAddOption([...addOption, obj])
				}}
			>
				Add Option
			</button>
			<button className="w-11/12 py-2 bg-gradient-to-tr from-red-600 via-white to-blue-800 hover:bg-gradient-from-tl  hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-8 border">
				Next Question
			</button>
		</>
	)
}

export default Question
