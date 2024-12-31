import React from 'react'
import './TabsWrap.scss'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const TabsWrap = () => {
    return (
        <>
            <section className="tabs">
                <div className="container">
                    <Tabs>
                        <TabList>
                            <div className="tabswrap__boxes">
                                <h3><span className='white-text'>Our</span>
                                <span className='lime-text'>Products</span></h3>
                                <p className='tabswrap__p'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                            </div>

                            <div className="div">
                            <Tab>For Individuals</Tab>
                            <Tab>For Businesses</Tab>                                
                            </div>

                        </TabList>
                            <div className="tabswrap__boxs">
                                <div className="tabswrap__box">
                                    <img src="/Iconbag.svg" alt="" />
                                    <h3>Checking Accounts</h3>
                                    <p>Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                                </div>
                                <div className="tabswrap__box tabwrap__box">
                                    <img src="/iconarrow.svg" alt="" />
                                    <h3>Savings Accounts</h3>
                                    <p>Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
                                </div>
                                <div className="tabswrap__box">
                                    <img src="/icon_money.svg" alt="" />
                                    <h3>Loans and Mortgages</h3>
                                    <p>Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
                                </div>
                            </div>


                            <div className="tabpanel__boxs">
                            <h2>Use Cases</h2>
                            <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                            </div>
                        <TabPanel>

                            
                        <div className="tabspanel__wrapper">
                            <img src="/tabscontainer1.png" alt="" />

                            <div className="tabspanel__boxes">
                                <div className="tabpanel__box">
                                <h3>For Individuals</h3>
                                <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                                </div>
                                <div className="tabspanel__boxs">
                                    <div className="tabspanel__box">
                                        <h1>78%</h1>
                                        <p>Secure Retirement Planning</p>
                                    </div>
                                    <div className="tabspanel__box tabspanel__box__active">
                                        <h1>63%</h1>
                                        <p>Manageable Debt Consolidation</p>
                                    </div>
                                    <div className="tabspanel__box">
                                        <h1>91%</h1>
                                        <p>Reducing financial burdens</p>
                                    </div>
                                </div>
                                <button className='btn'>Learn More</button>
                            </div>
                        </div>

                        </TabPanel>
                        <TabPanel>
                        <div className="tabspanel__wrapper">
                            <div className="tabspanel__boxes">
                                <div className="tabpanel__box">
                                <h3>For Business</h3>
                                <p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                                </div>
                                <div className="tabspanel__boxs">
                                    <div className="tabspanel__box">
                                        <h1>65%</h1>
                                        <p>Cash Flow Management</p>
                                    </div>
                                    <div className="tabspanel__box tabspanel__box__active">
                                        <h1>70%</h1>
                                        <p>Drive Business Expansion</p>
                                    </div>
                                    <div className="tabspanel__box">
                                        <h1>45%</h1>
                                        <p>Streamline payroll processing</p>
                                    </div>
                                </div>
                                <button className='btn'>Learn More</button>
                            </div>

                            <img src="/tabscontainer2.png" alt="" />
                        </div>
                        </TabPanel>

                    </Tabs>
                </div>
            </section>

        </>
    )
}

export default TabsWrap