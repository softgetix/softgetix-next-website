import React, { useState } from "react";
import Link from "next/link";

function PricingPlan() {
    return (
        <>
            <div className="container" id="pricing_div">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="font-weight-bold text-center staff-heading">Build Your Own  <b className="orange-text">Custom Team</b></h2>
                    </div>
                    <div className="col-md-8 m-auto">
                        <div className="staff_row_details text-center">
                            <p>Reduce your company spending by eliminating the costs of onboarding, office space, bonuses, taxes, medical, training and overall management.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing pricing-palden" >
                <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-0" style={{minHeight: '497px'}}>
                    <div className="pricing-deco">
                        <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                        <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                        <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                        <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                        <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                        <div className="pricing-price"><s>$24</s></div>
                        <div className="pricing-price"><span className="pricing-currency">$</span>19
                        {/* <span className="pricing-period">/ mo</span> */}</div>
                        <h3 className="pricing-title">Hourly (USD)</h3>
                    </div>
                    <ul className="pricing-feature-list">
                        <li className="pricing-feature">We’ll provide a fully signed NDA for your Project’s confidentiality</li>
                        {/* <li className="pricing-feature">Support at $25/hour</li>
                                <li className="pricing-feature">Limited cloud access</li> */}
                    </ul>
                    <Link href="/hiring/team" className="pricing-action pricing-btn">Discuss Your Staffing Need! </Link>
                </div>
                <div className="pricing-item features-item ja-animate pricing__item--featured" data-animation="move-from-bottom" data-delay="item-1" style={{minHeight: '497px'}}>
                <div className="pricing-deco" style={{background: 'linear-gradient(135deg,#a93bfe,#584efd)'}}>
                    <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                    </svg>
                    <div className="pricing-price"><s>$2800</s></div>
                    <div className="pricing-price"><span className="pricing-currency">$</span>2400</div>
                    <h3 className="pricing-title">Monthly (USD) / resource</h3>
                </div>
                <ul className="pricing-feature-list">
                    <li className="pricing-feature">4+ years of experience Dedicated Developer 160 hours</li>
                    {/* <li className="pricing-feature">Support at $5/hour</li>
                            <li className="pricing-feature">Full cloud access</li> */}
                </ul>
                <Link href="/hiring/team" className="pricing-action">Discuss Your Staffing Need! </Link>
                </div>
                <div className="pricing-item features-item ja-animate" data-animation="move-from-bottom" data-delay="item-2" style={{minHeight: '497px'}}>
                <div className="pricing-deco">
                    <svg className="pricing-deco-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" y="0px">
                    <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                    <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                    <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                    <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                    </svg>
                    <div className="pricing-price"><s>$16800</s></div>
                    <div className="pricing-price"><span className="pricing-currency">$</span>11000</div>
                    <h3 className="pricing-title">Monthly (USD) / 6 resources</h3>
                </div>
                <ul className="pricing-feature-list">
                <li className="pricing-feature">Build a SCRUM Team of 6 resources</li>
                    <ul style={{textAlign: 'left', paddingBottom: '10px'}}>
                        <li>Backend Developer</li>
                        <li>Frontend/UI/UX Developer</li>
                        <li>Project Manager </li>
                        <li>Manual QA/Tester </li>
                    </ul>
                    {/* <li className="pricing-feature">Support at $5/hour</li>
                            <li className="pricing-feature">Full cloud access</li> */}
                </ul>
                {/* <button className="pricing-action pricing-btn">Discuss Your Staffing Need! </button> */}
                <Link href="/hiring/team" className="pricing-action pricing-btn">Discuss Your Staffing Need! </Link>
                </div>
            </div>
                
    </> 
  )
}

export default PricingPlan