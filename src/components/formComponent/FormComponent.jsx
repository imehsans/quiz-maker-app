import React, { useContext, useEffect } from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'
import TogglerContext from '../../context/TogglerContext'

const FormComponent = ({ addOption, setAddOption }) => {
	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
	const context = useContext(TogglerContext)

	useEffect(() => {}, [context.tab])

	const handleRemove = (e) => {
		e.preventDefault()
		console.log('Target Called', e.target.id)
		addOption.splice(e.target.id, 1)
		context.setTab(!context.tab)
	}

	return (
		<div className="">
			{addOption.map((item, ind) => {
				return (
					<div
						key={ind}
						className="flex items-end  justify-between  w-full my-2 gap-x-2 "
					>
						<div className="w-10/12">
							<label className="text-start" htmlFor="option">
								Option ({arr[ind]})
							</label>
							<input
								id={ind}
								className="py-1 w-full px-2 border  rounded "
								type="text"
								value={item.content}
								required
								onChange={(e) =>
									setAddOption((addOption) =>
										addOption.map((iter, i) => {
											return i === ind
												? { ...item, content: e.target.value, id: e.target.id }
												: iter
										})
									)
								}
								placeholder="Option"
							/>
						</div>
						<button
							className="text-black py-1 px-2  bg-gradient-to-tr from-red-400 via-white to-blue-600 hover:bg-gradient-from-tl hover:from-gray-500 hover:via-blue-700 hover:text-white  shadow-md hover:to-green-600 rounded text-2xl border "
							id={ind}
							onClick={(e) => handleRemove(e)}
						>
							<RiDeleteBack2Line />
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default FormComponent
