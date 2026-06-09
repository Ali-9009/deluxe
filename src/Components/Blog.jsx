import React from 'react'
import { NavLink } from 'react-router-dom'
import GSAP from './GSAP'


const Blog = () => {

    return (
        <>
            <section className='bg-main-light'>
                <div className='bg-white rounded-bottom-5 py-5'>
                    <div class="container fadeLeft">
                        <div className='display-5 fw-bold'>Blog.</div>
                        <div className='fs-5'>"Discover the transformative power of Endolift: a cutting-edge,
                            non-surgical treatment for skin tightening, fat reduction, and rejuvenation."</div>
                    </div>
                </div>
            </section>



            <section className='bg-main-light py-5'>
                <div className="container">
                    <img class="mb-4 fadeUp" src="images/image-30498.png" width="100%" alt="" />

                    <div class="row">
                        <div class="col-lg-4 col-md-6 fadeUp mb-3">
                            <NavLink to="/blog-detail">
                                <div class="border p-2 rounded-3 bg-white">
                                    <img src="images/image-24534.png" width="100%" alt="" />
                                    <div class="p-3">
                                        <div class="my-2 d-inline-block p-1 rounded-2 fw-semibold bg-main-light fs-sm">Technology
                                        </div>
                                        <div class="my-2 fs-8 fw-semibold">The Impact of Technology on the Workplace: How Technology is Changing
                                        </div>
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="images/Image-20394857.png" width="30" alt="" />
                                            <div class="text-black-50">Tracey Wilson </div>
                                            <div class="text-black-50">August 20, 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-lg-4 col-md-6 fadeUp mb-3">
                            <NavLink to="/blog-detail">
                                <div class="border p-2 rounded-3 bg-white">
                                    <img src="images/image-24534.png" width="100%" alt="" />
                                    <div class="p-3">
                                        <div class="my-2 d-inline-block p-1 rounded-2 fw-semibold bg-main-light fs-sm">Technology
                                        </div>
                                        <div class="my-2 fs-8 fw-semibold">The Impact of Technology on the Workplace: How Technology is Changing
                                        </div>
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="images/Image-20394857.png" width="30" alt="" />
                                            <div class="text-black-50">Tracey Wilson </div>
                                            <div class="text-black-50">August 20, 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-lg-4 col-md-6 fadeUp mb-3">
                            <NavLink to="/blog-detail">
                                <div class="border p-2 rounded-3 bg-white">
                                    <img src="images/image-24534.png" width="100%" alt="" />
                                    <div class="p-3">
                                        <div class="my-2 d-inline-block p-1 rounded-2 fw-semibold bg-main-light fs-sm">Technology
                                        </div>
                                        <div class="my-2 fs-8 fw-semibold">The Impact of Technology on the Workplace: How Technology is Changing
                                        </div>
                                        <div class="d-flex align-items-center gap-3">
                                            <img src="images/Image-20394857.png" width="30" alt="" />
                                            <div class="text-black-50">Tracey Wilson </div>
                                            <div class="text-black-50">August 20, 2022</div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    </div>

                    <button class="btn btn-dark mx-auto mt-3 d-block">Load More</button>
                </div>
            </section>

            <GSAP/>
        </>
    )
}

export default Blog