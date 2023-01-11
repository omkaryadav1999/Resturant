import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((value) => {
                        return <button className="btn-group__item" onClick={() => filterItem(value)}>{value}</button>
                    })}
                </div>

            </nav>
        </>
    )
}

export default Navbar