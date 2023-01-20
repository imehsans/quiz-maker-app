import React, { useState } from 'react'
import AddQuestion from './addQuestion/AddQuestion'
import FormComponent from './formComponent/FormComponent'

const Question = () => {
	const [addOption, setAddOption] = useState([])

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
				className="w-11/12 mt-4 py-2 border rounded"
				onClick={() => {
					setAddOption([...addOption, obj])
				}}
			>
				Add Option
			</button>
		</>
	)
}

export default Question
