import React from 'react'

const FormComponent = ({ addOption, setAddOption }) => {
	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

	console.log(addOption)
	return (
		<div className="">
			{addOption.map((item, ind) => {
				return (
					<div className="flex w-11/12 my-1 gap-x-2 justify-between  items-center">
						<label htmlFor="option">Option ({arr[ind]})</label>
						<input
							id={ind}
							className="py-1 px-2 border w-4/6 rounded"
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
						<button>Dell</button>
					</div>
				)
			})}
		</div>
	)
}

export default FormComponent
