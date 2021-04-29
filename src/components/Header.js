import React from 'react'
import Checkbox from '../common/Checkbox'

const Header = ({ isChecked, changeTheme }) => {
    return (
        <header>
            <h2 className="header">
                stop<span>W</span>atch
			</h2>
            <Checkbox isChecked={isChecked}
                changeTheme={changeTheme} />
        </header>
    )
}

export default Header
