import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import TogglerContext from '../context/TogglerContext'
import AddQuestion from './addQuestion/AddQuestions'
import FormComponent from './formComponent/FormComponent'

const PreviewComponent = ({ test, question }) => {
	const context = useContext(TogglerContext)
	const [addOption, setAddOption] = useState([])
	const [addQuestion, setAddQuestion] = useState('')
	const [module, setModule] = useState(false)
	const [editQId, setEditQId] = useState(0)
	const [updateOption, setUpdateOption] = useState(false)

	const obj = {
		id: 0,
		content: '',
	}

	useEffect(() => {}, [context.tab])

	useEffect(() => {
		const questionEditObj = {
			question: addQuestion,
			options: addOption,
			correctOption: '',
		}
		const url = 'http://localhost:5000/test/'
		const pharmUrl = url + editQId + '/'
		axios
			.patch(pharmUrl, questionEditObj)
			.then((res) => {
				setModule(false)
				console.log(res)
				context.setTab(!context.tab)
				setAddOption([])
				setAddQuestion('')
			})
			.catch((err) => {
				console.log(err)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [updateOption])

	const editDisplay = (
		<div className="absolute left-0  right-0 top-0 bottom-0 bg-black bg-opacity-80">
			<div className="container max-h-[75vh] overflow-auto mx-auto py-10 mt-20 rounded-2xl px-10 bg-white w-1/2 ">
				<form className="w-full " action="">
					<h1 className="text-2xl text-center pb-6">Update Question</h1>
					<AddQuestion
						addQuestion={addQuestion}
						setAddQuestion={setAddQuestion}
					/>
					<FormComponent addOption={addOption} setAddOption={setAddOption} />
				</form>
				<div className="w-full   flex justify-around flex-wrap">
					<button
						className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-10 border"
						onClick={() => {
							setAddOption([...addOption, obj])
						}}
					>
						Add Option
					</button>
					<button
						className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-10 border"
						onClick={(e) => setUpdateOption(!updateOption)}
					>
						Update
					</button>
					<button
						className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-8 border"
						onClick={() => setModule(false)}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)

	const handleDelete = (e) => {
		e.preventDefault()
		const url = 'http://localhost:5000/test/'
		const pharmUrl = url + e.target.id + '/'
		axios
			.delete(pharmUrl)
			.then((res) => {
				console.log(res)
				context.setTab(!context.tab)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleEdit = (e) => {
		e.preventDefault()
		setEditQId(e.target.id)
		setModule(true)
	}

	const optionChecked = async (e, questionID) => {
		e.preventDefault()
		const url = 'http://localhost:5000/test/'
		const pharmUrl = url + questionID + '/'
		const editedObj = { correctOption: e.target.id }
		try {
			const res = await axios.patch(pharmUrl, editedObj)
			console.log(res)
			context.setTab(!context.tab)
		} catch (err) {
			console.log(err)
		}
	}

	const data = (
		<ul>
			{test?.map((ques) => (
				<li key={ques.id} className="mb-2 md:mb-4 flex justify-between">
					<div>
						<div className="flex">
							<span>
								{ques.id}: {ques.question}?
							</span>
						</div>
						<ul>
							{ques?.options?.map((opt) => {
								return (
									<li key={opt.id} className="flex gap-3 pl-2 md:pl-4">
										<input
											id={opt.id}
											type="radio"
											name={ques.id}
											onChange={(e) => optionChecked(e, ques.id)}
										/>
										<label>{opt.content}</label>
									</li>
								)
							})}
						</ul>
					</div>
					<div className="flex flex-col gap-4">
						<button
							id={ques.id}
							className="py-1 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-3 font-semibold text-[16px] border flex items-center gap-x-2
                     "
							onClick={(e) => handleDelete(e)}
						>
							<span>
								<RiDeleteBinLine />
							</span>
							<span>Delete</span>
						</button>
						<button
							id={ques.id}
							className="py-1 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-3 font-semibold text-[16px] border flex items-center gap-x-2"
							onClick={(e) => handleEdit(e)}
						>
							<span>
								<FaEdit />
							</span>
							<span>Edit</span>
						</button>
					</div>
				</li>
			))}
		</ul>
	)

	return (
		<div className="py-2 px-3  md:py-5 md:px-10">
			{module ? editDisplay : ''}
			<div className="pb-4 md:pb-10">
				{}
				{question.question ? (
					<div>
						<h1 className="text-2xl text-center">NEW Question</h1>
						<h1 className="py-2">
							Question{question.id}: {question.question}
						</h1>
					</div>
				) : (
					<h1 className="text-center text-xl">Write Down Your Question</h1>
				)}
				<ul>
					{question.options?.map((choice, ind) => {
						localStorage.setItem('content', choice.content)
						return (
							<li key={ind} className=" pl-3 py-1 flex items-center gap-x-2">
								<input type="radio" name="option" id={ind} />
								{choice.content}
							</li>
						)
					})}
				</ul>
			</div>
			<div className="border-t pt-5 px-5">
				<h1 className="text-2xl text-center">Exam</h1>
				{data}
			</div>
		</div>
	)
}

export default PreviewComponent
