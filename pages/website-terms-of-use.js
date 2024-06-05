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

const Terms = () => {
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
              <h1 className="text-3xl font-bold">Website Terms of Use</h1>
             
            
              <div className="mt-5">
              Access to the Website is conditioned on these terms of use (the “Terms of Use”), which you are hereby deemed to have accepted.

The Website and its content (“Content”) is owned by RPS Finance, its affiliates and/or third parties. The Website and its Content, including any research published by RPS Finance, is protected by one or more copyrights, patents, database rights, trademarks, service marks and/or other intellectual property and proprietary rights that are owned by RPS Finance, our affiliates and/or third parties. You may not decompose, decompile, reverse engineer, disassemble or otherwise deconstruct all or any portion of the Website or its Content. You may not publish, broadcast, retransmit, reproduce, repackage, frame, commercially exploit, create any derivative of or otherwise redistribute all or any portion of the Website or its Content, including any research published by RPS Finance, without RPS Finance&apos;s express written permission. You may print copies of any accessible portion of the Website only for your own personal use. You may discuss information you learn from the Website with your financial, legal or tax advisors, and others with whom you share investment decisions. You may not remove any copyright, trademark, or other proprietary notice or legend contained on (or printed from) the Website. You may not post, publish, broadcast, commercially exploit or otherwise use RPS Finance&apos;s logo or trademark for any purpose without RPS Finance&apos;s express written permission.

You are solely responsible for maintaining the confidentiality and security of your password. You accept full responsibility for any use of your password. You must notify us immediately of any actual or suspected loss, theft, or unauthorized use of your password. You may not disclose any Content that is contained within the password protected portion of the Website to any third party, except to your financial, legal, or tax advisors, and others with whom you share investment decisions. We are not obligated to inquire as to the authority or propriety of any use of or action taken under your password. We will not be responsible for any loss to you that arises from such use or action or from your failure to comply with these provisions.

You represent and warrant that you have full authority and all rights necessary to enter into and fully perform all of your obligations pursuant to these terms; you have not and you will not enter into any agreement or perform any act which might contravene the purposes and/or effects of the Terms of Use; and you will not delete any Content.

Certain Content contained on the Website has been obtained from third-party sources, including companies in which funds managed by RPS Finance have invested. While taken from sources believed to be reliable, RPS Finance has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation. We do not endorse the opinions of, or warrant the accuracy of facts or other Content contributed by, any third party. Any projections, estimates, forecasts, targets, prospects and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others.

There are various risks you assume in relying on the Content. Dated Content speaks only as of the date indicated. We make reasonable efforts to provide accurate Content, but at times we may not promptly update or correct the Website even if we are aware it is inaccurate, outdated, or otherwise inappropriate. We may change all or any portion of the Website at any time without notice to you. You agree we are not liable for any action you take or decision you make in reliance on any Content.

We are not liable for any technological problems and any impact they may have. All or any portion of the Website may not be available and may not function properly at any time. We make reasonable efforts to avoid technological problems, but at any time, the Website may have and may cause technological problems such as viruses and other damaging computer programming routines or engines. We take reasonable security precautions when using the Internet, telephone, or other means to transport data or other communications, but we disclaim liability for any interception of data or communications.

We make reasonable efforts to ensure that the Website is secure, but we do not guarantee the security of the Website. We are not liable for any damage or injury caused by the performance or failure of performance of all or any portion of the Website. We are not liable for any defects, delays, or errors in or resulting from your use of the Website.

The Website may link to or integrate with other websites operated or content provided by third parties, and such other websites may link to this Website. RPS Finance has no control over any such other websites or their content and we are not responsible for information on any third-party website that is referenced in, or accessible or connected by hyperlink to, the Website. If you access any third-party website through the Website or otherwise, you do so at your own risk. Hyperlinks to or from the Website do not constitute an endorsement of such websites, the content of the websites, or the operators of the websites. RPS Finance is providing these links to you only as a convenience. RPS Finance will have no liability arising out of or related to such websites or their content. You release and hold RPS Finance harmless from any and all liability arising from your use of any third-party website or service.

We have the right, but not the obligation, to monitor and record activity on the Website and respond as we deem appropriate. We may monitor and record activity on the Website for any reason or for no reason. We may investigate any complaint or reported violation of our policies. We may report any activity we suspect may violate any law or regulation to regulators, law enforcement officials, or other persons or entities we deem appropriate. We may issue warnings, suspend, or terminate use of the Website, deny access to all or part of the Website or take any other action we deem appropriate.

WE DISCLAIM ALL WARRANTIES WITH RESPECT TO THE WEBSITE THAT THE LAW ALLOWS US TO DISCLAIM.

THE WEBSITE IS PROVIDED “AS IS” AND “AS AVAILABLE.”
WE DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, OF ANY KIND WITH RESPECT TO THE SITE INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY AND PROPRIETARY RIGHTS.
WITHOUT LIMITING OUR GENERAL DISCLAIMER, WE DO NOT WARRANT THE AVAILABILITY, ACCURACY, COMPLETENESS, TIMELINESS, FUNCTIONALITY, RELIABILITY, SEQUENCING, OR SPEED OF DELIVERY OF THE WEBSITE OR ANY PART OF THE CONTENT.
OUR LIABILITY WITH RESPECT TO THE WEBSITE IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
IN NO EVENT WILL WE OR ANY OF OUR AFFILIATES, AGENTS, OR EMPLOYEES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES HOWEVER CAUSED ARISING OUT OF THE TERMS OF USE, THE WEBSITE, OR THE INABILITY TO USE THE WEBSITE.
OUR LIABILITY IS LIMITED EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF THE DAMAGES YOU SUFFER OR IF ANY REMEDY YOU HAVE FAILS IN ITS ESSENTIAL PURPOSE.
UNDER ALL CIRCUMSTANCES, THE MAXIMUM LIABILITY OF RPS Finance, ITS AGENTS, AND EMPLOYEES TO ANY USER OF THE WEBSITE WITH RESPECT TO THE WEBSITE IS $100.
THIS DISCLAIMER OF LIABILITY APPLIES TO ANY AND ALL DAMAGES OR INJURY, INCLUDING THOSE CAUSED BY ANY FAILURE OF PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS, COMMUNICATION LINE FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO, ALTERATION OF OR USE OF ANY ASSET, WHETHER FOR BREACH OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION.

You will be responsible for any liability to us that arises out of your breach of the Terms of Use or your use of the Website. You agree to indemnify, defend, and hold harmless RPS Finance and our affiliates, agents, employees, and third party sources from and against any and all suits, losses, claims, demands, liabilities, damages, costs and expenses (including reasonable attorneys&apos; fees) that arise from or relate to: (i) your use of the Website, (ii) your breach of the Terms of Use or any representation, warranty, or covenant made by you in the Terms of Use, (iii) your violation of any applicable law, statute, ordinance, regulation, or of any third party&apos;s rights, or (iv) claims asserted by third parties that, if proven, would place you in breach of representations, warranties, covenants, or other provisions contained in the Terms of Use.

The Terms of Use will be governed by and construed and enforced in accordance with the laws of California, without regard to conflicts of law principles. The courts of California will have exclusive jurisdiction to adjudicate any dispute arising out of the Terms of Use, except with regard to injunctive relief. No person shall bring a putative or certified class action to arbitration nor seek to enforce any pre-dispute arbitration agreement against any person who has initiated a putative class action in court or who is a member of a putative class who has not opted out of the class with respect to any claims encompassed by the putative class action until: (i) the class certification is denied; or (ii) the class is decertified; or (iii) the customer is excluded from the class by the court. Such forbearance to enforce an agreement to arbitrate shall not constitute a waiver of any rights under the Terms of Use except to the extent stated herein.

You will be bound by revised versions of the Terms of Use that we post on the Website. Modifications will be effective immediately upon posting unless we indicate otherwise. Your use of the Website indicates your full acceptance of the Terms of Use in its then-current form each time you use the Website.

You are bound by certain other general conditions. We may assign the Terms of Use in whole or in part at any time without your consent. You may not assign the Terms of Use or delegate any of your obligations under the Terms of Use. Any purported assignment of the Terms of Use in violation of the Terms of Use is void. If any provision of the Terms of Use is found invalid or unenforceable, that provision shall be enforced to the maximum extent possible and the remaining provisions of the Terms of Use shall remain in full force and effect. The Terms of Use constitute the entire understanding, and supersedes all other understandings, between you and us concerning the subject matter hereof.

Copyright Infringement Notification Procedures

If you believe that any Content violates yours or a third party&apos;s copyright, please notify us by providing the following information:

An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;
A description of the copyrighted work that you claim has been infringed;
A description of where the material that you claim is infringing is located on the Website;
Your address, telephone number and email address;
A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; and
A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or duly authorized to act on the copyright owner&apos;s behalf.
              </div>
            </div>

            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Terms;