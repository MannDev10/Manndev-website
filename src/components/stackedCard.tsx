import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Colors } from "../utilities/styles";
import { Tooltip } from "@mui/material";
import { isMobile } from 'react-device-detect'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const projectData = [
    {
        title: 'East Bekasi Imagery',
        subtitle: 'Geospatial Visualization of East Bekasi City',
        date: '2026',
        image: '/images/projects/maxar.png',
        tech: [
            { label: 'React.js', icon: '/images/react.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
            { label: 'Cesium', icon: '/images/cesium.png' },
        ]
    },
    {
        title: 'DRX SPORTNET',
        subtitle: 'Live Score and Sports News App',
        date: '2025',
        image: '/images/projects/drx.png',
        tech: [
            { label: 'React Native', icon: '/images/reactnative.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
            { label: 'Socket.io', icon: '/images/socket.png' },
        ]
    },
    {
        title: 'AngeloSkin',
        subtitle: 'E-commerce Web',
        date: '2024',
        image: '/images/projects/angeloskin.png',
        tech: [
            { label: 'Next.js', icon: '/images/next.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
            { label: 'Tailwind', icon: '/images/tailwind.png' },
        ]
    },
    {
        title: 'KSA Gamma Elektrik',
        subtitle: 'Warehouse Management',
        date: '2023',
        image: '/images/projects/ksa.png',
        tech: [
            { label: 'React.js', icon: '/images/react.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
            { label: 'HTML & CSS', icon: '/images/htmlcss.png' },
        ]
    },
    {
        title: 'HydroponIOT',
        subtitle: 'Realtime Hydroponic Monitoring',
        date: '2022',
        image: '/images/projects/hydroponic.png',
        tech: [
            { label: 'React.js', icon: '/images/react.png' },
            { label: 'Javascript', icon: '/images/js.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
        ]
    },
    {
        title: 'HOMI Smarthome',
        subtitle: 'Remotely Controlled Smart Devices',
        date: '2021',
        image: '/images/projects/smarthome.png',
        tech: [
            { label: 'React Native', icon: '/images/reactnative.png' },
            { label: 'Expo', icon: '/images/expo.png' },
            { label: 'Typescript', icon: '/images/ts.png' },
        ]
    },
]

export default function StackedCards() {
    const contentRef = React.useRef(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray(".card")

        cards.forEach((card: any, i: any) => {
            gsap.to(card, {
                scale: 0.8 + 0.2 * (i / (cards.length - 1)),
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: "top " + (15 + 25 * 1),
                    end: "bottom bottom",
                    endTrigger: contentRef.current,
                    scrub: true,
                    pin: card,
                    pinSpacing: false,
                    invalidateOnRefresh: true
                }
            })
        })
    }, { scope: contentRef })

    return (
        <div className="wrapper w-full" ref={contentRef}>
            {
                projectData.map((item, index) => (
                    <div
                        className="card w-full flex items-center rounded-2xl mb-10"
                        key={index}
                        style={{
                            border: '1px solid #d7d7d7AB',
                            flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
                            backgroundColor: Colors.BACKGROUND
                        }}
                    >
                        <div
                            className="card-content w-[50%] max-sm:w-full p-10 max-sm:p-5 flex flex-col"
                            style={{
                                textAlign: isMobile ? 'left' : index % 2 === 0 ? 'left' : 'right',
                                alignItems: isMobile ? 'flex-start' : index % 2 === 0 ? 'flex-start' : 'flex-end'
                            }}
                        >
                            <p className="text-white font-bold text-3xl max-sm:text-2xl">{item.title}</p>
                            <p className="text-[#ffffffAA] font-bold text-2xl max-sm:text-xl">{item.subtitle}</p>
                            <p className="text-white text-2xl max-sm:text-xl">{item.date}</p>
                            <div className="flex flex-row items-center gap-3 mt-5">
                                {
                                    item.tech.map((value, idx) => (
                                        <Tooltip title={value.label} key={idx} arrow>
                                            <img
                                                src={value.icon}
                                                alt={value.label}
                                                className="p-1 rounded-full w-10 h-10 object-contain cursor-pointer"
                                                style={{ border: '0.5px solid #fff' }}
                                            />
                                        </Tooltip>
                                    ))
                                }
                            </div>
                        </div>
                        <div
                            className="img-wrapper w-[50%] max-sm:w-full h-[90vh] max-sm:h-auto"
                            style={{
                                borderLeft: isMobile ? 'none' : index % 2 === 0 ? '1px solid #d7d7d7AB' : 'none',
                                borderRight: isMobile ? 'none' : index % 2 === 0 ? 'none' : '1px solid #d7d7d7AB'
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.date}
                                className="w-full h-full object-cover object-top max-sm:aspect-square"
                                style={{ borderRadius: isMobile ? '0 0 16px 16px' : index % 2 === 0 ? '0 16px 16px 0' : '16px 0 0 16px' }}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
