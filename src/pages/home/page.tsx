import { Button, Grid, Icon, IconButton } from "@mui/material";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import './home.css'
import React from "react";
import { Colors } from "../../utilities/styles";
import StackedCards from "../../components/stackedCard";
import { Footer } from "../../components/footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const skills = [
    { icon: '/images/js.png', label: 'Javascript' },
    { icon: '/images/ts.png', label: 'Typescript' },
    { icon: '/images/htmlcss.png', label: 'HTML & CSS' },
    { icon: '/images/tailwind.png', label: 'Tailwind' },
    { icon: '/images/react.png', label: 'React.js' },
    { icon: '/images/next.png', label: 'Next.js' },
    { icon: '/images/reactnative.png', label: 'React Native' },
    { icon: '/images/expo.png', label: 'Expo' },
]

const HomePage = () => {
    React.useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        });

        gsap.utils.toArray('.box').forEach((box: any) => {
            gsap.fromTo(
                box,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                        invalidateOnRefresh: true,
                    },
                }
            );
        })

        return () => {
            smoother.kill();
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className="w-full flex flex-col gap-48 max-sm:gap-20 px-20 max-sm:px-5" id="smooth-content">
            {/* <div className="w-full h-screen flex items-center justify-between px-20 relative">
                <div className="flex-2">
                    <p className="text-white text-8xl font-bold">FIRMAN</p>
                    <p className="text-white text-8xl font-bold pl-10">MAULANA</p>
                    <div className="flex flex-row text-white items-center mt-10">
                        <Button
                            onClick={() => window.open('/CV_FirmanMaulana_Frontend.pdf', '_blank')}
                            color={'inherit'}
                            variant="outlined"
                            sx={{ padding: '15px 25px', borderRadius: 50, marginRight: 3 }}
                            startIcon={<Icon fontSize="small" sx={{ color: '#fff' }}>download</Icon>}
                        >Download CV</Button>
                        <IconButton onClick={() => window.open('https://github.com/MannDev10', '_blank')}>
                            <img src="/images/github.png" alt="github" className="invert w-10 h-10 rounded-full object-contain" />
                        </IconButton>
                        <IconButton onClick={() => window.open('https://www.linkedin.com/in/firman-maul/', '_blank')}>
                            <img src="/images/linkedin.png" alt="linkedin" className="invert w-10 h-10 rounded-full object-contain" />
                        </IconButton>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full h-auto aspect-square rounded-full p-5" style={{border: '0.5px solid #fff'}} src="/images/photo.JPG" alt="picture" />
                </div>
                <div className="arrows"></div>
            </div> */}
            <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between relative">
                <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
                    <p className="text-white text-5xl sm:text-6xl md:text-8xl font-bold">FIRMAN</p>
                    <p className="text-white text-5xl sm:text-6xl md:text-8xl font-bold md:pl-10">MAULANA</p>
                    <div className="flex flex-col sm:flex-row text-white items-center justify-center md:justify-start mt-8 gap-4">
                        <Button
                            onClick={() => window.open('/CV_FirmanMaulana_Frontend.pdf', '_blank')}
                            color={'inherit'}
                            variant="outlined"
                            sx={{
                                padding: '12px 20px',
                                borderRadius: 50,
                                marginRight: { md: 3, xs: 0 },
                            }}
                            startIcon={<Icon fontSize="small" sx={{ color: '#fff' }}>download</Icon>}
                        >
                            Download CV
                        </Button>
                        <div className="flex flex-row gap-4">
                            <IconButton onClick={() => window.open('https://github.com/MannDev10', '_blank')}>
                                <img
                                    src="/images/github.png"
                                    alt="github"
                                    className="invert w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain"
                                />
                            </IconButton>
                            <IconButton onClick={() => window.open('https://www.linkedin.com/in/firman-maul/', '_blank')}>
                                <img
                                    src="/images/linkedin.png"
                                    alt="linkedin"
                                    className="invert w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain"
                                />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        className="w-[70%] max-sm:w-[60%] h-auto aspect-square rounded-full p-3 md:p-5 object-cover"
                        style={{ border: '0.5px solid #fff' }}
                        src="/images/photo.JPG"
                        // src="https://i.ebayimg.com/images/g/--sAAOSwUZBm-tlT/s-l400.jpg"
                        alt="picture"
                    />
                </div>
                <div className="arrows hidden md:block"></div>
            </div>
            <div className="w-full min-h-screen flex items-center flex-col gap-20 justify-center">
                <p className="box text-white text-8xl max-sm:text-5xl font-black w-full whitespace-pre-line text-left inline-block">
                    WEB{'\n'}<span className="pl-10 max-sm:pl-0">DEVELOPER</span>
                </p>
                <p className="box text-white text-8xl max-sm:text-5xl font-black w-full whitespace-pre-line text-right inline-block">
                    <span className="pr-15 max-sm:pr-0">MOBILE APPS</span>{'\n'}DEVELOPER
                </p>
            </div>
            <div className="w-full">
                <div className="flex w-full items-center justify-center gap-10 max-sm:gap-5 mb-15">
                    <div className="flex flex-1 w-full h-0.5 bg-[#d7d7d7AB]"></div>
                    <p className="text-white text-7xl max-sm:text-4xl font-bold">SKILLS</p>
                    <div className="flex flex-1 w-full h-0.5 bg-[#d7d7d7AB]"></div>
                </div>
                <Grid container spacing={{ md: 5, sm: 3, xs: 3 }}>
                    {
                        skills.map((item, index) => (
                            <Grid size={{ md: 6, sm: 12, xs: 12 }} key={index}>
                                <div
                                    className="w-full rounded-2xl flex flex-row items-center gap-5 p-5 grayscale-100 transition-all duration-200 hover:filter-none cursor-pointer hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.6)] "
                                    style={{ border: '1px solid #ffffff80', backgroundColor: Colors.BACKGROUND }}
                                >
                                    <img src={item.icon} alt={item.label} className="w-[25%] max-sm:w-[20%] h-auto aspect-square object-contain" />
                                    <p className="text-white text-3xl max-sm:text-2xl font-bold w-70%">{item.label}</p>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
            <div className="w-full">
                <div className="w-full flex items-center gap-10 max-sm:gap-5 mb-15">
                    <p className="text-white text-7xl max-sm:text-4xl font-bold">PORTFOLIO</p>
                    <div className="flex flex-1 w-full h-0.5 bg-[#d7d7d7AB]"></div>
                </div>
                <StackedCards />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;