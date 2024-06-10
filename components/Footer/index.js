import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';


const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 pl-10 laptop:p-0">
        <div>
          <h1 className="text-2xl  pl-10 text-bold">Contact.</h1>
          <div className="mt-10 pl-10">
            <div className="flex py-2 items-center text-xl tablet:text-2xl laptop:text-3xl laptopl:text-4xl font-bold">
              <FaEnvelope className="mr-2 py-2" />
              <span>Information - </span>
            </div>
            <div className="text-xl pl-10 tablet:text-2xl laptop:text-2xl laptopl:text-3xl font-bold">
              hello@smelly.digital
            </div>
            <div className="flex items-center text-xl tablet:text-2xl laptop:text-3xl laptopl:text-4xl font-bold mt-4">
              <FaPhone className="mr-2 py-2" />
              <span>Call Us - </span>
            </div>
            <div className="text-xl pl-10 tablet:text-2xl laptop:text-2xl laptopl:text-3xl font-bold">
              +44 7495782319
            </div>
            {/* <div className="mt-5">
              <Button type="primary" icon={<FaCalendarAlt />}>
                Schedule a call
              </Button>
            </div> */}
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
