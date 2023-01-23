import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TogglerContext from '../context/TogglerContext'
import AddQuestion from './addQuestion/AddQuestions'
import FormComponent from './formComponent/FormComponent'
import PreviewComponent from './PreviewComponent'

const Question = () => {
	const [addOption, setAddOption] = useState([])
	const [addQuestion, setAddQuestion] = useState('')
	const [test, setTest] = useState([])
	const context = useContext(TogglerContext)
	const questionObj = {
		question: addQuestion,
		options: addOption,
		correctOption: '',
	}

	const obj = {
		id: 0,
		content: '',
	}

	useEffect(() => {
		axios
			.get('http://localhost:5000/test')
			.then(function (res) {
				setTest(res.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [context.tab])

	const addQuestionToJson = (e) => {
		e.preventDefault()
		axios
			.post('http://localhost:5000/test', questionObj)
			.then((res) => {
				console.log(res)
				setAddQuestion([])
				setAddOption([])
				context.setTab(!context.tab)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="flex flex-col mx-auto justify-center px-6 md:px-0 gap-y-10 md:flex-row">
			<div className="w-full md:w-1/3 mx-auto">
				<form className="w-full md:w-11/12" action="">
					<h1 className="text-2xl text-center pb-6">Add Question</h1>
					<AddQuestion
						addQuestion={addQuestion}
						setAddQuestion={setAddQuestion}
					/>
					<FormComponent addOption={addOption} setAddOption={setAddOption} />
					<div className="w-full  flex justify-around flex-wrap">
						<button
							className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-10 border"
							onClick={() => {
								setAddOption([...addOption, obj])
							}}
						>
							Add Option
						</button>
						<button
							type="submit"
							className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-8 border"
							onClick={(e) => {
								addQuestion && addOption
									? addQuestionToJson(e)
									: context.setTab(!context.tab)
							}}
						>
							Next Question
						</button>
					</div>
				</form>
			</div>
			<div className="max-h-[78vh] overflow-auto w-full md:w-2/3 mx-auto  border shadow-lg">
				<PreviewComponent test={test} question={questionObj} />
			</div>
		</div>
	)
}

export default Question
