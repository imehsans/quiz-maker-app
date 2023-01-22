import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Test = () => {
	const [exam, setExam] = useState([])
	const [test, setTest] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:5000/exam')
			.then(function (res) {
				setExam(res.data)
			})
			.catch(function (error) {
				console.log(error)
			})
		axios
			.get('http://localhost:5000/test')
			.then(function (res) {
				setTest(res.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	const data = (
		<>
			{test?.map((question) => {
				return (
					<li key={question.id} className="mb-4">
						<div>
							<div className="flex">
								<span>
									{question.id}: {question.question}?
								</span>
							</div>
							<div>
								<ul>
									{question?.options?.map((option) => {
										return (
											<li key={option.id} className="flex gap-3 pl-4">
												<input type="radio" name={question.id} id={option.id} />
												<label>{option.content}</label>
											</li>
										)
									})}
								</ul>
							</div>
						</div>
					</li>
				)
			})}
		</>
	)
	return (
		<div className="container border py-5 px-10 my-10">
			<div>
				<p className="float-right">Date: {exam[0]?.date}</p>
				<div className="text-center py-10 border-b">
					<h1 className="text-3xl">Exam: {exam[0]?.name}</h1>
					<p>Total Time: {exam[0]?.time}</p>
				</div>
			</div>
			<div className="p-5">
				<ul>{data}</ul>
			</div>
		</div>
	)
}

export default Test
