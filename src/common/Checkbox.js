import React from 'react'

function Checkbox({ isChecked, changeTheme }) {
	console.log(isChecked)
	return (
		<div className="checkbox">
			<label
				className={`custom-checkbox ${isChecked ? 'checked' : ''}`}
				onClick={changeTheme}
			>
				<span className="custom-checkbox-button"></span>
			</label>
		</div>
	)
}

export default Checkbox