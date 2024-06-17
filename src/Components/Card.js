import React from 'react'

const Card = () => {
    return (
        <div>
            <div className='container my-3 '>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="./Images/3.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a href='' className='btn btn-success'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="./Images/1.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a href='' className='btn btn-success'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="./Images/2.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a href='' className='btn btn-success'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-2">
                            <img src="./Images/3.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <a href='' className='btn btn-success'>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card