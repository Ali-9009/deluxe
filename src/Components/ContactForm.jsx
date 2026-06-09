import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_26gy2sl', 'template_vqdo979', form.current, { publicKey: 'xmPdhc3XhfH-TuVWq', })
            .then(
                () => {
                    alert('SUCCESS!');

                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <section className='py-5 bg-white rounded-5'>
                <div className="container">
                    <div className='shadow p-4 rounded-4 col-lg-7 d-block mx-auto'>
                        <div className='fw-bold text-center fs-5'>Your inquiry will be responded promptly</div>
                        <div className='text-center fw-semibold text-danger'>Your inquiry will be responded promptly</div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">First name*</label>
                                        <input type="text" name='from_name' className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Last name*</label>
                                        <input type="text" name='form_last_name' className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Email*</label>
                                        <input type="email" name='from_email' className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <label className='my-3 fw-semibold' htmlFor="">Phone number*</label>
                                        <input type="text" name='from_phone' className='form-control py-2 bg-light border-0' />
                                    </div>
                                </div>
                            </div>

                            <textarea name="message" id="" rows={'4'} className='form-control py-2 bg-light border-0 my-3'></textarea>

                            <button type='submit' value={'Send'} className='btn bg-black fw-semibold w-100 text-white py-2'>Send</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactForm