import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



const GSAP = () => {

    useGSAP(() => {

        gsap.utils.toArray(".fadeUp").forEach((element) => {
            gsap.from(element, {
                y: 50,
                delay: 0.1,
                duration: 1.6,
                opacity: 0,
                id: "example",
                stagger: 10,
                // delay: 0.2,
                scrollTrigger: {
                    trigger: element,
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

        </>
    )
}

export default GSAP