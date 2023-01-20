import './App.css'
import Question from './components/Question'
function App() {
	return (
		<div className="container mx-auto">
			<h1 className="py-4 text-3xl text-center">Quiz Maker App</h1>
			<div className="flex ">
				<div className="w-1/3">
					<Question />
				</div>
				<div className="w-2/3">1</div>
			</div>
		</div>
	)
}

export default App
