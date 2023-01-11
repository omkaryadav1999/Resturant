import React from 'react'

const Menucard = ({ menuData }) => {

    return (
        <>
            {
                menuData.map((value) => {
                    const { id, image, name, category, description } = value
                    return <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-cricle subtle">{id}</span>
                                <span className="card-author subtle">{category}</span>
                                <h2 className="card-title"> {name}</h2>
                                <span className="card-description subtle">
                                    {description}
                                </span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="images" className="card-media" />
                            <span className="card-tag  subtle">Order Now</span>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default Menucard