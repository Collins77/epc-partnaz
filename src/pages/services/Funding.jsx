import React from 'react'
import inv from '../../assets/investment.jpg'
import { Briefcase, DollarSign, Globe, Target, TrendingUp, Users } from 'lucide-react'

const Funding = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${inv})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 sm:items-start items-center justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Investment Funding
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-base text-sm">Unlock capital opportunities through our extensive network of investors and funding programs. We connect visionary projects with the right capital partners for sustainable success.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 sm:items-start items-center sm:w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>$50B+</h1>
                            <p className='text-sm text-gray-500'>Funding Secured</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>350+</h1>
                            <p className='text-sm text-gray-500'>Projects Funded</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>500+</h1>
                            <p className='text-sm text-gray-500'>Investor Network</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='sm:grid sm:grid-cols-3 flex flex-col sm:gap-2 gap-6 px-[40px] py-[60px] bg-white'>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <DollarSign />
                    </div>
                    <h1 className='text-3xl font-bold'>$50B+</h1>
                    <p className='text-gray-700'>Funding Secured</p>
                    <p className='text-sm text-gray-500'>Across all project types</p>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <TrendingUp />
                    </div>
                    <h1 className='text-3xl font-bold'>350+</h1>
                    <p className='text-gray-700'>Projects Funded</p>
                    <p className='text-sm text-gray-500'>Successfully completed</p>
                </div>
                <div className='flex items-center flex-col'>
                    <div className='w-[40px] h-[40px] rounded-md bg-yellow-500 flex items-center justify-center'>
                        <Globe />
                    </div>
                    <h1 className='text-3xl font-bold'>500+</h1>
                    <p className='text-gray-700'>Investor Network</p>
                    <p className='text-sm text-gray-500'>Global reach and presence</p>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-[#f9fafc]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Comprehensive Funding Services</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>End-to-end funding solutions from initial strategy development to closing and beyond.</p>
                </div>
                <div className='sm:grid sm:grid-cols-2 flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Target />
                            </div>
                            <h1 className='font-bold'>Funding Strategy</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Customized funding strategies that align with your project goals and timeline.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Market analysis</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Funding roadmap</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Risk assessment</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Timeline optimization</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Users />
                            </div>
                            <h1 className='font-bold'>Investor Relations</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Building strong relationships with institutional and private investors worldwide.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Investor networking</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Pitch preparation</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Due diligence support</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Relationship management</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Briefcase />
                            </div>
                            <h1 className='font-bold'>Financial Structuring</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Innovative financial structures that maximize project potential and minimize risk.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Capital structure design</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Risk mitigation</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Tax optimization</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Legal framework</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-md'>
                        <div className='flex gap-3 items-center'>
                            <div className='w-[40px] h-[40px] bg-yellow-500 rounded-md flex items-center justify-center'>
                                <Globe />
                            </div>
                            <h1 className='font-bold'>Global Capital Markets</h1>
                        </div>
                        <p className='text-gray-500 text-sm'>Access to international funding sources and capital market opportunities.</p>
                        <div className='grid grid-cols-2 gap-2'>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Cross-border funding</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Currency hedging</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Regulatory compliance</p>
                            <p className='p-2 border rounded-md border-yellow-500 text-[10px]'>Market entry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-white'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Extensive Capital Network</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Access to diverse funding sources spanning the global capital markets ecosystem.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Private Equity</h1>
                        <p className='text-sm text-gray-500'>Strategic partnerships with leading PE firms</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$50M - $2B</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Growth capital and buyouts</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Institutional Investors</h1>
                        <p className='text-sm text-gray-500'>Pension funds, sovereign wealth funds, insurance companies</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$100M - $5B</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Infrastructure and long-term assets</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Development Finance</h1>
                        <p className='text-sm text-gray-500'>Multilateral and bilateral development institutions</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$25M - $1B</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Emerging markets and sustainable projects</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Commercial Banks</h1>
                        <p className='text-sm text-gray-500'>Project finance and syndicated lending</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$10M - $3B</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Debt financing and working capital</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Green Finance</h1>
                        <p className='text-sm text-gray-500'>ESG-focused and climate finance institutions</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$20M - $1.5B</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Sustainable and renewable projects</h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-green-50 rounded-md p-4 flex flex-col gap-3 hover:shadow-md'>
                        <h1 className='font-bold'>Government Programs</h1>
                        <p className='text-sm text-gray-500'>Export credit agencies and government incentives</p>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Range:</p>
                                <h1 className='font-semibold text-green-500'>$5M - $500M</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Focus:</p>
                                <h1 className='font-semibold text-sm'>Strategic national projects</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl text-white'>Extensive Capital Network</h1>
                    <p className='text-gray-300 text-center sm:w-[60%] sm:text-base text-sm'>Access to diverse funding sources spanning the global capital markets ecosystem.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='flex flex-col gap-2 bg-[#002712] rounded-md text-white p-6'>
                        <h1 className='font-bold'>International Trade</h1>
                        <h1 className='font-bold sm:text-3xl text-xl text-green-500'>$450M</h1>
                        <p className='text-gray-300 text-sm'>Secured funding from international consortium</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#071633] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Government Relations</h1>
                        <h1 className='font-bold sm:text-3xl text-xl text-blue-500'>$320M</h1>
                        <p className='text-gray-300 text-sm'>Development bank and private equity</p>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#231234] rounded-md text-white p-6'>
                        <h1 className='font-bold'>Environmental Compliance</h1>
                        <h1 className='font-bold sm:text-3xl text-xl text-purple-500'>$280M</h1>
                        <p className='text-gray-300 text-sm'>Syndicated loan and equity funding</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='sm:text-3xl text-center text-xl font-bold'>Ready to Secure Funding for Your Project?</h1>
                <p className='text-gray-700 sm:w-[60%] sm:text-base text-sm text-center'>Connect with our funding experts to explore capital opportunities and bring your vision to life.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Explore Funding Options</button>
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

export default Funding