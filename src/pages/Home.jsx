import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<>
			<div className="w-1/2 mt-20 border m-auto shadow-2xl p-10">
				<h1 className="text-3xl py-5 text-center">Welcome to Exam Site</h1>
				<div className="flex font-semibold flex-col text-center">
					<Link to="/makeExam">
						<p className="py-2 bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl my-4 hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600  rounded px-8 border">
							Make Exam
						</p>
					</Link>
					<Link to="/test">
						<p className="py-2 bg-gradient-to-tr my-4 shadow-md to-red-600 via-white from-blue-800 hover:bg-gradient-from-tl  hover:from-gray-500 hover:via-blue-700 hover:text-white hover:to-green-600  rounded px-8 border">
							Take Test
						</p>
					</Link>
				</div>
			</div>
			<h1 className="text-sm text-center mt-20 font-semibold">
				Assignment From{' '}
				<a className="italic text-blue-700" href="https://ikonicsolution.com/">
					Ikonic Solution
				</a>
			</h1>
		</>
	)
}

export default Home
