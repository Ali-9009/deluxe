import React from 'react'
import Slider from 'react-slick';
import GSAP from './GSAP';


const AboutUs = () => {
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        // rtl: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const WWD = [
        {
            "img": "images/Group 1000001101.png",
            "title": "packaging",
        },
        {
            "img": "images/Layer_1-1.png",
            "title": "Buntings",
        },
        {
            "img": "images/Layer_1-4.png",
            "title": "Booklet",
        },
        {
            "img": "images/Layer_1-7.png",
            "title": "Brouchers",
        },
        {
            "img": "images/Layer_1-10.png",
            "title": "Calendar",
        },
        {
            "img": "images/Layer_1-12.png",
            "title": "Mobile",
        },
        {
            "img": "images/Layer_1.png",
            "title": "Folders",
        },
        {
            "img": "images/Layer_1-2.png",
            "title": "Leaflet",
        },
        {
            "img": "images/Layer_1-5.png",
            "title": "Posters",
        },
        {
            "img": "images/Layer_1-8.png",
            "title": "Pads",
        },
        {
            "img": "images/Vector.png",
            "title": "CorrugatedCartons",
        },
        {
            "img": "images/Layer_1-13.png",
            "title": "Inlay",
        },
        {
            "img": "images/Layer_1-3.png",
            "title": "Bands",
        },
        {
            "img": "images/Layer_1-6.png",
            "title": "Tags",
        },
        {
            "img": "images/Layer_1-9.png",
            "title": "Magazines",
        },
        {
            "img": "images/Layer_1-11.png",
            "title": "Labels",
        },
    ]


    return (
        <>
            <section className='bg-main-light'>
                <div className='py-5 bg-white rounded-bottom-5'>
                    <div className="container">
                        <div className='py-4 fadeLeft'>
                            <div className='display-4 fw-bold'>Your <span className='text-main'> Packaging Partner</span>.</div>
                            <p className='fs-5'>Crafting packaging excellence, delivering your brand’s success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-main-light rounded-bottom-5'>
                <div className="container">
                    <div className="row gap-lg-0 gap-md-0 gap-4 position-relative" style={{ top: '-60px' }}>
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='shadow p-4 rounded-4 text-center h-100 bg-white'>
                                <img src="images/Layer-0589.png" alt="" />
                                <div className='fs-3 fw-bold my-2'>Mission</div>
                                <div>As a competitive and progressive Printing and Packaging company, we are committed to provide top quality\
                                    services to our local and global customers by ensuring optimization of stakeholders' value through
                                    qualified human capital, superior services and state of the art technology.</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='shadow p-4 rounded-4 text-center h-100 bg-white'>
                                <img src="images/Layer_109.png" alt="" />
                                <div className='fs-3 fw-bold my-2'>Vision</div>
                                <div>Deluxe Packages strives to become the benchmark printing and packaging company in the markets it
                                    serves by maintaining stakeholder value, providing long term progressive careers to its people and adopting
                                    state of the art technology.</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 fadeUp">
                            <div className='shadow p-4 rounded-4 text-center h-100 bg-white'>
                                <img src="images/Layer_10982.png" alt="" />
                                <div className='fs-3 fw-bold my-2'>Values</div>
                                <div>Dependable: We build trust through consistent, high-quality, and timely service.Passionate: Committed to our mission,
                                    clients, company, and the environment.People First: We invest in fostering a diverse, engaged, and competent team.
                                    Loyalty: Faithful to our mission, clients, and people.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-main-light'>
                <div className='bg-white py-5 rounded-bottom-5'>
                    <div className="container fadeUp">
                        <div className="fs-1 fw-bold text-main normal-case">
                            Productivity Progress
                        </div>

                        <div className="fw-medium fs-5 pb-1 normal-case">
                            Deluxe Packages is now one of the leading offset printing presses in Karachi, Pakistan
                        </div>

                        <p className='lh-lg'>Existing Factory is on 1 Acre (4340 Sq. Yards) constructed area 35-40,000 Sq. Yards approx and our Production
                            Facility converts monthly approx. 300 Tons of Paper and Boards and our annual turnover is approx USD 5 Million.
                            Future expansion for which Deluxe Packages have recently acquired approx 4 Acre of Land (19,360 Sq. Yards).
                            With the efforts of our management and skilled team Deluxe Packages is rapidly increasing it's production capacity
                            and we will always ensure high quality services and products for our valued customers.
                        </p>
                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div className='bg-main-light py-5 rounded-bottom-5'>
                    <div className="container fadeUp">
                        <div className='fs-1 fw-bold text-main'>Values</div>
                        <div className='fs-5 fw-medium'>"WE DO NOT SELL INK ON PAPER , WELL SELL WAYS TO COMMUNICATE"</div>


                        <div className="accordion my-4 shadow" id="accordionExample">
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button border-bottom fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Passionate
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        We offer Endolift treatments designed to address a variety of cosmetic concerns,
                                        including skin tightening, facial contouring, localized fat reduction, and
                                        overall skin rejuvenation.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed border-bottom fw-semibold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Dependable
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed border-bottom fw-semibold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                        People First
                                    </button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed border-bottom fw-semibold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                        Loyalty
                                    </button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the collapse plugin adds the appropriate classes that we use to
                                        style each element.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-main-light'>
                <div className='bg-white rounded-bottom-5 py-5'>
                    <div className="container">
                        <div className='fs-1 fw-bold'>Our Major <span className='text-main'>Clients</span></div>
                        <p>The credibility of our company is evident from the fact that we were able to obtain
                            the confidence of reputable companies. Due to its 'quality-excellence' reputation,
                            Deluxe Packages Private Limited enjoys the confidence of general public, local and
                            foreign markets.
                        </p>
                    </div>

                    <div className="container-fluid">
                        <div className='slider-container'>
                            <Slider {...settings}>
                                <img src="images/medicam.png" alt="" />
                                <img src="images/atco.png" alt="" />
                                <img src="images/bake-parlor.png" alt="" />
                                <img src="images/dashi.png" alt="" />
                                <img src="images/gala.png" alt="" />
                                <img src="images/hilal.png" alt="" />
                                <img src="images/kingtox.png" alt="" />
                                <img src="images/mano-salwa.png" alt="" />
                                <img src="images/medicam.png" alt="" />
                                <img src="images/mehran.png" alt="" />
                                <img src="images/pearl.png" alt="" />

                                <img src="images/pie-in-the-sky.png" alt="" />
                                <img src="images/PK.png" alt="" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </section >

            <section className='bg-main-light py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 fadeLeft">
                            <div className='position-sticky top-12 py-5'>
                                <div className='display-3 fw-bold'>Our Team <span className='text-main'>.</span></div>
                                <div className='fw-medium fs-3'>"Our team focuses on delivering <br />
                                    innovative and impactful <br />
                                    packaging design solutions.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div>
                                <div>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/muscles-posing-o-5HR5KZN.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/young-businesswoman-in-glasses-and-white-turtlenec-4SEPDJP.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/guy-wearing-white-t-WEYM2ZW.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/photo-of-handsome-man-has-confident-serious-expres-NYBB4EY.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/young-businesswoman-in-glasses-and-white-turtlenec-4SEPDJP.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <div className='text-center d-inline-block fadeUp'>
                                        <img className='rounded-circle' src="https://templatekit.jegtheme.com/wrapmax/wp-content/uploads/sites/393/2023/06/guy-wearing-white-t-WEYM2ZW.jpg" width={'200vw'} alt="" />
                                        <div className=''><img src="images/Ellipse 5.png" width={'20'} alt="" /> James Miller</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-main-light'>
                <div className='py-5 rounded-5 bg-white'>
                    <div className="container">
                        <div className='fadeLeft'>
                            <div className='display-5 fw-bold text-center'>What we do?</div>
                            <div className='text-center fw-semibold'>Deluxe Packages is offering following services</div>
                        </div>
                        <div className="row justify-content-center my-4">
                            {WWD.map(items => {
                                return (
                                    <div className="col-lg-2 col-md-3 col-6 my-2 fadeUp">
                                        <div className='d-flex flex-column gap-3 align-items-center rounded-2 shadow-sm bg-main-light text-center p-3 py-4 h-100'>
                                            <img src={items.img} alt="" width={'50'} height={'50'} />
                                            <div className='fw-bold'>{items.title}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-main-light py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div>
                                <div className='fs-1 fw-bold text-main'>PACKAGING INNOVATIONS</div>

                                <div className='lh-lg fs-5'>Luxury Packaging and Conventional products packaging is meant
                                    to communicate a purpose, what your brand stands for and what
                                    is means for your customer. How to make your product stand out
                                    among all the others on the shelves? What are the trends, issues
                                    and opportunities in packaging? That's where we come in, Deluxe
                                    Packages Private Limited.
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-5 fadeUp">
                            <div>
                                <img src="images/image 26.png" width={'100%'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <GSAP/>
        </>
    )
}

export default AboutUs