import React from 'react'

const FormComponent = ({ addOption, setAddOption }) => {
	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

	const handleRemove = (e) => {
		e.preventDefault()
		console.log('Target Called', e.target.id)
		addOption.splice(e.target.id, 1)
		setAddOption(addOption)
	}

	return (
		<div className="">
			{addOption.map((item, ind) => {
				return (
					<div
						key={ind}
						className="flex w-11/12 my-1 gap-x-2 justify-between  items-center"
					>
						<label htmlFor="option">Option ({arr[ind]})</label>
						<input
							id={ind}
							className="py-1 px-2 border w-4/6 rounded "
							type="text"
							value={item.input}
							onChange={(e) =>
								setAddOption((addOption) =>
									addOption.map((iter, i) => {
										return i === ind ? { ...item, input: e.target.value } : iter
									})
								)
							}
							placeholder="Option"
						/>
						<button id={ind} onClick={(e) => handleRemove(e)}>
							Dell
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default FormComponent
