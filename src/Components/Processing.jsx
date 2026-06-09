import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



const Processing = () => {


    useGSAP(() => {

        gsap.utils.toArray(".fadeUp").forEach((fadeUp) => {
            gsap.from(fadeUp, {
                y: 50,
                delay: 0.1,
                duration: 1.6,
                opacity: 0,
                id: "example",
                stagger: 10,
                // delay: 0.2,
                scrollTrigger: {
                    trigger: fadeUp,
                    scroller: "body",
                    // markers: true,
                    start: "top 65%",
                },
            });
        });


        gsap.from('.fadeRight', {
            // x: 30,
            scale: 0.5,
            ease: "bounce",
            opacity: 0,
            duration: 1.5,
            delay: 0.4
        })


        gsap.utils.toArray('.fadeLeft').forEach((fadeLeft) => {

            gsap.from(fadeLeft, {
                x: -30,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                scrollTrigger: {
                    trigger: fadeLeft,
                    scroller: "body",
                    // markers: true,
                    start: "top 65%",
                },
            })
        })
    })


    return (
        <>
            <section className='bg-main-light'>
                <div className='bg-white py-5 rounded-bottom-5'>
                    <div className="container fadeLeft">
                        <div className='display-5 fw-bold'>Processing.</div>
                        <div className='fs-5'>Processing in printing refers to the preparation and treatment of
                            materials or files to ensure they are ready for high-quality printing output.</div>
                    </div>
                </div>
            </section>


            <section className='bg-main-light py-5'>
                <div className="container fadeUp">
                    <div className='fs-1 fw-bold'>Pre <span className='text-main'>Press</span>.</div>
                    <div>
                        <img className='my-3' src="public/images/image-790879.png" width={'100%'} alt="" />
                    </div>
                    <p className='lh-lg'>Prepress is the term used in Printing and Publishing industries
                        for the processes and procedures that occur between the creation
                        of a print layout and the final printing. This procedure includes
                        the manufacture of a printing plate, image carrier, ready for mounting
                        on a printing press, as well as the adjustment of images, photographcs
                        and texts or the creation of a high quality print file in Today's prepress,
                        either a PDF file or native application files are created from programs such as
                        Adobe Creative Suites etc.
                    </p>

                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li>GMG Color Management Software</li>
                                <li>Graphic Designing Systems with Scanners and Color Printers</li>
                                <li>Epson Stylus Pro 9900 Spectro Proofer</li>
                                <li>Konica C 1100</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li>CTP CRON and Glunz & Jensen Processor</li>
                                <li>X-Rite I C Plate 2</li>
                                <li>X-Rite Exact</li>
                                <li>Gloss Meter﻿.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


            <section className='bg-main-light'>
                <div className='bg-white py-5 rounded-5'>
                    <div className="container fadeUp">
                        <div className='fs-1 fw-bold text-main'>Press.</div>
                        <div>
                            <img className='my-3' src="public/images/image-0986.png" width={'100%'} alt="" />
                        </div>
                        <p className='lh-lg'>Deluxe Packages Printing Services Department with State-of-the-art technologies offers a
                            complete range of document production services in both offset and digital environments. Whether you have a
                            simple one-color job or a complex seven-color piece with aqueous coating, you will receive the same high level
                            of service, qualit, convenience, sensitivity to deadlines, and competitive pricing.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>Heidelberg Speed Master 72 V four color</li>
                                    <li>Heidelberg Speed Master 102 four color</li>
                                    <li>Heidelberg CD 102 five color with Aqueous Coater with X-Rite Intellitrax</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>Heidelberg Speed Master 102 six color with Aqueous Coater with X-Rite Intellitrax</li>
                                    <li>KBA Rapida 106 - 7+LTTL (VU / Conv Press) with X-Rite Intellitrax and Rutherford</li>
                                    <li>Heidelberg Offline UV (Flood Coating)</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-main-light py-5'>
                <div className="container fadeUp">
                    <div className='fs-1 fw-bold'>Post <span className='text-main'>Press</span>.</div>
                    <div>
                        <img className='my-3' src="public/images/image-7865.png" width={'100%'} alt="" />
                    </div>
                    <p className='lh-lg'>Our full-service bindery can provide saddle stitching and other popular binding methods
                        and folding to suit your needs. Since its creation, Printing Services has adapted to many changes in technology
                        and customer demand. We strive to continue to grow and advance as new technologies become available and as our
                        customers demand new services. Please feel free to contact us if you have any questions before submitting a job.
                    </p>

                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li>BOPP Film Lamination Machines</li>
                                <li>Sheeter (Paper / Board Reels to Sheet Cutter)</li>
                                <li>Polar 76 02 Polar 115</li>
                                <li>Bobst 1080 E Automatic Die Cutter</li>
                                <li>Bobst SP 102 Evouline Automatic Die Cutter (Brand New installed in 2010)</li>
                                <li>Bobst Nova Cut 106 Automatic Die Cutter (Brand New installed in 2015)</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li>Kirama 25 x 36 Hand Feed Die Cutting with Hot Foiling Stamping</li>
                                <li>Chinese Folding Gluing for Small Boxes</li>
                                <li>Bobst PCR 444 Straight Folding and Gluing</li>
                                <li>Bobst PCR 888 Crush Lock Bottom folding and gluing Machine</li>
                                <li>Bobst Ambition A2 with Crush Lock Bottom (Brand New installed in 2015)</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Processing