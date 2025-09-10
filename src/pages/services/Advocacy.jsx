import React from 'react'
import adv from '../../assets/advocate.jpg'
import { Award, CircleCheckBig, FileText, Scale, Shield, Users } from 'lucide-react'

const Advocacy = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${adv})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 sm:items-start items-center justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Advocacy & Representation
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm">Expert guidance through complex regulatory landscapes and stakeholder negotiations. We ensure your interests are protected throughout the entire project lifecycle.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 sm:items-start items-center sm:w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>18+</h1>
                            <p className='sm:text-sm text-[12px] text-gray-500'>Years Experience</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>500+</h1>
                            <p className='sm:text-sm text-[12px] text-gray-500'>Cases Handled</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>98%</h1>
                            <p className='sm:text-sm text-[12px] text-gray-500'>Success Rate</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='px-[40px] py-[60px] bg-white flex sm:flex-row flex-col gap-6'>
                <div className='sm:w-[50%] flex flex-col gap-4'>
                    <h1 className='sm:text-2xl text-xl font-bold '>Our Strategic Approach</h1>
                    <p className='sm:text-sm text-[12px] text-gray-600'>Our advocacy services ensure your interests are protected throughout the project lifecycle. We provide strategic guidance, regulatory compliance support, and expert representation in complex negotiations with governments, regulators, and stakeholders.</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-2 p-4'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-full'>
                                <h1 className='font-bold'>01</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Comprehensive Analysis</h1>
                                <p className='sm:text-sm text-[12px] text-gray-500'>In-depth regulatory and stakeholder landscape assessment</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-4'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-full'>
                                <h1 className='font-bold'>02</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Strategic Planning</h1>
                                <p className='sm:text-sm text-[12px] text-gray-500'>Development of tailored advocacy and engagement strategies</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-4'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-full'>
                                <h1 className='font-bold'>03</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Expert Execution</h1>
                                <p className='sm:text-sm text-[12px] text-gray-500'>Professional representation and relationship management</p>
                            </div>
                        </div>
                        <div className='flex gap-2 p-4'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-full'>
                                <h1 className='font-bold'>04</h1>
                            </div>
                            <div>
                                <h1 className='font-bold'>Continuous Monitoring</h1>
                                <p className='sm:text-sm text-[12px] text-gray-500'>Ongoing assessment and strategy optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[50%] flex flex-col gap-4'>
                    <div className='flex items-center gap-4 p-4 bg-yellow-50 rounded-md'>
                        <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-md'>
                            <Award color='black' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold sm:text-2xl text-xl'>98%</h1>
                            <h1 className='font-semibold'>Successful Negotiations</h1>
                            <p className='text-sm text-gray-500'>Complex contracts and agreements</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-4 bg-yellow-50 rounded-md'>
                        <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-md'>
                            <CircleCheckBig color='black' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold sm:text-2xl text-xl'>98%</h1>
                            <h1 className='font-semibold'>Success Rate</h1>
                            <p className='text-sm text-gray-500'>In tender and bid processes</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 p-4 bg-yellow-50 rounded-md'>
                        <div className='w-[40px] h-[40px] bg-yellow-500 flex items-center justify-center rounded-md'>
                            <Users color='black' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold sm:text-2xl text-xl'>50+</h1>
                            <h1 className='font-semibold'>Government Relations</h1>
                            <p className='text-sm text-gray-500'>Across multiple jurisdictions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-[#f9fafc]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Core Services</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Comprehensive advocacy solutions designed to navigate complex regulatory environments and build strategic stakeholder relationships.</p>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-4 flex flex-col'>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <FileText />
                            </div>
                            <h1 className='font-bold'>Tender & Bid Support</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Strategic guidance through competitive bidding processes with comprehensive proposal development.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Bid strategy development</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Technical proposal writing</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Commercial optimization</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Risk assessment</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Scale />
                            </div>
                            <h1 className='font-bold'>Contract Review & Negotiation</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Expert analysis and negotiation of complex agreements to protect your interests.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Contract risk analysis</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Terms negotiation</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Legal compliance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Amendment support</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Users />
                            </div>
                            <h1 className='font-bold'>Stakeholder Engagement</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Building strategic relationships with key stakeholders across all project phases.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Government relations</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Community engagement</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Investor relations</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Media management</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Shield />
                            </div>
                            <h1 className='font-bold'>Compliance & Governance</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Ensuring adherence to regulatory requirements and industry best practices.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Regulatory compliance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>ESG framework</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Audit support</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Policy development</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl text-white'>Industry Expertise</h1>
                    <p className='text-gray-300 text-center sm:w-[60%] sm:text-base text-sm'>Deep understanding of regulatory frameworks across key sectors and jurisdictions worldwide.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='flex flex-col gap-2 bg-[#2f2200] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Energy & Infrastructure</h1>
                        <p className='text-gray-300 text-sm'>Regulatory compliance for power, oil & gas, and infrastructure projects</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#071633] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Government Relations</h1>
                        <p className='text-gray-300 text-sm'>Building strategic relationships with government stakeholders</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#002712] rounded-md text-white p-6'>
                        <h1 className='font-bold'>International Trade</h1>
                        <p className='text-gray-300 text-sm'>Cross-border project advocacy and trade compliance</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#231234] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Environmental Compliance</h1>
                        <p className='text-gray-300 text-sm'>ESG framework development and environmental advocacy</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#30090a] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Dispute Resolution</h1>
                        <p className='text-gray-300 text-sm'>Strategic resolution of project-related disputes and conflicts</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#151634] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Public-Private Partnerships</h1>
                        <p className='text-gray-300 text-sm'>Structuring and advocating for PPP arrangements</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='sm:text-3xl text-xl text-center font-bold'>Ready to Navigate Complex Challenges?</h1>
                <p className='text-gray-700 sm:w-[60%] text-center sm:text-base text-sm'>Let our experienced advocacy team guide you through regulatory complexities and stakeholder relationships to ensure project success.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Get Expert Advocacy Support</button>
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
        </div>
    )
}

export default Advocacy