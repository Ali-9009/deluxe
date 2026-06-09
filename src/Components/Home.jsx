import React, { useRef } from 'react'
import Navbar from './Navbar'
import { BsArrowRight } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import Footer from './Footer'
import ContactForm from './ContactForm'
import GSAP from './GSAP'

const Home = () => {

    return (
        <>
            <section className='bg-white'>
                <div className='container py-5 homeBanner'>
                    <div className="row flex-lg-row flex-md-row flex-column-reverse">
                        <div className="col-lg-6 col-md-7">
                            <div>
                                <div className='fadeLeft display-3 fw-bold text-black lh-base my-5 text-lg-start text-md-start text-center'>
                                    Offset <span className='text-main'>Printing <br /> & Packaging</span> <br /> "Since 1957"
                                </div>
                            </div>

                            <div className='fadeLeft bg-main col-lg-7 p-5 text-white position-relative' style={{ borderRadius: '0px 80px 0px 40px' }}>
                                <button className='btn bg-black text-white position-absolute end-50 py-2' style={{ top: "-20px" }}>About Us</button>

                                <div>Packaging solutions that deliver excellence, protect your products, and captivate
                                    your customers. <br />
                                    <img className="my-3" src="images/Group 10.png" width="60%" alt="" />

                                    <div>Recommended by people.</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5'>
                            <div className='fadeRight'>
                                <img src="images/Chips-pack-1 4.png" width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white rounded-bottom-5">
                <div className="container">
                    <div className="col-xl-11 mx-auto fadeLeft text-center">
                        <h3 className="text-black display-6 fw-semibold mb-4">
                            One of the <span className="text-main">Leading Offset Printing Press</span> in Karachi
                        </h3>

                        <p className="lh-base fs-6 mx-auto">
                            In 1957, the Shafi Family, under the headship of Mustafa Shafi,
                            competently supported by his brother entered the Industrial arena.
                            Due to uphill struggle and honest dealings of the family, the
                            business rose to new heights. The company continues to achieve one
                            landmark after another with remarkable consistency. Today, Deluxe
                            Package is one of the leading printers in Karachi.
                        </p>
                    </div>
                </div>
            </section>

            <section className='py-5 rounded-bottom-5 border-bottom'>
                <div className="container fadeUp">
                    <div className='text-black fs-1 text-center fw-bold mb-5'>Transforming Ideas into Exceptional <br />
                        Packaging <span className='text-main'>*Experiences.</span>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4 d-flex justify-content-center fadeUp">
                            <div>
                                <img src="images/Group 14.png" alt="" />
                                <div className='fw-bold fs-5 my-1'>Sustainable</div>
                                <p>Our sustainable packaging <br /> is designed to protect your <br /> product and the Earth.</p>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md fadeUp'>
                            <div>
                                <img src="images/Group 1000001108.png" width={'100%'} alt="" />                                
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 d-flex align-items-lg-end justify-content-center fadeUp">
                            <div>
                                
                                <img src="images/Group 14 (1).png" alt="" />                                

                                <div className='fw-bold fs-5 my-1'>Customizable</div>
                                <p>Our customizable <br /> packaging adapts perfectly <br /> to your brand and products.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 fadeLeft">
                            <div className='position-sticky top-12 py-5'>
                                <div className='fw-medium fs-5'>Packaging design essentials</div>
                                <div className='text-black my-2 display-2 fw-bold'>Our Projects.</div>

                                <div className='d-flex align-items-start gap-3 col-lg-8'>
                                    <img src="images/Group 14 (1).png" width={'15%'} alt="" />                          

                                    <div>
                                        <div className='fs-4 fw-semibold text-black'>Packaging Solutions.</div>
                                        <div className='my-2 fs-5'>Innovative packaging solutions designed to protect, preserve, and impress.</div>
                                        <button className="group bg-black text-white px-4 rounded py-2  flex items-center gap-2 hover:bg-gray-800 transition">
                                            About Us
                                            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 px-lg-2 px-md-2 px-5">
                            <div className='my-5 fadeUp'>
                                <img src="images/image-8.png" width={'100%'} alt="" />                     
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src="images/image-9.png" width={'100%'} alt="" />                     
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src="images/image.png" width={'100%'} alt="" />
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src="images/image-1.png" width={'100%'} alt="" />                     
                            </div>
                            <div className='my-5 fadeUp'>
                                <img src="images/image-2.png" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GSAP />

            <div className='fadeUp'>
                <ContactForm />
            </div>
        </>
    )
}

export default Home