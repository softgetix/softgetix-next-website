import React from 'react';
import Image from 'next/image';

function AugmentedHiringBenifits() {
  return (
    <>
      <div className="hire_team_right">
        <div className="hire_team_details">
            <h1>Benefits Of Our <span className="orange-text">IT Staff Augmentation</span> Services</h1>
            <div className="hire_team_benefits">
              <ul>
                <li>Easily Scale-up and Scale-down</li>
                <li>Cost Effective</li>
                <li>No Recruitment Hassles</li>
                <li>Lower operational costs</li>
                <li>Legal Headache Gone</li>
                <li>Access to Vetted and Certified Talent</li>
              </ul>
            </div>	
        </div>
        <div className=" ">
            <h3 style={{color: "#fff", paddingTop: "20px"}}>Achievements</h3>
            <div className="underline_value_heading"></div>
            <Image className="" src="/images/staff_aug_award.png" alt="Software-Development" width="170" height="150"/>
            <Image className="ml-2 mb-3" src="/images/CrowedReviews.webp" alt="CrowedReviews" width="240" height="70"/>
        </div>
      </div>
    </>
  )
}

export default AugmentedHiringBenifits
