import React , {useState , useRef, useEffect } from 'react';
import Template from "../components/common/Template";
import Head from "next/head";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRouter } from 'next/router'

function Get() {
   const router = useRouter();
   const [ogUrl, setOgUrl] = useState("");
   const [loading, setLoading] = useState(false);
   // 👇️ create a ref for the file input
   const inputRef = useRef(null);

   const [values, setValues] = React.useState({
      name: '',
      email: '',
      mobile: '',
    })
   
    const [validations, setValidations] = React.useState({
      name: '',
      email: '',
      mobile: '',
    })
    
    const validateAll = () => {
      const { name, email, mobile} = values
      const validations = { name: '', email: '', mobile: ''}
      let isValid = true
      
      if (!name) {
        validations.name = 'Name is required'
        isValid = false
      }
      
      if (name && name.length < 3 || name.length > 50) {
        validations.name = 'Name must contain between 3 and 50 characters'
        isValid = false
      }
      
      if (!email) {
        validations.email = 'Email is required'
        isValid = false
      }
      
      if (email && !/\S+@\S+\.\S+/.test(email)) {
        validations.email = 'Email format must be as example@mail.com'
        isValid = false
      }
      
      
      if (!mobile) {
          validations.mobile = 'Mobile is required'
          isValid = false
      }

      if (mobile && !/^\d{10}$/.test(mobile)) {
          validations.mobile = 'Invalid Mobile Number'
          isValid = false
      }
     
      if (!isValid) {
        setValidations(validations)
      }
      
      return isValid
    }
  
    const validateOne = (e) => {
      const { name } = e.target
      const value = values[name]
      let message = ''
      
      if (!value) {
        message = `${name} is required`
      }
      
      if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
        message = 'Name must contain between 3 and 50 characters'
      }
  
      if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        message = 'Email format must be as example@mail.com'
      }
      
      if (value &&  name === 'mobile' && !/^\d{10}$/.test(value)) {
          message = 'Invalid Mobile Number'
        }

      setValidations({...validations, [name]: message })
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({...values, [name]: value })
 
    }

const { name, email,mobile} = values

