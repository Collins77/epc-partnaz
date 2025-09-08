import React from 'react'
import construct from '../../assets/construct.jpg'
import { Award, Building, CircleCheckBig, Clock4, Dot, Shield, Target, Users } from 'lucide-react'

const Consultancy = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${construct})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            EPC Contractors Consultancy
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm">Comprehensive project advisory services from conception to commissioning. We guide EPC contractors and project owners through every phase of complex project delivery.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 items-start w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>250+</h1>
                            <p className='text-sm text-gray-300'>EPC Projects</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>18+</h1>
                            <p className='text-sm text-gray-300'>Years Experience</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>95%</h1>
                            <p className='text-sm text-gray-300'>Success Rate</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-3 gap-2 px-[40px] py-[60px] bg-white'>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <Building />
                    </div>
                    <h1 className='text-3xl font-bold'>18+ <span className='text-yellow-500 text-base'>years</span></h1>
                    <p className='text-gray-700'>Multi-Sector Experience</p>
                    <p className='text-sm text-gray-500 text-center'>Proven track record across energy, infrastructure, and industrial sectors</p>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <Award />
                    </div>
                    <h1 className='text-3xl font-bold'>95% <span className='text-yellow-500 text-base'>success</span></h1>
                    <p className='text-gray-700'>Project Success Rate</p>
                    <p className='text-sm text-gray-500 text-center'>On-time and on-budget project delivery with exceptional quality</p>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <Clock4 />
                    </div>
                    <h1 className='text-3xl font-bold'>25% <span className='text-yellow-500 text-base'>average</span></h1>
                    <p className='text-gray-700'>Time Savings</p>
                    <p className='text-sm text-gray-500 text-center'>Reduced project timelines through optimized planning and execution</p>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-[#f9fafc]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Complete Project Lifecycle Support</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Expert guidance through every phase of EPC project delivery, ensuring optimal outcomes and minimal risk.</p>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center w-full justify-center'>
                            <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <h1 className='font-bold text-lg'>1</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold'>Planning & Design</h1>
                            <p className='text-sm text-yellow-500'>15-25% of timeline</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Conceptual design, engineering, and detailed planning</p>
                        <div>
                            <h1 className='text-sm font-bold'>Key Deliverables:</h1>
                            <ul>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Feasibility studies
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Engineering design
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Permit applications
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Project timeline
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center w-full justify-center'>
                            <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <h1 className='font-bold text-lg'>2</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold'>Procurement</h1>
                            <p className='text-sm text-yellow-500'>10-20% of timeline</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Vendor selection, contract negotiation, and equipment procurement</p>
                        <div>
                            <h1 className='text-sm font-bold'>Key Deliverables:</h1>
                            <ul>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Vendor evaluation
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Contract terms
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Equipment specs
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Logistics plan
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center w-full justify-center'>
                            <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <h1 className='font-bold text-lg'>3</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold'>Construction</h1>
                            <p className='text-sm text-yellow-500'>50-70% of timeline</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Site preparation, construction execution, and quality control</p>
                        <div>
                            <h1 className='text-sm font-bold'>Key Deliverables:</h1>
                            <ul>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Site preparation
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Construction execution
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Quality control
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Progress reporting
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center w-full justify-center'>
                            <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <h1 className='font-bold text-lg'>4</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold'>Commissioning</h1>
                            <p className='text-sm text-yellow-500'>5-15% of timeline</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Testing, commissioning, and handover to operations</p>
                        <div>
                            <h1 className='text-sm font-bold'>Key Deliverables:</h1>
                            <ul>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    System testing
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Performance validation
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Documentation
                                </li>
                                <li className='text-[12px] text-gray-500 flex items-center'>
                                    <Dot color='gold' size={30} />
                                    Training delivery
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-white'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Complete Project Lifecycle Support</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Expert guidance through every phase of EPC project delivery, ensuring optimal outcomes and minimal risk.</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                    <Target />
                                </div>
                                <h1 className='font-bold'>Project Advisory</h1>
                            </div>
                            <p className='text-[12px] px-2 py-1 rounded-xl text-yellow-500 bg-yellow-50'>Pre-construction</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Strategic planning and feasibility analysis from project conception to completion.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Feasibility studies</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Risk assessment</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Technology selection</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Commercial optimization</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                    <Users />
                                </div>
                                <h1 className='font-bold'>Contractor Support</h1>
                            </div>
                            <p className='text-[12px] px-2 py-1 rounded-xl text-yellow-500 bg-yellow-50'>Construction</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Technical guidance and performance optimization throughout project execution.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Technical support</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Quality assurance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Performance monitoring</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Problem resolution</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                    <Shield />
                                </div>
                                <h1 className='font-bold'>Compliance Guidance</h1>
                            </div>
                            <p className='text-[12px] px-2 py-1 rounded-xl text-yellow-500 bg-yellow-50'>All Phases</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Ensuring adherence to international standards and regulatory requirements.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Regulatory compliance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Safety standards</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Environmental compliance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Quality standards</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                    <CircleCheckBig />
                                </div>
                                <h1 className='font-bold'>Risk Management</h1>
                            </div>
                            <p className='text-[12px] px-2 py-1 rounded-xl text-yellow-500 bg-yellow-50'>All Phases</p>
                        </div>
                        <p className='text-gray-500 text-sm'>Comprehensive risk assessment and mitigation strategies for project success.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Risk identification</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Mitigation strategies</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Insurance guidance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Contingency planning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black flex gap-4'>
                <div className='w-[50%] flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold text-white'>Why Choose Our EPC Consultancy?</h1>
                    <p className='text-gray-300 '>With over 18 years of combined EPC experience and a proven track record across multiple sectors, we bring unmatched expertise to every project.</p>
                    <div className='flex flex-col gap-3 text-white'>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Deep Industry Knowledge</h1>
                                <p className='text-gray-300 text-sm'>Extensive experience across energy, infrastructure, and industrial sectors</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Global Network</h1>
                                <p className='text-gray-300 text-sm'>Certified contractors and suppliers across major markets</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Risk Mitigation</h1>
                                <p className='text-gray-300 text-sm'>Comprehensive risk management and contingency planning</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Technology Integration</h1>
                                <p className='text-gray-300 text-sm'>Latest technologies and best practices for optimal performance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex gap-4'>
                    <div className='flex flex-col gap-4 w-[50%]'>
                        <div className='flex flex-col gap-2 bg-[#2d1000] rounded-md text-white p-6'>
                            <h1 className='font-bold'>Project Value</h1>
                            <h1 className='font-bold text-2xl text-amber-500'>$15B+</h1>
                            <p className='text-gray-300 text-sm'>Successfully delivered</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#002712] rounded-md text-white p-6'>
                            <h1 className='font-bold'>Time Savings</h1>
                            <h1 className='font-bold text-2xl text-green-500'>25%</h1>
                            <p className='text-gray-300 text-sm'>Average reduction</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-[50%] mt-[40px]'>
                        <div className='flex flex-col gap-2 bg-[#071633] rounded-md text-white p-6'>
                            <h1 className='font-bold'>Quality Score</h1>
                            <h1 className='font-bold text-2xl text-blue-500'>98%</h1>
                            <p className='text-gray-300 text-sm'>Client satisfaction</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#231234] rounded-md text-white p-6'>
                            <h1 className='font-bold'>Global Reach</h1>
                            <h1 className='font-bold text-2xl text-purple-500'>35+</h1>
                            <p className='text-gray-300 text-sm'>Countries served</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-3xl font-bold'>Ready to Optimize Your EPC Project?</h1>
                <p className='text-gray-700 w-[60%] text-center'>Partner with our experienced EPC consultancy team to ensure project success from conception to commissioning.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Get EPC Consultancy Support</button>
            </div>
            <div className='px-[40px] py-[60px] bg-black border-b border-gray-800 flex items-center justify-between gap-6'>
                <div className='w-[50%] flex flex-col gap-2'>
                    <h1 className='text-3xl text-white font-bold'>Stay Updated with Industry Insights</h1>
                    <p className='text-gray-500 text-sm'>Get the latest updates on EPC projects, funding opportunities, and industry trends directly in your inbox. Join our network of industry professionals.</p>
                </div>
                <div className='w-[50%]'>
                    <form action="" className='flex items-center gap-2 w-[85%]'>
                        <input type="email" className='border border-gray-600 text-gray-600 rounded-md bg-[#1e293b] p-2 w-full' placeholder='Enter your email address' />
                        <button className='bg-yellow-500 px-3 py-2 rounded-md text-sm'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Consultancy