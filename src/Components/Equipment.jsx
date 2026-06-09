import React from 'react'
import GSAP from './GSAP'


const Equipment = () => {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 fadeLeft">
                            <div className='position-sticky top-12 py-5'>
                                <div className='text-black my-2 display-2 fw-bold'>Equipment.</div>

                                <div className='d-flex align-items-start gap-3 col-lg-8'>
                                    <div className='fs-5'>Deluxe Packages is taking advantage of Latest Technologies and Excellent
                                        Quality Hardware to Produce best quality results. Some of the equipment that we use includes.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className='my-5 fadeUp' id='bobst'>
                                <img src={'public/images/Group 1000001132.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp' id='cron'>
                                <img src={'public/images/Group 1000001133.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp' id='stylus'>
                                <img src={'public/images/Group 1000001134.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp' id="rapida">
                                <img src={'public/images/Group 1000001135.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/images/Group 1000001136.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/images/Group 1000001137.png'} width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src={'public/images/Group 1000001138.png'} width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GSAP />
        </>
    )
}

export default Equipment