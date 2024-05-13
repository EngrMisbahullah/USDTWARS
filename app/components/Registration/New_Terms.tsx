"use client";
import React, { useState } from "react";
import RegAuth1 from "./RegAuth1";
import SignIn from "@/app/components/Registration/SignIn";

export default function New_Terms() {
  const [showBefore, setShowBefore] = useState(true); // Initially showing New_Terms component

  const handleSignInClick = () => {
    setShowBefore(false); // Hide New_Terms component and show SignIn component
  };

  return (
    <div className="flex justify-center pt-5">
      {showBefore ? (
        <div className="w-80 h-full pb-1 lg:w-[500px] bg-[#203744] rounded-[5px] ">
          <div className="flex justify-between pt-2 pl-3 pr-3">
            <div className="text-white text-[13px] font-bold font-['Proxima Nova']">
              Register OAuth
            </div>

            <button onClick={() => setShowBefore(false)}>
              <img
                className="w-[23px] h-[23px] lg:w-[30px] lg:h-[30px]"
                src="/wallet/X.png"
                alt="Image"
              />
            </button>
          </div>

          <div className="flex items-center pt-5 space-x-3 pl-4">
            <button onClick={() => setShowBefore(false)}>
              <svg
                className="w-[15px] h-[12px]"
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.35897 1L2 4.5M2 4.5L6.35897 8M2 4.5H6.35897H12"
                  stroke="white"
                  strokeWidth="2" // Change to strokeWidth
                />
              </svg>
            </button>

            <div className="text-center text-zinc-100 text-[10px] lg:text-[15px] font-bold font-['Arial']">
              Step 2/2: Read and accept the terms and conditions
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <div className="w-[290px] lg:w-[450px] h-[264px] overflow-y-scroll bg-[#2E4452] rounded-[5px]">
           



            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              1. About USDTWARS
            </h1>
            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              1.1 USDTWARS at the heart of entertainment and chance, we have
              crafted a haven for thrill-seekers and game enthusiasts. Our story
              revolves around the exhilaration of winning and the camaraderie of
              competition.We are not just any game place; we are the ultimate
              destination for those who revel in the art of gaming.
            </p>

            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              2. Important Notice
            </h1>
            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              2.1 By registering on{" "}
              <span className="text-blue-500">www.USDTWARS.com</span>, you enter
              into a contract with us. and agree to be bound by the following:
            </p>
            <ol className="list-decimal pl-[36px]">
              <li className="pl-[18px] text-white text-[13px] font-normal font-['Arial']">
                These Terms and Conditions
              </li>
              <li className="pl-[18px] text-white text-[13px] font-normal font-['Arial']">
                Our Privacy Policy
              </li>
              <li className="pl-[18px] text-white text-[13px] font-normal font-['Arial']">
                The rules applicable to our gaming products, as further
                referenced in these Terms and Conditions (referred to as Terms
                and Conditions or Agreement)
              </li>
              <li className="pl-[18px] text-white text-[13px] font-normal font-['Arial']">
                The gaming specific rules. You are deemed to have accepted and
                understood all the terms by registering.
              </li>
            </ol>
            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              2.2 Please read this Agreement carefully to ensure you fully
              understand its contents. If you have any doubts regarding your
              rights and obligations as a result of accepting this Agreement,
              please consult a legal advisor in your jurisdiction before further
              using the website(s) and accessing its content. If you do not
              accept the terms, do not use, visit, or access any part of the
              website, including sub-domains, source code, and website APIs,
              whether visible or not.
            </p>

            {/* // Section 3 - General */}
            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              3. General
            </h1>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.1 When you register on{" "}
              <span className="text-blue-500">www.USDTWARS.com</span>, you (You,
              Your, Yourself, or the Player) enter into an agreement with
              USDTWARS.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.2 This Agreement should be read by you in its entirety before
              using USDTWARS services or products. Please note that the
              Agreement constitutes a legally binding agreement between you and
              USDTWARS.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.3 These Terms and Conditions take effect when you complete the
              registration process, which includes checking the box accepting
              these Terms and Conditions and successfully creating an account.
              By using any part of the website after account creation, you agree
              to these Terms and Conditions applying to the use of the website.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.4 We reserve the right to make amendments to these Terms and
              Conditions at any time and without advanced notice. If we make
              such amendments, we may take appropriate steps to bring these
              changes to your attention (e.g., via email or a notice on a
              prominent position on the website, along with the amended terms
              and conditions). However, it is your sole responsibility to check
              for any amendments, updates, and/or modifications. Your continued
              use of the website services after any such amendment to the Terms
              and Conditions will be considered as your acceptance and agreement
              to be bound by these amendments, updates, and/or modifications.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.5 In the event of a conflict between the terms of these Terms
              and Conditions and any of the game rules or other documents
              referred to in this Agreement, the terms of these Terms and
              Conditions shall prevail.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              3.6 These Terms and Conditions may be published in several
              languages for informational purposes and ease of access by
              players. The English version is the only legal basis of the
              relationship between you and us, and in the case of any
              discrepancy with respect to a translation of any kind, the English
              version of these Terms and Conditions shall prevail.
            </p>

            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              4. USDTWARS ACCOUNT
            </h1>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Registration
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.1 To play games on{" "}
              <span className="text-blue-500">www.USDTWARS.com</span>, you must
              first register a personal account with us (USDTWARS Account).
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.2 In order to register as a player with USDTWARS and use the
              Website, you must submit a personal application for account
              registration. The application for the USDTWARS Account must be
              submitted personally and requires you to provide personal
              information, including but not limited to email, full name, date
              of birth, and address.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.3 If the information specified in 4.2 is not provided or is
              found to be incomplete, inaccurate, or out-of-date at any point,
              USDTWARS reserves the right to suspend the USDTWARS Account
              registration and consider any subsequent deposits as invalid
              (along with voiding any winnings from such deposits). If a
              USDTWARS Account is suspended, you should contact customer support
              at <span className="text-blue-500">support@usdtwars.com</span>.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.4 All applicants must be at least 18 years old or meet the legal
              age of majority as determined by applicable laws, whichever age is
              greater. USDTWARS reserves the right to request proof of age from
              any Player and suspend their USDTWARS Account until satisfactory
              documentation is provided. USDTWARS takes the issue of underage
              and responsible addicting very seriously.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.5 USDTWARS will not accept registrations from individuals who:
              <br />
              a) Are under 18 years old or below the legal age of majority for
              gambling in their jurisdiction.
              <br />
              b) Reside in jurisdictions where gambling is illegal or not
              permitted. USDTWARS cannot verify the legality of the service in
              every jurisdiction, and it is the users responsibility to ensure
              that their use of the service complies with the law.
              <br />
              c) Provide misleading information or attempt to impersonate third
              parties.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.6 USDTWARS reserves the right to refuse any application for a
              USDTWARS Account at its sole discretion.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Know Your Customer
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.7 You represent and warrant that the information provided in
              your application form is true, up-to-date, and correct.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.8 USDTWARS reserves the right, at any time, to request any KYC
              (Know Your Customer) documentation it deems necessary to verify a
              Players identity and location. USDTWARS may restrict service,
              payments, or withdrawals until the players identity is
              sufficiently verified, or for any other reason at USDTWARS sole
              discretion. USDTWARS also reserves the right to disclose a Players
              information as required to comply with legal processes or as
              permitted by the privacy policy of USDTWARS, and by using the
              service, you acknowledge and consent to such disclosure.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Multiple Accounts
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.9 Only one USDTWARS Account is allowed per Player. If you
              attempt to open more than one USDTWARS Account under your name or
              any other name, or if you attempt to use the Website with another
              persons USDTWARS Account, USDTWARS is entitled to immediately
              close all your USDTWARS Accounts, retain all funds in those
              accounts, and ban you from future use of the Website.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.10 If USDTWARS has reason to believe that you have registered
              and/or used multiple USDTWARS Accounts or colluded with others
              using different USDTWARS Accounts, USDTWARS may deem these
              accounts as multiple accounts and suspend or close them. USDTWARS
              is also entitled to retain the funds until the player proves that
              they did not attempt to create multiple accounts.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.11 If you discover that you have more than one registered
              USDTWARS Account, you must notify us immediately. Failure to do so
              may result in your USDTWARS Account being blocked, and the funds
              retained.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              User Responsibility
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.12 It is your responsibility to ensure that your login details
              are kept secure, and you must not disclose your login details to
              anyone.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.13 We are not liable or responsible for any abuse or misuse of
              your USDTWARS Account by third parties due to your disclosure of
              your login details, whether intentional, accidental, active, or
              passive.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.14 You are prohibited from selling, transferring, or acquiring
              USDTWARS Accounts from or to other Players.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.15 You are responsible for reporting any errors regarding your
              account or games calculations as soon as you become aware of them.
              We reserve the right to declare games subject to such errors as
              null and void.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.16 You are responsible for all activities that occur under your
              account.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Security Features
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.17 We may introduce other security measures from time to time,
              and we encourage you to use them.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Suspension and Closure by USDTWARS
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.18 USDTWARS may close or suspend your USDTWARS Account if:
              <br />
              a) USDTWARS suspects fraudulent, collusive, illegal, unlawful, or
              improper use of the Website.
              <br />
              b) USDTWARS suspects unfair play, cheating, or taking unfair
              advantage of the service.
              <br />
              c) Requested by law enforcement, regulatory authorities, or the
              court, or if USDTWARS cannot verify your identity, profession, or
              source of funds as required by applicable regulations.
              <br />
              d) You are in breach of these Terms and Conditions, applicable
              regulations, or exhibit signs of compulsive problem addicting
              without self-exclusion.
              <br />
              e) USDTWARS believes that any of the events mentioned in (a) to
              (e) may have occurred or are likely to occur.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.19 If USDTWARS closes or suspends your USDTWARS Account for any
              of the reasons in 4.19, you may be liable for any claims, losses,
              liabilities, damages, costs, and expenses incurred by USDTWARS and
              will indemnify and hold USDTWARS harmless.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.20 In the circumstances referred to in 4.19, USDTWARS may void
              any games played by you following such actions or withhold and/or
              retain any amounts that would have been paid to you (including
              winnings) as permitted by law.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.21 We reserve the right to suspend or terminate your account at
              any time, with or without notice, if we suspect your account has
              been compromised or is being used in violation of our Terms of
              Service.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.22 If USDTWARS closes your USDTWARS Account, you will be
              informed of the available means to withdraw the remaining balance
              on your USDTWARS Account.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Our Liability
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.23 We are not responsible for any loss or damage resulting from
              unauthorized access to your account.
            </p>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              4.24 We are not responsible for any loss or damage resulting from
              your failure to keep your login details secure and private.
            </p>

            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              5. YOUR WARRANTIES
            </h1>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Capacity
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              5.1 Prior to your use of the Service and on an ongoing basis you
              represent, warrant, covenant and agree that: a) You are over 18 or
              such other legal age of majority as determined by any laws which
              are applicable to you, whichever age is greater; b) You have full
              capacity to enter into a legally binding agreement with us and you
              are not restricted by any form of limited legal capacity; c) You
              are not diagnosed or classified as a compulsive or problem
              gambler; d) You are not currently self-excluded from any gambling
              site or gambling premises. You will inform USDTWARS immediately if
              you enter into a self-exclusion agreement with any gambling
              provider.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Jurisdiction
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              e) You are accessing{" "}
              <span className="text-blue-500">USDTWARS.com</span> from a
              jurisdiction in which it is legal to do so; f) You will not use
              our services while located in any jurisdiction that prohibits the
              placing and/or accepting of playing online games; g) You accept
              and acknowledge that we reserve the right to detect and prevent
              the use of prohibited techniques, including but not limited to
              fraudulent transaction detection, automated registration and
              signup, gameplay and screen capture techniques. These steps may
              include, but are not limited to, examination of Players device
              properties, detection of geo-location and IP masking, transactions
              and blockchain analysis;
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Funds & Tax
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              h) You are solely responsible for reporting and accounting for any
              taxes applicable to you under relevant laws for any winnings that
              you receive from us; i) You are solely responsible for any
              applicable taxes which may be payable on cryptocurrency awarded to
              you through your using the Service; j) There is a risk of losing
              cryptocurrency when using the Service and that USDTWARS has no
              responsibility to you for any such loss; k) You will not deposit
              funds which originate from criminal or other unauthorized
              activity; l) You will not deposit funds using payment methods that
              do not belong to You; m) All the funds deposited shall exclusively
              be used for Services available on the Website; n) You will not
              withdraw or try to withdraw to a payment methods that do not
              belong to You; o) You understand that by participating in the
              Services available on the Website, You take the risk of losing
              money deposited. p) You accept and acknowledge that the value of
              cryptocurrency can change dramatically depending on the market
              value; q) USDTWARS shall not be treated as a financial
              institution;
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              Others
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              r) Your use of the Service is at your sole option, discretion and
              risk; s) You will not conduct criminal activities through the
              USDTWARS Account; t) All information that you provide to us during
              the term of validity of this agreement is true, complete, correct,
              and that you shall immediately notify us of any change of such
              information; u) You participate in the Games strictly in your
              personal and non-professional capacity and participate for
              recreational and entertainment purposes only; v) You participate
              in the Games on your own behalf and not on the behalf of any other
              person; w) You have only one account with us and agree to not to
              open any more accounts with us; x) The telecommunications networks
              and Internet access services required for you to access and use
              the Service are entirely beyond the control of USDTWARS and
              USDTWARS shall have no liability whatsoever for any outages,
              slowness, capacity constraints or other deficiencies affecting the
              same; y) You will not be involved in any fraudulent, collusive,
              fixing or other unlawful activity in relation
            </p>

            <h2 className="text-white text-[13px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              5.2 In case of a breach of any of the representations, warrants or
              covenants mentioned in 5.1, USDTWARS reserves the right to close
              or suspend Your USDTWARS account at its own discretion and void
              any games to the extent applicable by law.
            </h2>

            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              6. USDTWARS WARRANTIES
            </h1>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              6.1 USDTWARS Warrants
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              a) manage funds belonging to the Player in a secure and
              appropriate manner; and b) manage personal information pertaining
              to the Player in accordance with applicable law, and in accordance
              with its Privacy Policy.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              6.2 Software Warranties
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              The software is provided as is without any warranties, conditions,
              undertakings or representations, express or implied, statutory or
              otherwise. USDTWARS hereby excludes all implied terms,
              representations, conditions and warranties (including any of
              merchantability, merchantable quality, satisfactory quality and
              fitness for any particular purpose). USDTWARS does not warrant
              that: (i) the Website and Services will meet Your requirements;
              (ii) the Website and Services will not infringe any third party’s
              intellectual property rights; (iii) the operation of the Website
              and Services will be error-free or uninterrupted; (iv) any defects
              in the Website and Services will be corrected; or (v) the Website
              or the servers are virus-free.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              6.3 Contact Information
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              USDTWARS can be contacted by email on{" "}
              <span className="text-blue-500">support@usdtwars.com</span>. In
              the event that USDTWARS, in its sole discretion, deems that Your
              behaviour, email, or otherwise, has been abusive or derogatory
              towards any of USDTWARS’s or its Affiliates or third-party service
              provider’s employees, USDTWARS shall have the right to block or
              terminate Your USDTWARS Account.
            </p>

            <h1 className="text-white text-[17px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7. DEPOSITS
            </h1>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.1 Funding Your USDTWARS Account
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.1.1 You may participate in any Game only if you have sufficient
              funds on your USDTWARS Account for such participation. For that
              purpose, you shall use the payment methods available on the
              Website to deposit your funds. USDTWARS will not extend any credit
              for your participation in any Game.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.2 Deposit Methods
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.2.1 You must deposit funds to Your USDTWARS Account using the
              payment methods available at{" "}
              <span className="text-blue-500">www.USDTWARS.com</span>.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.3 Legal Funds
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.3.1 You shall ensure that funds that You deposit into your
              USDTWARS Account are not tainted with any illegality and, in
              particular, do not originate from any illegal activity or source.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.4 Funding Your Account
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.4.1 To deposit funds into your USDTWARS Account, you can
              transfer funds from crypto-wallets under your control or through
              any other payment methods available on{" "}
              <span className="text-blue-500">USDTWARS.com</span>. Deposits can
              only be made with your own funds.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.5 Purpose of Funds
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.5.1 You should only deposit money into Your account for the
              purpose of You using such money to playing games on the Website.
              USDTWARS is entitled to suspend or close Your account if we
              reasonably believe that You are depositing funds without any
              intention to playing. In such circumstances, we may also report
              this activity to relevant authorities.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.6 Ownership of Payment Methods
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.6.1 You acknowledge and understand that funding Your USDTWARS
              Account can only be funded by payment methods owned by You.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.7 Unlawful Funding
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.7.1 You further understand, agree, and acknowledge that if
              USDTWARS discovers, detects, and/or identifies that You: a)
              Funded/are funding Your USDTWARS Account using third-party payment
              methods; and/or b) Funded/are funding Your USDTWARS Account with
              funds that are tainted with illegality, such activity will be
              deemed as constituting a violation of the Terms of Service
              amounting to fraud, and by extension: i) USDTWARS reserves the
              right, at its own discretion, to suspend or close Your USDTWARS
              Account; and ii) USDTWARS reserves the right, at its own
              discretion, to cancel, reverse, or adjust any transactions and to
              forfeit funds deposited and/or winnings generated from the
              deposited funds.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.8 Minimum Deposit
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.8.1 USDTWARS can set at its own discretion a minimum deposit
              amount. The minimum deposit amount can be changed at all times at
              USDTWARS’s discretion and will be identified on the website.
              Please be aware that depending on the payment method used by You,
              additional fees might be charged by the payment providers.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.9 Payment Methods
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.9.1 The payment methods made available to you and the minimum
              and maximum deposit limit can be found in the wallet section on
              the Site. Applicable service fees may be applied and changed. Some
              payment methods may not be available in all countries.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.10 Deposit Processing
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.10.1 Deposits are immediately processed, and the updated balance
              is shown in the USDTWARS Account instantly whenever a payment
              service provider is used. USDTWARS does not take responsibility
              for any delays caused due to its payment system or due to delays
              caused by any third party. Note that: a) some payment methods may
              include additional fees. In this case, the fee will be clearly
              visible for you in the cashier. b) your bank or payment service
              provider may charge you additional fees for deposits or currency
              conversion according to their terms and conditions and your user
              agreement.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.11 Identity Verification
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.11.1 We reserve the right to use additional procedures and means
              to verify your identity when processing deposits into your
              USDTWARS Account.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.12 No Transfer of Funds
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.12.1 Funds cannot be transferred from your USDTWARS Account to
              the USDTWARS Account of another Player.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.13 Refusal of Deposits
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.13.1 USDTWARS can refuse any deposits at its own discretion.
              Users that have their accounts blocked or suspended shall refrain
              from depositing at{" "}
              <span className="text-blue-500">www.USDTWARS.com</span>.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              7.14 Consequences of Unauthorized Deposits
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              7.14.1 In the event that a player tries to deposit when their
              account is blocked or suspended, USDTWARS will have the right to
              retain the funds.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.1 Withdrawals from Your USDTWARS Account
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.1.1 USDTWARS reserves the right to refuse any withdrawal by a
              Player from their USDTWARS Account until: a) the Player’s identity
              has been verified, and USDTWARS has confirmed the withdrawal is
              being made by a holder of the USDTWARS Account; b) the withdrawal
              is being transferred to an account of which the Player is a legal
              holder; c) any additional information requested by USDTWARS has
              been provided; and d) the Player has complied with the minimum
              playing requirement for each deposit.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.2 Investigation of Accounts
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.2.1 USDTWARS reserves all rights to investigate Your account and
              gaming activity. If USDTWARS reasonably suspects that Your account
              or gaming activity has violated these terms of service or
              applicable laws or regulations, it may, in its sole discretion,
              delay or decline further deposits, withdrawals, and/or game play
              while it conducts its investigation. You acknowledge and accept
              that USDTWARS may not be in a position to provide an explanation
              as to the nature of its investigation.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.3 Withdrawal Method
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.3.1 All withdrawals must be done through the same payment method
              chosen by you when placing a deposit, unless we decide otherwise
              or are unable to do so. If you deposit using a number of payment
              methods, we reserve the right to split your withdrawal across such
              payment methods and process each part through the respective
              payment method at our discretion and in accordance with anti-money
              laundering policies and regulation.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.4 Mistaken Winnings
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.4.1 If we mistakenly credit your USDTWARS Account with winnings
              that do not belong to you, whether due to a technical error in the
              pay-tables, or human error or otherwise, the amount will remain
              our property and will be deducted from your USDTWARS Account. If
              you have withdrawn funds that do not belong to you prior to us
              becoming aware of the error, the mistakenly paid amount will
              (without prejudice to other remedies and actions that may be
              available at law) constitute a debt owed by you to us. In the
              event of an incorrect crediting, you are obliged to notify us
              immediately by email.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.5 Withdrawal to Cryptocurrency Wallet
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.5.1 Crypto withdrawals will be made to your stated
              cryptocurrency wallet address when making a valid withdrawal
              request.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.6 KYC Verification
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.6.1 USDTWARS reserves the right to carry out additional KYC
              verification procedures for any withdrawal. Players who wish to
              recover funds held in a closed, locked, or excluded account are
              advised to contact{" "}
              <span className="text-blue-500">support@usdtwars.com</span>.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              8.7 Money Laundering Prevention
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              8.7.1 All transactions shall be checked to prevent money
              laundering. If a player becomes aware of any suspicious activity
              relating to any of the Games on the Website, s/he must report this
              to USDTWARS immediately. USDTWARS may suspend, block, or close a
              USDTWARS Account and withhold funds if requested to do so in
              accordance with the Prevention of Money Laundering Act or on any
              other legal basis requested by any state authority. You
              acknowledge that the funds in your account are consumed instantly
              when playing, and we do not provide a return of goods, refunds, or
              retrospective cancellation of your account.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              9.1 Protection of Your USDTWARS Funds
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              9.1.1 Any funds You deposit with us in Your USDTWARS Account,
              along with any winnings, are held for You in separate customer
              bank accounts / crypto wallet for the sole and specific purpose
              for You to play games and to settle any fees or charges that You
              might incur in connection with the use of our Services. This means
              Your funds are protected from being used for any other purpose.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              9.2 Charge-backs and Offsetting of Debts
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              9.2.1 If we incur any charge-backs, reversals, denial of payments,
              or any loss suffered by USDTWARS as a consequence thereof due to
              causes attributable to You in respect of Your USDTWARS Account, we
              reserve the right to charge You for the relevant amounts incurred.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              9.3 Offsetting Balances
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              9.3.1 We may, at any time, offset any positive balance on Your
              account against any amounts owed by You to USDTWARS.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.1 USDTWARS Promotions
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.1.1 USDTWARS, at its sole discretion, might offer from time to
              time, a number of Bonuses and Promotions.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.2 Eligibility for Promotions
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.2.1 Upon successful registration for a USDTWARS Account, You
              may be eligible to receive USDTWARS Promotions and Bonuses. By
              accepting this agreement and registering for a USDTWARS Account on
              the Website, You are also acknowledging and accepting to be bound
              by the rules and regulations associated with any Promotions and
              Bonuses offered to You by USDTWARS.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.3 Bonus Terms and Conditions
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.3.1 All promotions, bonuses, or special offers are subject to
              the express terms of any bonus offered on the Website(s) and
              promotion-specific terms and conditions, if applicable, and any
              bonus credited to Your account must be used in adherence to such
              terms and conditions. By accepting a promotion, bonus, or special
              offer available on the Website(s), You consent to the terms and
              conditions of such promotion, bonus, or special offer and
              acknowledge that games must always be played with cash balances
              before bonus balances can be used to play. We reserve the right to
              withdraw any promotion, bonus, or special offer at any time.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.4 Activation and Expiry of Bonuses
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.4.1 By activating a Bonus or Promotion, You confirm that You
              also agree to the applicable terms and conditions. 10.4.2 No
              promotion, bonus, or special offer will be accepted or honored by
              USDTWARS following the expiration date of the promotion, bonus, or
              special offer, unless USDTWARS in its sole discretion chooses to
              do so for any particular customer, promotion, bonus, or special
              offer. Expiration dates will be set forth in the specific rules or
              terms and conditions of the particular promotion, bonus, or
              special offer. Furthermore, USDTWARS reserves the right, in its
              sole discretion, to change or modify any policy with respect to
              the earning or expiration of bonuses.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.5 Forfeiture and Deactivation of Bonuses
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.5.1 Once forfeited or deactivated, the Bonus will no longer be
              available to You (and cannot be reactivated at any time
              thereafter). The amount of any Bonus Funds that have already been
              credited to your USDTWARS Account Balance will remain available to
              You.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.6 Bonus Abuse and Fraud
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.6.1 In the event that USDTWARS believes a Player of the Service
              is abusing or attempting to abuse a bonus or other promotion or is
              likely to benefit through abuse or lack of good faith from a
              policy adopted by USDTWARS, then USDTWARS may, at its sole
              discretion, deny, withhold, or withdraw from any Player any bonus
              or promotion, or terminate that Player’s access to the Services,
              the Software, and/or lock that Player’s account, either
              temporarily or permanently.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.7 Limitation on Multiple Accounts
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.7.1 You may only open one (1) account on the Website. The
              opening of multiple accounts on the Website for the purpose of
              accumulating bonuses, promotions, special offers, or otherwise,
              shall be considered abusive behavior.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              10.8 USDTWARS Rights
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              10.8.1 USDTWARS reserves the right to remove bonuses from all
              inactive accounts or accounts that are identified as “bonus
              abusers”. 10.8.2 USDTWARS reserves the right to cancel all bonuses
              that have not been claimed within the claiming period or 60 days,
              the shorter of the two. 10.8.3 USDTWARS reserves the right to
              cancel any bonus at its sole discretion.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              11. AUTHORITY/TERMS OF SERVICE
            </h2>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              11.1 Governance of USDTWARS 11.1.1 You agree to the game rules
              described on the USDTWARS.com website. USDTWARS retains authority
              over the issuing, maintenance, and closing of the Service. The
              decision of USDTWARS management, concerning any use of the
              Service, or dispute resolution, is final and shall not be open to
              review or appeal.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              12. PROHIBITED USES
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              12.1 Intended Use
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              12.1.1 The Service is intended solely for the Users personal use.
              The User is only allowed to play for his/her personal
              entertainment. Users may not create multiple accounts for the
              purpose of collusion, and/or abuse of service.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              12.2 Anti-Money Laundering and Sanctions
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              12.2.1 USDTWARS expressly prohibits and rejects the use of the
              Service for any form of illicit activity, including money
              laundering, terrorist financing, or trade sanctions violations,
              consistent with various jurisdictions laws, regulations, and
              norms. To that end, the Service is not offered to individuals or
              entities subject to United States, European Union, or other global
              sanctions or watch lists. By using the Service, you represent and
              warrant that you are not so subject.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              12.3 Restricted Jurisdictions
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              12.3.1 Persons located in or residing in Afghanistan, Australia,
              Belarus, Belgium, Colombia, Côte d Ivoire, Cuba, Curaçao, Czech
              Republic, Democratic Republic of the Congo, Denmark, France,
              Germany, Greece, Iran, Iraq, Italy, Liberia, Libya, Lithuania,
              Netherlands, North Korea, Ontario, Portugal, Serbia, Slovakia,
              South Sudan, Spain, Sudan, Syria, Switzerland, United Kingdom,
              United States, Zimbabwe (the Prohibited Jurisdictions) are not
              permitted to make use of the Service. For the avoidance of doubt,
              the foregoing restrictions on engaging in real-money play from
              Prohibited Jurisdictions applies equally to residents and citizens
              of other nations while located in a Prohibited Jurisdiction. Any
              attempt to circumvent the restrictions on play by any persons
              located in a Prohibited Jurisdiction or Restricted Jurisdiction is
              a breach of this Agreement. An attempt at circumvention includes,
              but is not limited to, manipulating the information used by
              USDTWARS to identify your location and providing USDTWARS with
              false or misleading information regarding your location or place
              of residence.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              12.4 Geo-Blocking and Jurisdiction Restrictions
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              12.4.1 The attempt to manipulate your real location through the
              use of VPN, proxy, or similar services or through the provision of
              incorrect or misleading information about your place of residence,
              with the intent to circumvent geo-blocking or jurisdiction
              restrictions, constitutes a breach of Clause 5 of this Terms of
              Service.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              13. YOUR EQUIPMENT
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              13.1 Technology and Internet Connection
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              13.1.1 Your computer equipment or mobile device and internet
              connection may affect the performance and/or operation of the
              Website. USDTWARS does not guarantee that the Website will operate
              without faults or errors or that USDTWARS services will be
              provided without interruption. USDTWARS does not accept any
              liability for any failures or issues that arise due to Your
              equipment, internet connection, or internet or telecommunication
              service provider (including, for example, if You are unable to
              playing or to view or receive certain information in relation to
              particular events).
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              13.2 Mobile Device Usage
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              13.2.1 For customers using a mobile device for playing, please
              note that USDTWARS will not be responsible for any damage to, or
              loss of data from the mobile device that the software is installed
              on, and will also not be responsible for any call, data, or other
              charges incurred while using the software. 13.2.2 Due to limited
              display sizes on mobile devices, the mobile experience might
              differ slightly from other platforms. Differences might include,
              but are not limited to, the location of certain information on the
              platform and game names not being visible on all game pages.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              14. FAIR USE
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              14.1 Recreational Use
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              14.1.1 The Website and Services may only be used for recreational
              purposes by playing games. 14.1.2 You must not use the Website for
              the benefit of a third party or for any purpose that is illegal,
              defamatory, abusive, or obscene, or which USDTWARS considers
              discriminatory, fraudulent, dishonest, or inappropriate. USDTWARS
              may report to the authorities any activity which it considers to
              be suspicious and/or in breach of this paragraph. 14.1.3 If
              USDTWARS has a reasonable suspicion that You are involved in
              fraudulent, dishonest, or criminal acts, as set out under
              applicable laws, via or in connection with the Website or
              Services, USDTWARS may seek criminal and contractual sanctions
              against You. USDTWARS will withhold payment to any customer where
              any of these are suspected or where the payment is suspected to be
              for the benefit of a third party. 14.1.4 You shall indemnify and
              shall be liable to pay USDTWARS, on demand, all costs, charges, or
              losses sustained or incurred by us and our affiliates (including
              any direct, indirect, or consequential losses, loss of profit, and
              loss of reputation) in respect of all Claims arising directly or
              indirectly from Your fraudulent, dishonest, or criminal acts while
              using the Website or Services 14.1.5 Furthermore, USDTWARS
              reserves the right not to accept, process, and/or honor games
              where it would be forbidden, unlawful, or illegal under applicable
              law or regulation to do so.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15. SOFTWARE AND TECHNOLOGY ISSUES
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.1 Software and Technology Usage
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.1.1 In order for You to use the Website and Services, You may
              need to download some software. Also, certain third-party product
              providers may require You to agree to additional terms and
              conditions governing the use of their products that are available
              on or through the Website. If You do not accept those third-party
              terms and conditions, do not use the relevant third-party
              software. USDTWARS does not accept any liability in respect of any
              third-party software.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.2 Software Use Limitations
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.2.1 You are only permitted to use any and all software made
              available to You via the Website for the purpose of using the
              Website and Services and, save to the extent permitted by
              applicable law, for no other purposes whatsoever.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.3 License and Usage Rights
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.3.1 We hereby grant to You a personal, non-exclusive,
              non-transferable right to use the Website for the sole purpose of
              accessing and using the Services on the Website, in accordance
              with these Terms and Conditions. This right to use our Website
              will be immediately terminated once Your user registration is
              cancelled for any reason, and specifically, but not limited to, if
              You make use of that right with the aim of generating a parallel
              enterprise based on our Website or our products, or with the aim
              of making use of an automated service or software analyzing,
              capturing, or somehow using the information shown on our Website.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.3 License and Usage Rights
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.3.2 You are not permitted to:
              <ul className="list-disc list-inside pl-[20px]">
                <li>
                  a) install or load the software that forms part of the Website
                  onto a server or other networked device or take other steps to
                  make the software available via any form of bulletin board,
                  online service, or remote dial-in or network to any other
                  person;
                </li>
                <li>
                  b) sub-license, assign, rent, lease, loan, transfer, or copy
                  (except as expressly provided elsewhere in these Terms and
                  Conditions) Your right to use the Website, or the software
                  that forms part of the Website, or make or distribute copies
                  of the same;
                </li>
                <li>
                  c) enter, access or attempt to enter or access or otherwise
                  bypass USDTWARS’s security system or interfere in any way
                  (including but not limited to, robots or similar devices) with
                  the products or the Website or attempt to make any
                  modifications to the software and/or any features or
                  components thereof;
                </li>
                <li>
                  d) copy or translate any user documentation provided online or
                  in electronic format.
                </li>
              </ul>
              e) In addition, except to the minimum extent permitted by
              applicable law in relation to computer programs, You are not
              permitted to: (i) translate, reverse engineer, decompile,
              disassemble, modify, create derivative works based on, or
              otherwise modify the Website; or (ii) reverse engineer, decompile,
              disassemble, modify, adapt, translate, make any attempt to
              discover the source code of the software that forms part of the
              Website or to create derivative works based on the whole or on any
              part of the Website.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.4 Ownership and Use of Software
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.4.1 You do not own the software that forms part of the Website.
              Such software is owned and is the exclusive property of USDTWARS
              or a third-party software provider company (any such third-party
              provider, the Software Provider). Any software and accompanying
              documentation which have been licensed to USDTWARS are proprietary
              products of the Software Provider and protected throughout the
              world by copyright law. Your use of the software does not give You
              ownership of any intellectual property rights in the software.
              15.4.2 The software is provided as is without any warranties,
              conditions, undertakings, or representations, express or implied,
              statutory or otherwise. USDTWARS hereby excludes all implied
              terms, conditions, and warranties, including any of
              merchantability, merchantable quality, satisfactory quality, and
              fitness for any particular purpose, completeness, or accuracy of
              the services or the software or infringement of applicable laws
              and regulations. USDTWARS does not warrant or condition that: (i)
              the software will meet Your requirements; (ii) the software will
              not infringe any third party’s intellectual property rights; (iii)
              the operation of the software will be error-free or uninterrupted;
              (iv) any defects in the software will be corrected; or (v) the
              software or the servers are virus-free.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.5 Error Handling and Liability
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.5.1 In the event of communications or system errors occurring
              in connection with the settlement of accounts or other features or
              components of the software, neither USDTWARS nor the Software
              Provider will have any liability to You or to any third party in
              respect of such errors. USDTWARS reserves the right in the event
              of such errors to remove all relevant products from the Website
              and take any other action to correct such errors. 15.5.2 You
              hereby acknowledge that how You use the software is outside of
              USDTWARSs control. Accordingly, You install and/or use the
              software at Your own risk. USDTWARS will not have any liability to
              You or to any third party in respect of Your receipt of and/or use
              of the software.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.6 Confidentiality of Software
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.6.1 The software may include confidential information that is
              secret and valuable to the Software Provider and/or USDTWARS. You
              are not entitled to use or disclose that confidential information
              other than strictly in accordance with these Terms and Conditions.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.7 Service Availability
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.7.1 USDTWARS shall not be liable if, for any reason, the
              Website is unavailable at any time or for any period. USDTWARS
              reserves the right to make changes or corrections to or to alter,
              suspend, or discontinue any aspect of the Website and the content
              or services or products available through it, including Your
              access to it.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              15.8 Misuse and Unauthorized Activities
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              15.8.1 You must not misuse the Website by introducing viruses,
              trojans, worms, logic bombs, or other material that is malicious
              or technologically harmful. In particular, You must not access the
              Website without authority, interfere with, damage, or disrupt the
              Website or any part of it, any equipment, or network on which the
              Website is hosted, any software used in connection with the
              provision of the Website, or any equipment, software, or website
              owned or used by a third party. You must not attack our Website
              via a denial-of-service attack. We will not be liable for any loss
              or damage caused by a distributed denial-of-service attack,
              viruses, or other technologically harmful material that may infect
              Your computer equipment, computer programs, data, or other
              proprietary material arising due to Your use of the Website,
              software, or Your downloading of any material posted on it or on
              any website linked to it.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              16. THIRD PARTY CONTENT
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              16.1 Third-Party Feeds, Commentaries, and Content
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              16.1.1 USDTWARS receives feeds, commentaries, and content from a
              number of suppliers. Certain third-party product providers may
              require You to agree to additional terms and conditions governing
              the use of their feeds, commentaries, and content. If You do not
              accept the relevant third-party terms and conditions, You agree
              not to use the relevant feeds, commentaries, or content.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              16.2 Liability for Third-Party Content
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              16.2.1 USDTWARS does not accept any liability in respect of any
              third-party feeds, commentaries, and content.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              16.3 External Links
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              16.3.1 Where the Website contains links to third-party websites
              and resources, these links are provided for Your information only.
              USDTWARS has no control over the content of these sites or
              resources and accepts no liability for them or for any loss or
              damage that may arise from Your use of them. The inclusion of a
              link to a third-party website does not constitute an endorsement
              of that third party’s website, product, or services, if
              applicable.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              17. ERRORS
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              17.1 Error Handling and Liability
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              17.1.1 USDTWARS will not be liable in the event You try to or
              obtain an advantage from any errors in respect of playing on the
              Website if You were deliberately acting in bad faith, including
              where: (i) there is an obvious error in the relevant odds,
              spreads, handicap, totals, cash-out; (ii) USDTWARS incorrectly
              calculates or pays a settlement amount, including where a game is
              Cashed Out for the full settlement amount, or a game is made void
              incorrectly, where ‘Void if the player does not start’ was
              selected at game; or (iii) any error occurs in a random number
              generator or pay tables included, incorporated, or used in any
              game.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              18. BREACH
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              18.1 Breach Consequences
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              18.1.1 Without prejudice to any other rights, if a User breaches
              in whole or in part any provision contained herein, USDTWARS
              reserves the right to take such action as it sees fit, including
              terminating this Agreement or any other agreement in place with
              the User and/or taking legal action against such User. 18.1.2 You
              agree to fully indemnify, defend, and hold harmless USDTWARS and
              its shareholders, directors, agents, and employees from and
              against all claims, demands, liabilities, damages, losses, costs
              and expenses, including legal fees and any other charges
              whatsoever, howsoever caused, that may arise as a result of: a)
              your breach of this Agreement, in whole or in part; b) violation
              by you of any law or any third party rights; and c) use by you of
              the Service.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              19. LIMITATIONS AND LIABILITY
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              19.1 Limitation of Liability
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              19.1.1 Under no circumstances, including negligence, shall
              USDTWARS be liable for any special, incidental, direct, indirect,
              or consequential damages whatsoever (including, without
              limitation, damages for loss of business profits, business
              interruption, loss of business information, or any other pecuniary
              loss) arising out of the use (or misuse) of the Service even if
              USDTWARS had prior knowledge of the possibility of such damages.
            </p>
            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              19.1.2 Nothing in this Agreement shall exclude or limit USDTWARS
              liability for death or personal injury resulting from its
              negligence.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              20. INTELLECTUAL PROPERTY
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              20.1 Ownership and Intellectual Property Rights
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              20.1.1 USDTWARS and its licensors are the sole holders of all
              rights in and to the Service and code, structure and organization,
              including copyright, trade secrets, intellectual property, and
              other rights. You may not, within the limits prescribed by
              applicable laws: (a) copy, distribute, publish, reverse engineer,
              decompile, disassemble, modify, or translate the website; or (b)
              use the Service in a manner prohibited by applicable laws or
              regulations (each of the above is an Unauthorised Use). USDTWARS
              reserves any and all rights implied or otherwise, which are not
              expressly granted to the User hereunder, and retains all rights,
              title, and interest in and to the Service. You agree that you will
              be solely liable for any damage, costs, or expenses arising out of
              or in connection with the commission by you of any Unauthorized
              Use. You shall notify USDTWARS immediately upon becoming aware of
              the commission by any person of any Unauthorized Use and shall
              provide USDTWARS with reasonable assistance with any
              investigations it conducts in light of the information provided by
              you in this respect.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              20.2 Trademarks and Copyrights
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              20.2.1 The term USDTWARS, its domain names, and any other
              trademarks or service marks used by USDTWARS as part of the
              Service the Trade Marks, are solely owned by USDTWARS. In
              addition, all content on the website, including, but not limited
              to, the images, pictures, graphics, photographs, animations,
              videos, music, audio, and text (the Site Content), belongs to
              USDTWARS and is protected by copyright and/or other intellectual
              property or other rights. You hereby acknowledge that by using the
              Service, you obtain no rights in the Site Content and/or the Trade
              Marks, or any part thereof. Under no circumstances may you use the
              Site Content and/or the Trade Marks without USDTWARS prior written
              consent. Additionally, you agree not to do anything that will harm
              or potentially harm the rights, including the intellectual
              property rights of USDTWARS.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              21. DISPUTES
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              21.1 Complaints and Disputes Resolution
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              21.1.1 If a User wishes to make a complaint, please contact
              USDTWARSs customer service team at support@usdtwars.com. Should
              any dispute not be resolved to your satisfaction, you may pursue
              remedies in the governing law jurisdiction set forth below.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              22. AMENDMENT
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              22.1 Agreement Amendments
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              22.1.1 USDTWARS reserves the right to update or modify this
              Agreement or any part thereof at any time or otherwise change the
              Service without notice, and you will be bound by such an amended
              Agreement upon posting. Therefore, we encourage you to check the
              terms and conditions contained in the version of the Agreement in
              force at such time. Your continued use of the Service shall be
              deemed to attest to your agreement to any amendments to the
              Agreement.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              23. GOVERNING LAW
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              23.1 Jurisdiction and Governing Law
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              23.1.1 The Agreement and any matters relating hereto shall be
              governed by and construed in accordance with the laws of Curaçao.
              You irrevocably agree that, subject as provided below, the courts
              of Curaçao shall have exclusive jurisdiction in relation to any
              claim, dispute, or difference concerning the Agreement and any
              matter arising therefrom and irrevocably waive any right that it
              may have to object to an action being brought in those courts or
              to claim that the action has been brought in an inconvenient forum
              or that those courts do not have jurisdiction. Nothing in this
              clause shall limit the right of USDTWARS to take proceedings
              against you in any other court of competent jurisdiction, nor
              shall the taking of proceedings in any one or more jurisdictions
              preclude the taking of proceedings in any other jurisdictions,
              whether concurrently or not, to the extent permitted by the law of
              such other jurisdiction.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              24. SEVERABILITY
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              24.1 Validity of Severable Provisions
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              24.1.1 If a provision of this Agreement is or becomes illegal,
              invalid, or unenforceable in any jurisdiction, that shall not
              affect the validity or enforceability in that jurisdiction of any
              other provision hereof or the validity or enforceability in other
              jurisdictions of that or any other provision hereof.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              25. ASSIGNMENT
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              25.1 Assignment of Agreement
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              25.1.1 USDTWARS reserves the right to assign this agreement, in
              whole or in part, at any time without notice. The User may not
              assign any of his/her rights or obligations under this Agreement.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26. MISCELLANEOUS
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26.1 Waiver of Breach
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              26.1.1 No waiver by USDTWARS of any breach of any provision of
              this Agreement (including the failure of USDTWARS to require
              strict and literal performance of or compliance with any provision
              of this Agreement) shall in any way be construed as a waiver of
              any subsequent breach of such provision or of any breach of any
              other provision of this Agreement.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26.2 No Third-Party Beneficiaries
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              26.2.1 Nothing in this Agreement shall create or confer any rights
              or other benefits in favor of any third parties not party to this
              Agreement.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26.3 No Additional Relationships
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              26.3.1 Nothing in this Agreement shall create or be deemed to
              create a partnership, agency, trust arrangement, fiduciary
              relationship, or joint venture between you and USDTWARS.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26.4 Assignment of Agreement
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              26.4.1 USDTWARS may assign, transfer, charge, sub-license, or deal
              in any other manner with this Agreement or sub-contract any of its
              rights and obligations under this Agreement to any other party.
            </p>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              26.5 Entire Agreement
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              26.5.1 This Agreement constitutes the entire understanding and
              agreement between you and USDTWARS regarding the Service and
              supersedes any prior agreement, understanding, or arrangement
              between you and USDTWARS.
            </p>

            <h2 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              27. COMPLAINTS
            </h2>

            <h3 className="text-white text-[15px] font-bold font-['Arial'] pt-[8px] pl-[9px]">
              27.1 Complaint Resolution
            </h3>

            <p className="pl-[27px] pt-[8px] text-white text-[13px] font-normal font-['Arial']">
              27.1.1 If you have a complaint to make regarding our services, you
              may contact our customer support via email (support@usdtwars.com).
              We will endeavor to resolve the matter promptly.
            </p>
















            </div>
          </div>

          <div className="flex justify-start lg:pl-8 pl-5 pt-2">
            <div className="flex justify-center items-center space-x-2 ">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  id=""
                  className="w-[15px] h-[15px] bg-[#203744]"
                />
              </div>
              <div className="text-center text-white text-[11px] lg:text-[15px] font-normal font-['Arial']">
                I have read and agree to the terms and conditions
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button className="w-[290px] h-[33px] lg:w-[400px] lg:h-[40px] bg-[#02FF67] rounded-[3px] flex justify-center items-center">
              <h1 className="w-[105.12px] text-center text-black text-xs lg:text-[15px] font-bold font-['Arial']">
                Play Now
              </h1>
            </button>
          </div>

          <div className="flex justify-center pt-2">
            <div className="flex flex-row items-center space-x-1">
              <button>
                <div className="text-center text-[#ABB5CD] text-[15px] font-normal font-['Arial']">
                  Already have an account?
                </div>
              </button>
              <button onClick={handleSignInClick}> {/* Modified */}
                <div className="text-center text-[#EEEEEE] text-[18px] font-black font-['Arial']">
                  Sign In
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SignIn /> // If showBefore is false, render SignIn component
      )}
    </div>
  );
}
