import { Icon } from "@mui/material"

export const Footer = () => {
    return (
        <div className="w-full flex items-center flex-col gap-15 h-screen justify-center">
            <p className="text-white text-6xl max-sm:text-3xl text-center w-[70%] max-sm:w-full">Let's connect and think about something amazing!</p>
            <div className="flex flex-row items-center justify-between w-[70%] max-sm:w-full gap-5 max-sm:gap-0 max-sm:flex-wrap">
                <button
                    onClick={() => {
                        window.open(`mailto:firman@example.com?subject=${encodeURIComponent(
                            "Collaboration Inquiry from Website"
                        )}&body=${encodeURIComponent(
                            "Hi Firman,\n\nI found your website and I’m interested in discussing a potential project. Could you please share more details?\n\nBest regards,\n[Your Name]"
                        )}`, '_blank')
                    }}
                    className="py-5 max-sm:py-3 mt-3 w-[25%] max-sm:w-[48%] justify-center rounded-full flex gap-3 items-center text-white hover:text-[#111] bg-[#111] hover:bg-white"
                    style={{ border: '1px solid #ffffffAA', cursor: 'pointer', userSelect: 'none', transition: 'all 200ms' }}
                >
                    <Icon color={'inherit'} fontSize="medium">mail</Icon>
                    <p className="text-lg font-semibold">Email</p>
                </button>
                <button
                    onClick={() => {
                        window.open(`https://wa.me/6285889625165?text=${encodeURIComponent(
                            "Hi Firman, I came across your portfolio website and I'm interested in discussing potential projects or collaboration opportunities. Are you currently open to new work?"
                        )}`, '_blank')
                    }}
                    className="py-5 max-sm:py-3 mt-3 w-[25%] max-sm:w-[48%] justify-center rounded-full flex gap-3 items-center text-white hover:text-[#111] bg-[#111] hover:bg-white"
                    style={{ border: '1px solid #ffffffAA', cursor: 'pointer', userSelect: 'none', transition: 'all 200ms' }}
                >
                    <Icon color={'inherit'} fontSize="medium">phone</Icon>
                    <p className="text-lg font-semibold">Phone</p>
                </button>
                <button
                    onClick={() => window.open('https://github.com/MannDev10', '_blank')}
                    className="group py-5 max-sm:py-3 mt-3 w-[25%] max-sm:w-[48%] justify-center rounded-full flex gap-3 items-center text-white hover:text-[#111] bg-[#111] hover:bg-white"
                    style={{ border: '1px solid #ffffffAA', cursor: 'pointer', userSelect: 'none', transition: 'all 200ms' }}
                >
                    <img
                        src="/images/github.png"
                        alt="github"
                        className="w-7 h-7 rounded-full object-contain invert group-hover:invert-0"
                    />
                    <p className="text-lg font-semibold">Github</p>
                </button>
                <button
                    onClick={() => window.open('https://www.linkedin.com/in/firman-maul/', '_blank')}
                    className="group py-5 max-sm:py-3 mt-3 w-[25%] max-sm:w-[48%] justify-center rounded-full flex gap-3 items-center text-white hover:text-[#111] bg-[#111] hover:bg-white"
                    style={{ border: '1px solid #ffffffAA', cursor: 'pointer', userSelect: 'none', transition: 'all 200ms' }}
                >
                    <img
                        src="/images/linkedin.png"
                        alt="github"
                        className="w-7 h-7 rounded-full object-contain invert group-hover:invert-0"
                    />
                    <p className="text-lg font-semibold">LinkedIn</p>
                </button>
            </div>
        </div>
    )
}