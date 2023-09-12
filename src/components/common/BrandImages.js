import { Fragment } from "react";
import Image from "next/image";
const BrandImages = () => {
    return (
<Fragment>

        <div className="col-md-12 font-weight-bold text-center pb-2">
            <p>OUR DEVELOPED APPLICATIONS HAVE BEEN FUNDED BY:</p>
        </div>
        <div className="row banner_company">
            <div className="col">
                <Image src="/company_logos/google_venture_logo.webp" alt="google_venture_logo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/Index_Ventures_Logo.webp" alt="Index_Ventures_Logo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/ms-ventures.webp" alt="ms-ventures" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/Novo-Ventures-logo.webp" alt="Novo-Ventures-logo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col"> 
                <Image src="/company_logos/Qualcomm-Logo.webp" alt="Qualcomm-Logo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col"> 
                <Image src="/company_logos/salesforce-vc.webp" alt="salesforce-vc" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col"> 
                <Image src="/company_logos/TrinityLogo.webp" alt="TrinityLogo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/y-combinator_logo.webp" alt="y-combinator_logo" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/Pfizer-Venture.webp" alt="Pfizer-Venture" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/Cisco-Investments.webp" alt="Cisco-Investments" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/johnson-innovation.webp" alt="johnson-innovation" className="img-shadow" width="120" height="73" />
            </div>
            <div className="col">
                <Image src="/company_logos/Intel-Capital.webp" alt="Intel-Capital" className="img-shadow" width="120" height="73" />
            </div>
         </div>

</Fragment>
    );
}
export default BrandImages;