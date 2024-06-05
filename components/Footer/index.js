import React from "react";
import Socials from "../Socials";
import Link from "next/link";
// import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <span className="text-1xl tablet:text-2xl laptop:text-3xl laptopl:text-4xl text-bold">
            Information - </span>
            <span className="text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl text-bold">info@rps.finance
            </span>
            <br />
            <span className="text-1xl tablet:text-2xl laptop:text-3xl laptopl:text-4xl text-bold">
Investor Inquiries - </span>
<span  className="text-1xl tablet:text-2xl laptop:text-2xl laptopl:text-3xl text-bold">inv_inquiries@rps.finance</span>
            {/* <Button type="primary">Schedule a call</Button> */}
          </div>
            <div className="mt-10">
              <Socials />
            </div>
        </div>
      </div>
      <p className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        
        <Link href="/website-terms-of-use">
          <a className="underline underline-offset-1">Website terms of use</a>
        </Link> {" "} | {" "} 
        <Link href="/important-disclosures">
          <a className="underline underline-offset-1">Important disclosures</a>
        </Link>
      </p>
    </>
  );
};

export default Footer;
