import React from 'react'

const AddQuestions = ({ addQuestion, setAddQuestion }) => {
	return (
		<div>
			<label htmlFor="question">Write Down Your Question Here..</label>
			<textarea
				className="border w-full p-2 mb-4 rounded"
				name="question"
				id="question"
				rows="5"
				placeholder="Write Question..."
				style={{ resize: 'none' }}
				value={addQuestion}
				required
				onChange={(e) => setAddQuestion(e.target.value)}
			></textarea>
		</div>
	)
}

export default AddQuestions
