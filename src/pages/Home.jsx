import React from 'react'
import main from "../assets/main.jpg"
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BanknoteArrowUp, Building2, Droplets, Factory, Fuel, Scale, Settings, TrendingUp, Weight, Zap } from 'lucide-react';
import adv from "../assets/advocacy.jpg"
import inv from "../assets/invest.jpg"
import con from "../assets/contract.jpg"
import energy from "../assets/industry.jpg"
import oil from "../assets/oil.jpg"
import bridge from "../assets/bridge.jpg"
import plant from "../assets/inda.jpg"
import water from "../assets/water.jpg"
import special from "../assets/special.jpg"

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero */}
            <div
                className='w-full bg-white sm:h-[80vh] h-fit relative'
                style={{
                    backgroundImage: `url(${main})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* background overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black/80 z-10'></div>

                {/* hero content */}
                <div className='relative z-20 w-full h-full sm:flex sm:flex-row sm:gap-0 gap-6 flex flex-col justify-between px-[40px] sm:py-0 py-[40px]'>
                    <div className='flex flex-col justify-center text-white sm:w-[50%] w-full gap-6'>
                        <div>
                            <p className="text-[12px] bg-yellow-100/30 border text-yellow-500 border-yellow-500 w-fit px-2 py-0.5 rounded-lg">
                                Strategic Excellence Since 2020
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="sm:text-4xl text-2xl font-bold">
                                Empowering Growth Through{" "}
                                <span className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                                    Advocacy, Funding & EPC Expertise
                                </span>
                            </h1>
                            <p className="text-gray-400 sm:text-base text-sm">Advanced security solutions tailored for your business. From CCTV surveillance to biometric access control, we provide comprehensive protection you can trust.</p>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <div>
                                <h1 className='font-bold sm:text-2xl text-xl text-[#FFD700]'>50+</h1>
                                <p className='text-sm text-gray-400'>Projects Delivered</p>
                            </div>
                            <div>
                                <h1 className='font-bold sm:text-2xl text-xl text-[#FFD700]'>$2B+</h1>
                                <p className='text-sm text-gray-400'>Funding Secured</p>
                            </div>
                            <div>
                                <h1 className='font-bold sm:text-2xl text-xl text-[#FFD700]'>15+</h1>
                                <p className='text-sm text-gray-400'>Countries Served</p>
                            </div>
                        </div>
                        <div className="sm:flex sm:flex-row sm:items-center sm:gap-4 gap-2 flex flex-col">
                            <button onClick={() => navigate("/services")} className="bg-yellow-600 text-white cursor-pointer px-6 py-2 rounded-md text-sm hover:bg-yellow-800 transition-all duration-300">Explore Services</button>
                            <button onClick={() => navigate("/projects")} className="bg-white text-yellow-500 text-sm border border-yellow-400 px-6 py-2 rounded-md cursor-pointer hover:bg-yellow-500 hover:text-white transition-all duration-300">View Projects</button>
                        </div>
                    </div>
                    <div className='sm:w-[50%] w-full flex flex-col relative px-[20px] justify-center gap-6'>
                        <div className='w-full border border-white/40 rounded-md bg-white/20 flex gap-6 text-white p-4 hover:bg-white/30'>
                            <div>
                                <Scale size={30} color='gold' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold'>Advocacy & Representation</h1>
                                <p className='text-gray-300 text-sm'>Expert guidance through complex regulatory landscapes and stakeholder negotiations.</p>
                            </div>
                        </div>
                        <div className='w-full border border-white/40 rounded-md bg-white/20 flex gap-6 text-white p-4 hover:bg-white/30'>
                            <div>
                                <BanknoteArrowUp size={30} color='gold' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold'>Investment Funding</h1>
                                <p className='text-gray-300 text-sm'>Unlock capital opportunities with our proven funding strategies and partnerships.</p>
                            </div>
                        </div>
                        <div className='w-full border border-white/40 rounded-md bg-white/20 flex gap-6 text-white p-4 hover:bg-white/30'>
                            <div>
                                <Factory size={30} color='gold' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold'>EPC Consultancy</h1>
                                <p className='text-gray-300 text-sm'>Comprehensive project advisory from conception to commissioning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[40px] bg-white'>
                <div className='flex flex-col w-full gap-1 items-center justify-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Strategic Solutions for Complex Projects</h1>
                    <p className='sm:text-sm text-[12px] text-center text-gray-500 sm:w-[60%]'>EPC Partnaz delivers comprehensive consultancy services that bridge the gap between vision and execution. Our three core pillars ensure project success from start to finish.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col gap-6 mb-[40px]'>
                    <div className='flex flex-col shadow-md rounded-md bg-white h-[500px]'>
                        <div className='relative w-full h-[50%]'>
                            <img src={adv} alt="" className='w-full rounded-md h-full object-cover' />
                            <div className='absolute top-4 left-4 bg-yellow-500 flex items-center justify-center w-[40px] h-[40px] rounded-md'>
                                <Scale color='black' size={20} />
                            </div>
                        </div>
                        <div className='p-3 flex flex-col gap-2'>
                            <h1 className='font-bold'>Advocacy & Representation</h1>
                            <p className='text-sm text-gray-500'>Navigate complex regulatory landscapes with expert legal and strategic guidance. Our advocacy services ensure your interests are protected throughout the project lifecycle.</p>
                            <div className='grid grid-cols-2 gap-3'>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Tender & Bid Support</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Contract Review & Negotiation</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Compliance & Governance</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Dispute Resolution</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <a href="/services/advocacy" className='flex items-center gap-1 text-sm text-yellow-500 underline justify-end'>
                                Learn More
                                <ArrowRight color='gold' size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col shadow-md rounded-md bg-white h-[500px]'>
                        <div className='relative w-full h-[50%]'>
                            <img src={inv} alt="" className='w-full rounded-md h-full object-cover' />
                            <div className='absolute top-4 left-4 bg-yellow-500 flex items-center justify-center w-[40px] h-[40px] rounded-md'>
                                <TrendingUp color='black' size={20} />
                            </div>
                        </div>
                        <div className='p-3 flex flex-col gap-2'>
                            <h1 className='font-bold'>Investment Funding</h1>
                            <p className='text-sm text-gray-500'>Unlock capital opportunities through our extensive network of investors, financial institutions, funding programs. We structure deals that maximize your project potential.</p>
                            <div className='grid grid-cols-2 gap-3'>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Funding Strategy Development</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Investor Relations</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Financial Structuring</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Grant Applications</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <a href="/services/investment" className='flex items-center gap-1 text-sm text-yellow-500 underline justify-end'>
                                Learn More
                                <ArrowRight color='gold' size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col shadow-md rounded-md bg-white h-[500px]'>
                        <div className='relative w-full h-[50%]'>
                            <img src={con} alt="" className='w-full rounded-md h-full object-cover' />
                            <div className='absolute top-4 left-4 bg-yellow-500 flex items-center justify-center w-[40px] h-[40px] rounded-md'>
                                <Factory color='black' size={20} />
                            </div>
                        </div>
                        <div className='p-3 flex flex-col gap-2'>
                            <h1 className='font-bold'>EPC Contractors Consultancy</h1>
                            <p className='text-sm text-gray-500'>Comprehensive project advisory services from conception to commissioning. Our EPC expertise ensures successful project delivery across all phases and milestones.</p>
                            <div className='grid grid-cols-2 gap-3'>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Project advisory</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Contractor Support</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Compliance Guidance</p>
                                <p className='p-1 border rounded-md border-yellow-500 text-[10px] text-gray-500'>Risk Management</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <a href="/services/advocacy" className='flex items-center gap-1 text-sm text-yellow-500 underline justify-end'>
                                Learn More
                                <ArrowRight color='gold' size={20} />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='rounded-lg h-[300px] w-full p-6 flex flex-col gap-2 items-center justify-center bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Ready to Transform Your Project</h1>
                    <p className='sm:text-sm text-[12px] text-gray-600 text-center sm:w-[60%]'>Let our experts guide you through every phase of your project. From initial consultation to final delivery, we're your strategic partner for success.</p>
                    <div className="sm:flex sm:flex-row sm:items-center sm:gap-2 gap-2 flex flex-col">
                        <button onClick={() => navigate("/contact")} className="bg-black text-white cursor-pointer px-6 py-2 rounded-md text-sm hover:bg-yellow-800 transition-all duration-300">Start Consultation</button>
                        <button onClick={() => navigate("/projects")} className="bg-white text-yellow-500 text-sm border border-yellow-400 px-6 py-2 rounded-md cursor-pointer hover:bg-yellow-500 hover:text-white transition-all duration-300">View Projects</button>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[40px] bg-black border-b border-gray-800'>
                <div className='flex flex-col w-full gap-1 items-center justify-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl text-white'>Industries We Serve</h1>
                    <p className='sm:text-sm text-[12px] text-center text-gray-500 sm:w-[60%]'>From energy and infrastructure to specialized industrial projects, our expertise spans across critical sectors driving global economic growth.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 gap-6 flex flex-col mb-[60px]'>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={energy} alt="energy" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Zap color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>25+</h1>
                                <p className='text-[12px] text-gray-400'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Energy & Power</h1>
                            <p className='text-gray-400 text-sm'>Renewable energy, power generation, and grid infrastructure projects with cutting-edge technology solutions.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$800M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/energy" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={oil} alt="oil" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Fuel color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>18+</h1>
                                <p className='text-[12px] text-gray-700'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Oil & Gas</h1>
                            <p className='text-gray-400 text-sm'>Upstream, midstream, and downstream operations including refineries, pipelines, and offshore platforms worldwide.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$650M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/oil" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={bridge} alt="" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Building2 color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>12+</h1>
                                <p className='text-[12px] text-gray-800'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Infrastructure</h1>
                            <p className='text-gray-400 text-sm'>Transportation networks, bridges, highways, and urban development projects that connect communities across the world.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$450M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/infrastructure" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={plant} alt="energy" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Factory color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>15+</h1>
                                <p className='text-[12px] text-gray-200'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Industrial Plants</h1>
                            <p className='text-gray-400 text-sm'>Manufacturing facilities, chemical plants, and processing centers with advanced automation systems and setups.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$380M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/plants" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={water} alt="oil" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Droplets color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>8+</h1>
                                <p className='text-[12px] text-gray-300'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Water & Environment</h1>
                            <p className='text-gray-400 text-sm'>Water treatment facilities, environmental remediation, and sustainable development initiatives across the globe.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$220M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/water" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-[#0f172a] h-[350px] rounded-md hover:border hover:border-yellow-500 transition-all duration-300'>
                        <div className='w-full h-[50%] relative rounded-md'>
                            <img src={special} alt="" className='w-full h-full object-cover rounded-md' />
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md absolute flex items-center justify-center top-4 left-4'>
                                <Settings color='black' size={20} />
                            </div>
                            <div className='flex flex-col absolute top-4 right-4 items-center'>
                                <h1 className='text-yellow-500 font-bold'>6+</h1>
                                <p className='text-[12px] text-gray-700'>Projects</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <h1 className='font-bold text-white'>Special Projects</h1>
                            <p className='text-gray-400 text-sm'>Unique and comples projects solving the world's problems, requiring specialized expertise and innovative solutions.</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <h1 className='text-yellow-500 font-bold'>$180M+</h1>
                                    <p className='text-sm text-gray-400'>Project Value</p>
                                </div>
                                <div>
                                    <a href="/sectors/special-projects" className='text-sm text-yellow-500 flex items-center gap-1'>
                                        Explore
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-4 sm:gap-0 flex flex-col gap-6 mb-[40px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-yellow-500 font-bold text-3xl'>84+</h1>
                        <p className='text-gray-500 text-sm'>Global Projects</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-yellow-500 font-bold text-3xl'>15+</h1>
                        <p className='text-gray-500 text-sm'>Countries Saved</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-yellow-500 font-bold text-3xl'>$2.7B+</h1>
                        <p className='text-gray-500 text-sm'>Total Value</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-yellow-500 font-bold text-3xl'>98%</h1>
                        <p className='text-gray-500 text-sm'>Success Rate</p>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <button className='p-2 bg-yellow-500 rounded-md text-sm cursor-pointer hover:bg-yellow-700 hover:text-white transition-all duration-300'>View All Projects</button>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black border-b border-gray-800 sm:flex sm:flex-row sm:items-center sm:justify-between gap-6 flex flex-col'>
                <div className='sm:w-[50%] flex flex-col gap-2'>
                    <h1 className='sm:text-3xl text-xl text-white font-bold'>Stay Updated with Industry Insights</h1>
                    <p className='text-gray-500 sm:text-sm text-[12px]'>Get the latest updates on EPC projects, funding opportunities, and industry trends directly in your inbox. Join our network of industry professionals.</p>
                </div>
                <div className='sm:w-[50%]'>
                    <form action="" className='flex items-center gap-2 w-[85%]'>
                        <input type="email" className='border border-gray-600 text-gray-600 rounded-md bg-[#1e293b] p-2 w-full' placeholder='Enter your email address' />
                        <button className='bg-yellow-500 px-3 py-2 rounded-md text-sm'>Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
