import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const Disclosures = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    // if (!showResume) {
    //   router.push("/");
    // }
  }, []);
  return (
    <>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">Important disclosures</h1>
             
            
              <div className="mt-5">
              This website (the “Website”) is intended solely to provide general information about RPS Finance Operations LP (together with its affiliates, “RPS Finance,” “we,” “our,” or “us”), its services to entrepreneurs and management teams, and its personnel.

Nothing on the Website is directed at or should be relied upon by any investors or prospective investors in any vehicle managed by RPS Finance. RPS Finance does not intend to solicit or make its investment advisory services available to the general public. Under no circumstances should any information provided on this Website be considered as an offer soliciting the purchase or sale of any security or interest in any pooled investment vehicle sponsored by RPS Finance nor should it be construed as an offer to provide investment advisory services. Such offers or solicitations will be made separately and only by means of the confidential offering documents of the specific pooled investment vehicles which should be read in their entirety, and only to those who, among other requirements, meet certain qualifications under federal securities laws.

Nothing on this Website constitutes investment, accounting, tax or legal advice or is a recommendation that you purchase, sell or hold any security or other investment or that you pursue any investment style or strategy. Views expressed in “posts” by any individuals (including any podcasts, videos, and social media) are those of the individual quoted therein and are not the views of RPS Finance. Any opinions expressed on this Website are subject to change.

Any investments or portfolio companies described or referred to on this Website are not representative of all investments made by funds managed by RPS Finance and there can be no assurance that the investments described are, or will be, profitable or that other investments made in the future will have similar character or results.
               </div>
            </div>
            
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Disclosures;