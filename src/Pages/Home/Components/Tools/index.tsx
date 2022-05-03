import React from 'react';
import './index.scss';
import { Tools_data } from 'Data/Tools';

const Tools = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center tools'>
            <h1 className='title'>TOOLS I USED</h1>
            <div className='d-flex tools-container flex-row flex-wrap justify-content-center align-items-center'>
                {
                    Tools_data.map((x, y) => {
                        return  (
                            <div className='card tools-card' key={y}>
                                <img className="card-img-top" src={x.img} alt={x.name} loading="lazy"></img>
                                <div className="card-body">
                                    <p className="card-text text-center">{x.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tools;