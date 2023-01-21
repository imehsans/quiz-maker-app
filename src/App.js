import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MakeExam from './pages/MakeExam'
import NoPage from './pages/NoPage'
import Test from './pages/Test'
import View from './pages/View'

function App() {
	return (
		<div className="container mx-auto">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<View />}>
						<Route index element={<Home />} />
						<Route path="makeExam" element={<MakeExam />} />
						<Route path="test" element={<Test />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