const { 
  name: nameVal, 
  email: emailVal, 
  mobile: mobileVal, 
} = validations

   const [imid, setImId] = useState("");
   const [Budget, setMyBudget] = useState("");
   const [instant_messaging, setInstantMsg] = useState("");
   const [country, setCountry] = useState("");
   const [selectedFile, setSelectedFile] = useState("");
   const [comment, setComment] = useState("");
   const [fileVal, setRequiredFile] = useState("");

   const handleCountryChange = (event) => {
      setCountry(event.target.value)
   }

   const changeFileHandler = (event) => {
		setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
	};

   const handleBudgetChange = (event) => {
      setMyBudget(event.target.value)
   }


   const handleInsMsgChange = (event) => {
      setInstantMsg(event.target.value)
   }

    let handleSubmit = async (e) => {
     
      e.preventDefault();

      const isValid = validateAll()
    
      if (!isValid) {
        return false
      }
      
      // if (!selectedFile) {
      //    setRequiredFile('File is required')
      //    return false;
      //  }
      //  if (!selectedFile.name.match(/\.(pdf|xls|doc|docx)$/)) {
      //    setRequiredFile('select valid file.')
      //    return false;
      //  }
     
       var size = parseFloat(selectedFile.size / (1024 * 1024)).toFixed(2); 
       if(size > 2) {
         setRequiredFile('Please select file size less than 2 MB');
           return false;
       }
       setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("Budget", Budget);
      formData.append("instant_messaging", instant_messaging);
      formData.append("country", country);
      formData.append("imid", imid);
      formData.append("message", comment);
      formData.append("page", "FreeQuote");
      formData.append("image", selectedFile);
      formData.append('_method', 'POST')
      
      try {
        let res = await fetch("https://projects.softgetix.com/SoftGetixAPI/public/api/contacts", {
            method: "POST",
            body: formData,
         });
  
        console.log(res);
        if (res.status === 200) {
          e.target.reset();
          setValues('');
          setValidations('');
          setValues({ comment: '' });
          setImId('');
          setCountry("");
          setMyBudget("");
          setInstantMsg("");
          setComment("");
          setSelectedFile("");
          setRequiredFile("");
          inputRef.current.value = null;
          setLoading(false); // Stop loading
          Swal.fire({
            icon: "success",
            title: 'Thanks for contacting us. We will contact you shortly.',
            success:"success",
            width: 400,
            padding: '1em',
            color: '#000',
            font: '12px',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
         
        } else {
         setLoading(false); // Stop loading
         Swal.fire({
            icon:"error",
            title: 'Contact Us support not available for now. Please try again later.',
            padding: '1em',
            color: '#000',
            font: '12px',
            background: '#fff',
            backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `
          })
        }
      } catch (err) {
        console.log(err);
        setLoading(false); // Stop loading
      }
    };

    useEffect(() => {
      const host = window.location.host;
      const baseUrl = `https://${host}`;
  
      setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

  return (
    <>
    <Head>
      <title>Digital Product Engineering & IT Staff Augmentation Company | SoftGetix</title>
      <meta name="description" content="SoftGetix helps companies worldwide improve the speed and quality of their product development with the help of our tailored IT staff augmentation services." />
      <link rel="canonical" href={ogUrl}></link>
   </Head>
    <Template>
    <section className="ftco-section">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-10 text-center">
                  	<h2 className="heading-section">Request A Free Quotation Today!</h2>
               </div>
               <div className="col-md-8 text-center mb-3">
               		<p>For a free quotation of your software or website development need, please complete the form below. We’ll ensure to revert and start communicating on your requirement within 1 business day.</p>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-md-12">
                  <div className="wrapper">
                     <div className="row no-gutters">
                        <div className="col-md-7">
                           <div className="contact-wrap w-100  p-4">
                              <form id="contactForm" name="contactForm" className="contactForm"  onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="name">FULL NAME</label>
                                          <input type="text" className="form-control" name="name" value={name} onChange={handleChange} onBlur={validateOne} id="name"  size="40" placeholder="Enter your name" />
                                          <div className="error">{nameVal}</div>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="email">YOUR EMAIL</label>
                                          <input type="email" className="form-control" name="email" value={email} onChange={handleChange}	onBlur={validateOne} id="email"  size="40" placeholder="Enter your email" />
                                          <div className="error">{emailVal}</div>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="phone">PHONE NUMBER </label>
                                          <input type="text" className="form-control" name="mobile" value={mobile}  onChange={handleChange} onBlur={validateOne} id="phone" placeholder="Enter your contact no." />
                                          <div className="error">{mobileVal}</div>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="budget">BUDGET</label>
                                          <select name="Budget" value={Budget} onChange={handleBudgetChange} className="form-control" aria-required="true" aria-invalid="false" data-select2-id="4" tabIndex="-1" aria-hidden="true">
                                             <option value="" data-select2-id="6" disabled>---</option>
                                             <option value="USD 1000 to USD 5000">USD 1000 to USD 5000</option>
                                             <option value="USD 5000 to USD 10000">USD 5000 to USD 10000</option>
                                             <option value="USD 10000 to USD 25000">USD 10000 to USD 25000</option>
                                             <option value="USD 25000 to USD 50000">USD 25000 to USD 50000</option>
                                             <option value="USD 50000+">USD 50000+</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="im-app">INSTANT MESSAGING</label>
                                          <select name="instant_messaging" value={instant_messaging} onChange={handleInsMsgChange} className="form-control" aria-invalid="false" data-select2-id="7" tabIndex="-1" aria-hidden="true">
                                             <option value="" data-select2-id="9" disabled>---</option>
                                             <option value="Gmail">Gmail</option>
                                             <option value="Skype">Skype</option>
                                             <option value="WhatsApp">WhatsApp</option>
                                             <option value="Yahoo">Yahoo</option>
                                             <option value="Facebook Messenger">Facebook Messenger</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="im-app-id">YOUR IM ID</label>
                                          <input type="text" className="form-control" name="imid" value={imid} onChange={(e) => setImId(e.target.value)} id="im-app-id" placeholder="Enter your IM id"/>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="email">SELECT COUNTRY</label>
                                          <select name="country" value={country} onChange={handleCountryChange}className="form-control" aria-required="true" aria-invalid="false" data-select2-id="1" tabIndex="-1" aria-hidden="true">
                                             <option value="" disabled>---</option>
                                             <option value="Aruba">Aruba</option>
                                             <option value="Afghanistan">Afghanistan</option>
                                             <option value="Angola">Angola</option>
                                             <option value="Anguilla">Anguilla</option>
                                             <option value="Åland Islands">Åland Islands</option>
                                             <option value="Albania">Albania</option>
                                             <option value="Andorra">Andorra</option>
                                             <option value="United Arab Emirates">United Arab Emirates</option>
                                             <option value="Argentina">Argentina</option>
                                             <option value="Armenia">Armenia</option>
                                             <option value="American Samoa">American Samoa</option>
                                             <option value="Antarctica">Antarctica</option>
                                             <option value="French Southern Territories">French Southern Territories</option>
                                             <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                             <option value="Australia">Australia</option>
                                             <option value="Austria">Austria</option>
                                             <option value="Azerbaijan">Azerbaijan</option>
                                             <option value="Burundi">Burundi</option>
                                             <option value="Belgium">Belgium</option>
                                             <option value="Benin">Benin</option>
                                             <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                             <option value="Burkina Faso">Burkina Faso</option>
                                             <option value="Bangladesh">Bangladesh</option>
                                             <option value="Bulgaria">Bulgaria</option>
                                             <option value="Bahrain">Bahrain</option>
                                             <option value="Bahamas">Bahamas</option>
                                             <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                             <option value="Saint Barthélemy">Saint Barthélemy</option>
                                             <option value="Belarus">Belarus</option>
                                             <option value="Belize">Belize</option>
                                             <option value="Bermuda">Bermuda</option>
                                             <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                                             <option value="Brazil">Brazil</option>
                                             <option value="Barbados">Barbados</option>
                                             <option value="Brunei Darussalam">Brunei Darussalam</option>
                                             <option value="Bhutan">Bhutan</option>
                                             <option value="Bouvet Island">Bouvet Island</option>
                                             <option value="Botswana">Botswana</option>
                                             <option value="Central African Republic">Central African Republic</option>
                                             <option value="Canada">Canada</option>
                                             <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                             <option value="Switzerland">Switzerland</option>
                                             <option value="Chile">Chile</option>
                                             <option value="China">China</option>
                                             <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                             <option value="Cameroon">Cameroon</option>
                                             <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                                             <option value="Congo">Congo</option>
                                             <option value="Cook Islands">Cook Islands</option>
                                             <option value="Colombia">Colombia</option>
                                             <option value="Comoros">Comoros</option>
                                             <option value="Cape Verde">Cape Verde</option>
                                             <option value="Costa Rica">Costa Rica</option>
                                             <option value="Cuba">Cuba</option>
                                             <option value="Curaçao">Curaçao</option>
                                             <option value="Christmas Island">Christmas Island</option>
                                             <option value="Cayman Islands">Cayman Islands</option>
                                             <option value="Cyprus">Cyprus</option>
                                             <option value="Czech Republic">Czech Republic</option>
                                             <option value="Germany">Germany</option>
                                             <option value="Djibouti">Djibouti</option>
                                             <option value="Dominica">Dominica</option>
                                             <option value="Denmark">Denmark</option>
                                             <option value="Dominican Republic">Dominican Republic</option>
                                             <option value="Algeria">Algeria</option>
                                             <option value="Ecuador">Ecuador</option>
                                             <option value="Egypt">Egypt</option>
                                             <option value="Eritrea">Eritrea</option>
                                             <option value="Western Sahara">Western Sahara</option>
                                             <option value="Spain">Spain</option>
                                             <option value="Estonia">Estonia</option>
                                             <option value="Ethiopia">Ethiopia</option>
                                             <option value="Finland">Finland</option>
                                             <option value="Fiji">Fiji</option>
                                             <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                             <option value="France">France</option>
                                             <option value="Faroe Islands">Faroe Islands</option>
                                             <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                             <option value="Gabon">Gabon</option>
                                             <option value="United Kingdom">United Kingdom</option>
                                             <option value="Georgia">Georgia</option>
                                             <option value="Guernsey">Guernsey</option>
                                             <option value="Ghana">Ghana</option>
                                             <option value="Gibraltar">Gibraltar</option>
                                             <option value="Guinea">Guinea</option>
                                             <option value="Guadeloupe">Guadeloupe</option>
                                             <option value="Gambia">Gambia</option>
                                             <option value="Guinea-Bissau">Guinea-Bissau</option>
                                             <option value="Equatorial Guinea">Equatorial Guinea</option>
                                             <option value="Greece">Greece</option>
                                             <option value="Grenada">Grenada</option>
                                             <option value="Greenland">Greenland</option>
                                             <option value="Guatemala">Guatemala</option>
                                             <option value="French Guiana">French Guiana</option>
                                             <option value="Guam">Guam</option>
                                             <option value="Guyana">Guyana</option>
                                             <option value="Hong Kong">Hong Kong</option>
                                             <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                             <option value="Honduras">Honduras</option>
                                             <option value="Croatia">Croatia</option>
                                             <option value="Haiti">Haiti</option>
                                             <option value="Hungary">Hungary</option>
                                             <option value="Indonesia">Indonesia</option>
                                             <option value="Isle of Man">Isle of Man</option>
                                             <option value="India">India</option>
                                             <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                             <option value="Ireland">Ireland</option>
                                             <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                             <option value="Iraq">Iraq</option>
                                             <option value="Iceland">Iceland</option>
                                             <option value="Israel">Israel</option>
                                             <option value="Italy">Italy</option>
                                             <option value="Jamaica">Jamaica</option>
                                             <option value="Jersey">Jersey</option>
                                             <option value="Jordan">Jordan</option>
                                             <option value="Japan">Japan</option>
                                             <option value="Kazakhstan">Kazakhstan</option>
                                             <option value="Kenya">Kenya</option>
                                             <option value="Kyrgyzstan">Kyrgyzstan</option>
                                             <option value="Cambodia">Cambodia</option>
                                             <option value="Kiribati">Kiribati</option>
                                             <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                             <option value="Korea, Republic of">Korea, Republic of</option>
                                             <option value="Kuwait">Kuwait</option>
                                             <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                             <option value="Lebanon">Lebanon</option>
                                             <option value="Liberia">Liberia</option>
                                             <option value="Libya">Libya</option>
                                             <option value="Saint Lucia">Saint Lucia</option>
                                             <option value="Liechtenstein">Liechtenstein</option>
                                             <option value="Sri Lanka">Sri Lanka</option>
                                             <option value="Lesotho">Lesotho</option>
                                             <option value="Lithuania">Lithuania</option>
                                             <option value="Luxembourg">Luxembourg</option>
                                             <option value="Latvia">Latvia</option>
                                             <option value="Macao">Macao</option>
                                             <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                                             <option value="Morocco">Morocco</option>
                                             <option value="Monaco">Monaco</option>
                                             <option value="Moldova, Republic of">Moldova, Republic of</option>
                                             <option value="Madagascar">Madagascar</option>
                                             <option value="Maldives">Maldives</option>
                                             <option value="Mexico">Mexico</option>
                                             <option value="Marshall Islands">Marshall Islands</option>
                                             <option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
                                             <option value="Mali">Mali</option>
                                             <option value="Malta">Malta</option>
                                             <option value="Myanmar">Myanmar</option>
                                             <option value="Montenegro">Montenegro</option>
                                             <option value="Mongolia">Mongolia</option>
                                             <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                             <option value="Mozambique">Mozambique</option>
                                             <option value="Mauritania">Mauritania</option>
                                             <option value="Montserrat">Montserrat</option>
                                             <option value="Martinique">Martinique</option>
                                             <option value="Mauritius">Mauritius</option>
                                             <option value="Malawi">Malawi</option>
                                             <option value="Malaysia">Malaysia</option>
                                             <option value="Mayotte">Mayotte</option>
                                             <option value="Namibia">Namibia</option>
                                             <option value="New Caledonia">New Caledonia</option>
                                             <option value="Niger">Niger</option>
                                             <option value="Norfolk Island">Norfolk Island</option>
                                             <option value="Nigeria">Nigeria</option>
                                             <option value="Nicaragua">Nicaragua</option>
                                             <option value="Niue">Niue</option>
                                             <option value="Netherlands">Netherlands</option>
                                             <option value="Norway">Norway</option>
                                             <option value="Nepal">Nepal</option>
                                             <option value="Nauru">Nauru</option>
                                             <option value="New Zealand">New Zealand</option>
                                             <option value="Oman">Oman</option>
                                             <option value="Pakistan">Pakistan</option>
                                             <option value="Panama">Panama</option>
                                             <option value="Pitcairn">Pitcairn</option>
                                             <option value="Peru">Peru</option>
                                             <option value="Philippines">Philippines</option>
                                             <option value="Palau">Palau</option>
                                             <option value="Papua New Guinea">Papua New Guinea</option>
                                             <option value="Poland">Poland</option>
                                             <option value="Puerto Rico">Puerto Rico</option>
                                             <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                             <option value="Portugal">Portugal</option>
                                             <option value="Paraguay">Paraguay</option>
                                             <option value="Palestine, State of">Palestine, State of</option>
                                             <option value="French Polynesia">French Polynesia</option>
                                             <option value="Qatar">Qatar</option>
                                             <option value="Réunion">Réunion</option>
                                             <option value="Romania">Romania</option>
                                             <option value="Russian Federation">Russian Federation</option>
                                             <option value="Rwanda">Rwanda</option>
                                             <option value="Saudi Arabia">Saudi Arabia</option>
                                             <option value="Sudan">Sudan</option>
                                             <option value="Senegal">Senegal</option>
                                             <option value="Singapore">Singapore</option>
                                             <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                             <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                                             <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                             <option value="Solomon Islands">Solomon Islands</option>
                                             <option value="Sierra Leone">Sierra Leone</option>
                                             <option value="El Salvador">El Salvador</option>
                                             <option value="San Marino">San Marino</option>
                                             <option value="Somalia">Somalia</option>
                                             <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                             <option value="Serbia">Serbia</option>
                                             <option value="South Sudan">South Sudan</option>
                                             <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                             <option value="Suriname">Suriname</option>
                                             <option value="Slovakia">Slovakia</option>
                                             <option value="Slovenia">Slovenia</option>
                                             <option value="Sweden">Sweden</option>
                                             <option value="Swaziland">Swaziland</option>
                                             <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                             <option value="Seychelles">Seychelles</option>
                                             <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                             <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                             <option value="Chad">Chad</option>
                                             <option value="Togo">Togo</option>
                                             <option value="Thailand">Thailand</option>
                                             <option value="Tajikistan">Tajikistan</option>
                                             <option value="Tokelau">Tokelau</option>
                                             <option value="Turkmenistan">Turkmenistan</option>
                                             <option value="Timor-Leste">Timor-Leste</option>
                                             <option value="Tonga">Tonga</option>
                                             <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                             <option value="Tunisia">Tunisia</option>
                                             <option value="Turkey">Turkey</option>
                                             <option value="Tuvalu">Tuvalu</option>
                                             <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                             <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                             <option value="Uganda">Uganda</option>
                                             <option value="Ukraine">Ukraine</option>
                                             <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                             <option value="Uruguay">Uruguay</option>
                                             <option value="United States" selected="selected" data-select2-id="3">United States</option>
                                             <option value="Uzbekistan">Uzbekistan</option>
                                             <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                             <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                             <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
                                             <option value="Virgin Islands, British">Virgin Islands, British</option>
                                             <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                             <option value="Viet Nam">Viet Nam</option>
                                             <option value="Vanuatu">Vanuatu</option>
                                             <option value="Wallis and Futuna">Wallis and Futuna</option>
                                             <option value="Samoa">Samoa</option>
                                             <option value="Yemen">Yemen</option>
                                             <option value="South Africa">South Africa</option>
                                             <option value="Zambia">Zambia</option>
                                             <option value="Zimbabwe">Zimbabwe</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label className="label" htmlFor="file">UPLOAD FILE</label>
                                          <input type="file" size="40" ref={inputRef} className="form-control" name="file" onChange={changeFileHandler}  id="file" placeholder="Upload file" />
                                          <div className="error">{fileVal}</div>
                                       </div>
                                       
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group">
                                          <label className="label" htmlFor="#">Message</label>
                                          <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} className="form-control" id="message" cols="30" rows="4" placeholder="Type your message here.." ></textarea>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-group">
                                          <input type="submit" value="Let's Connect With Us" className="btn free_Quote_btn"/>
                                          
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <p>*100% Privacy Assured With Mutual NDA</p>
                                    </div>
                                    <div id="loading">{loading}</div>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-stretch more_info"> 
                           <div className="info-wrap">
                              <div className="row">
                              	<div className="contact-details">
                                    <h6 className="f-18">GET IN TOUCH</h6>
                                    <h2 className="f-48 mb-20">For <b>work</b> inquiry</h2>
                                    <h3 className="f-24 mb-30">Mail us</h3>
                                    <ul className="contact-links">
                                     <li><a href="hello@softgetix.com">hello@softgetix.com</a></li>
                                      <li>Skype - <a href="skype:SoftGetix?call">softgetix</a></li>
									  <li>India: <a href="tel:917314002699" tabIndex="-1">+91-731-4002699</a></li>
                                    </ul>
                                    <h2 className="f-48 mb-20 gb">For <b>career</b> inquiry</h2>
                                    <ul className="contact-links">
                                     <li>Mail: <a href="hr@softgetix.com">hr@softgetix.com</a></li>
                                      <li>India: <a href="tel:917314002699" tabIndex="-1">+91-731-4002699</a></li>
                                    </ul>
                                    <h2 className="f-48 mb-20 gb"><b>Connect</b> with us</h2>
                                    <ul className="socials-icons">
	                                    <li>
	                                        <a href="https://www.facebook.com/softgetix" target="_blank"><i className="fa fa-facebook fa-brands"></i></a>
	                                    </li>
	                                    <li>
                                          <a href="https://www.linkedin.com/company/softgetix-inc/" target="_blank"><i className="fa fa-linkedin fa-brands"></i></a>
	                                    </li>
	                                    <li>
                                          <a href="https://twitter.com/Binodofficial" target="_blank"><i className="fa fa-twitter fa-brands"></i></a>
	                                    </li>
	                                    <li>
                                          <a href="https://www.instagram.com/softgetix"target="_blank"><i className="fa fa-instagram fa-brands"></i> </a>
	                                    </li>
                                    </ul>
                                </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </Template>
    </>
  )
}

export default Get
