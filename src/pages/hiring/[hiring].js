import React, { useState, useEffect } from "react";
import Head from "next/head";
import StepOne from "../../components/Components/Forms/StepOne";
import StepTwo from "../../components/Components/Forms/StepTwo";
import Final from "../../components/Components/Forms/Final";
import StepThree from "../../components/Components/Forms/StepThree";
import Link from 'next/link';
import { useRouter } from 'next/router'
import StepFour from "../../components/Components/Forms/StepFour";
import StepFive from "../../components/Components/Forms/StepFive";
import AugmentedHiringBenifits from "../../components/common_components/AugmentedHiringBenifits";
import BrandImages from '../../components/common/BrandImages';
import Image from 'next/image';

function Hiring() {
  //state for steps
   const [step, setstep] = useState(1);
   const router = useRouter();
   const { hiring } = router.query;

   const [ogUrl, setOgUrl] = useState("");

  //state for form data
   const [formData, setFormData] = useState({
    resource: "",
    resource_time: "",
    company_name: "",
    email: "",
    technology:hiring
   })

  // function for going to next step by increasing step state by 1
   const nextStep = () => {
    setstep(step + 1);
   };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => { 
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  useEffect(() => {
   const host = window.location.host;
   const baseUrl = `https://${host}`;

   setOgUrl(`${baseUrl}${router.pathname}`);
 }, [router.pathname]);
  
//   console.log('formData',formData);
  
// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="hire_team_left">
                        <div className="hire_team_form">
                           <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" href="/">
                                    <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                                 </Link>
                              </div>
                              <div className="hire_team_form_heading">
                                 <p>Thank you for choosing SoftGetix. To match you with the best resource, please take a minute to answer a few quick questions.</p>
                              </div>
                              <div className="">
                                 <StepOne nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                              </div>
                           </div>
                        </div>

                        <div className="">
                           <BrandImages />
                        </div>
                        <br /><br />

                     </div>
                  </div>
                  <div className="col-lg-4 hire_team_right_width">
                     <AugmentedHiringBenifits />
                  </div>
               </div>
            </div>
         </section>
         </>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" href="/">
                                 <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                                 </Link>
                              </div>
                           <div className="">
                              <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>

                     <div className="">
                        <BrandImages />
                     </div>
                     <br /><br />

                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      </>
      );
      // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" href="/">
                                    <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                                 </Link>
                              </div>
                           <div className="">
                              <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>

                     <div className="">
                        <BrandImages />
                     </div>
                     <br /><br />

                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      </>
      );
      case 4:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" href="/">
                                 <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                                 </Link>
                              </div>
                           <div className="">
                              <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>

                     <div className="">
                        <BrandImages />
                     </div>
                     <br /><br />

                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      </>
      );
      case 5:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                              <div className="hire_team_logo">
                                 <Link className="" href="/">
                                    <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                                 </Link>
                              </div>
                           <div className="">
                              <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                           </div>
                        </div>
                     </div>

                     <div className="">
                        <BrandImages />
                     </div>
                     <br /><br />

                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
         </section>
         </>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 6:
      return (
         <>
         <Head>
         <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
         <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
         <link rel="canonical" href={ogUrl}></link>
         </Head>
         <section id="hire_team">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-8">
                  <div className="hire_team_left">
                     <div className="hire_team_form">
                        <div className="hire_team_form_details">
                           <div className="hire_team_logo">
                              <Link className="" href="/">
                                 <Image src="/logo/softgetix_logo_new.png" alt="softgetix_logo" width="200" height="100" />
                              </Link>
                           </div>

                           <div className="">
                              <Final values={formData}  />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 hire_team_right_width">
                  <AugmentedHiringBenifits />
               </div>
            </div>
         </div>
      </section>
      </>
      );
    // default case to show nothing
    default:
      
  }
}

export default Hiring;