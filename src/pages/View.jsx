import React from 'react'
import { Outlet } from 'react-router-dom'

const View = () => {
	return (
		<div className="container mx-auto">
			<Outlet />
		</div>
	)
}

export default View
