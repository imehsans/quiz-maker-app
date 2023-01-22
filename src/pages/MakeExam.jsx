import React, { useState } from 'react'
import Question from '../components/Question'
import TogglerContext from '../context/TogglerContext'

const MakeExam = () => {
	const [tab, setTab] = useState(true)

	return (
		<div>
			<div className="">
				<h1 className="py-8 bg-white  border-b  text-3xl text-center">
					Quiz Maker App
				</h1>
			</div>
			<div className="mt-4">
				<TogglerContext.Provider value={{ tab: tab, setTab: setTab }}>
					<Question />
				</TogglerContext.Provider>
			</div>
		</div>
	)
}

export default MakeExam
