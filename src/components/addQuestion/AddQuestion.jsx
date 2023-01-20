import React from 'react'

const AddQuestion = () => {
	return (
		<div className="mb-4">
			<label htmlFor="question"></label>
			<textarea
				className="border w-11/12 p-2 rounded"
				name="question"
				id="question"
				rows="5"
				placeholder="Write Question..."
				style={{ resize: 'none' }}
			></textarea>
		</div>
	)
}

export default AddQuestion
