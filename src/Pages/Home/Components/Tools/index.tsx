import './index.scss';
import { Tools_data } from 'assets/data/Tools';
const Reveal = require('react-reveal/Reveal');

const Tools = () => {
    return (
        <section className='container-fluid d-flex justify-content-center align-items-center tools'  id='tools'>
            <Reveal duration={1500} effect="animate__animated animate__fadeInUp">
                <h2 className='title'>TOOLS I USE</h2>
            </Reveal>
            <div className='d-flex tools-container flex-row flex-wrap justify-content-center align-items-center'>
                {
                    Tools_data.map((x, y) => {
                        return  (
                            <Reveal effect='animate__animated  animate__flipInX' key={y}>
                                <div className='card tools-card float-shadow'>
                                    <x.img className={`card-img-top ${y % 2 ? 'green' : 'orange'}`} />                                   
                                    <div className="card-body">
                                        <p className="card-text text-center">{x.name}</p>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Tools;