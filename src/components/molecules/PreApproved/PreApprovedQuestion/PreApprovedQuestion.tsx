import React, { useState } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./PreApprovedQuestion.module.scss";
import Stepper from "@/src/components/atoms/Stepper/Stepper";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import InputQuestion from "../InputQuestion.tsx/InputQuestion";
import { IQuestion } from "@/src/context/types";
import SelectQuestion from "../SelectQuestion/SelectQuestion";
import RangeQuestion from "../RangeQuestion/RangeQuestion";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);

const PreApprovedQuestions = () => {
  const [current, setCurrent] = useState(0);
  const { setCurrentSwitchTab } = useLayout();

  const questions: IQuestion[] = [
    {
      id: 1,
      title: "What is your property’s address?",
      type: "input",
      inputlabel: [
        {
          name: "Street Address",
          placeholder: "123 Main Street",
        },
        {
          name: "Zip Code",
          placeholder: "90004",
        },
      ],
    },
    {
      id: 2,
      title: "What is the estimated value of your property?",
      type: "button",
      buttonLabel: ["Primary Residence", "Vacation Party", "Investment Party"],
    },
    {
      id: 3,
      title: "What is the estimated value of your property?",
      subTitle:
        "Use the slider to select the value of your home (it’s OK to estimate)",
      type: "range",
      rangLabel: "$150,00 - $40,000",
      rangeOne: "$ 50k",
      rangeTwo: "$ 2M+",
    },
    {
      id: 4,
      title: "Where are you in the home buying process?",
      type: "button",
      buttonLabel: [
        "Signed a purchase contract",
        "Found a home",
        "Looking to buy within one month",
        "Looking to buy in 1 to 3 months",
        "Looking to buy in 3 to 6 months",
        "Looking to buy in more than 6 months",
      ],
      buttonFlag: true,
    },
    {
      id: 5,
      title: "Are you actively working with a real estate agent?",
      type: "button",
      buttonLabel: ["Yes", "No"],
      footerLabel:
        "If you select “No” above, you may be contacted by a real estate agent.",
    },
    {
      id: 6,
      title: "Do you currently own a home?",
      type: "button",
      buttonLabel: [
        "Yes, I currently own a home",
        "No, I am currently renting",
        "No, I have other living arrangements",
      ],
    },
    {
      id: 7,
      title: "Is this your first time purchasing a home?",
      type: "button",
      buttonLabel: ["Yes", "No"],
    },
    {
      id: 8,
      title: "Have you or your spouse served in the US military?",
      subTitle:
        "Veterans and active US military may be eligible for a $0 down VA loan.",
      type: "button",
      buttonLabel: ["Yes", "No"],
    },
    {
      id: 9,
      title: "How much do you have for a down payment?",
      subTitle: "(It’s OK to estimate)",
      type: "range",
      rangLabel: "$0 (0% Down)",
      rangeOne: "0 %",
      rangeTwo: "100 %",
      footerLabel: "Why do you ask for this?",
    },
    {
      id: 10,
      title: "What is your current employment status?",
      type: "button",
      buttonLabel: [
        "Employed",
        "Self-Employed/1099 Independent Contractor",
        "Retired",
      ],
    },
    {
      id: 11,
      title: "What is your household gross (before taxes) annual income?",
      type: "button",
      buttonLabel: [
        "Less than $ 30,000",
        "$ 30,000 - $ 50,000",
        "$ 50,000 - $ 65,000",
        "$ 65,000 - $ 80,000",
        "$ 80,000 - $ 100,00",
        "More than $ 100,000",
      ],
      buttonFlag: true,
    },
    {
      id: 12,
      title: "What is your credit score?",
      type: "button",
      buttonLabel: [
        "Poor (619 and below)",
        "Fair (620 to 679)",
        "Good (680 to 719)",
        "Excellent (720+)",
      ],
      buttonFlag: true,
      creditScoreFlag: true,
      buttonText: "See Your Credit Score Range",
      buttonSubLabel:
        "Answer a few short questions, and we will show you the range your credit score is in. This will not impact your credit and can result in a more accurate match.",
      buttonSubLabel2: "or choose one of the ranges below:",
    },
    {
      id: 13,
      title: "Have you had a bankruptcy or foreclosure in the past 3 years?",
      type: "button",
      buttonLabel: ["Yes", "No"],
    },
    {
      id: 14,
      title: "What is your name?",
      type: "input",
      inputlabel: [
        {
          name: "First Name",
          placeholder: "Enter your first name",
        },
        {
          name: "Last Name",
          placeholder: "Enter your last name",
        },
      ],
    },
    {
      id: 15,
      title: "What is your phone number?",
      type: "input",
      inputlabel: [
        {
          name: "Phone Number",
          placeholder: "(   )   - ",
        },
      ],
      termsAndCondition: true,
      footerLabel: "Why do you ask for this?",
    },
    {
      id: 16,
      lastTitle: "One last thing!",
      title: "Looks like we need to confirm your phone number",
      type: "button",
      buttonLabel: ["Send Code Via Text", "Send code via Phone call"],
      footerLabel:
        "Enter your phone number and we'll send a verification code. We are requesting your consent to contact you via one of the methods above.",
    },
  ];

  const IncrementHandler = () => {
    setCurrent(current + 1);
  };
  const DecrementHandler = () => {
    setCurrent(current - 1);
  };
  const currentQuestion = questions[current];
  return (
    <div className={cx("main-container")}>
      <div className={cx("questions")}>
        <div className={cx("questions_inside")}>
          <div className={cx("questions_inside_stepper")}>
            <Stepper />
          </div>
          <div className={cx("questions_inside_container")}>
            {currentQuestion.type === "input" && (
              <InputQuestion data={currentQuestion} />
            )}
            {currentQuestion.type === "button" && (
              <SelectQuestion data={currentQuestion} />
            )}
            {currentQuestion.type === "range" && (
              <RangeQuestion data={currentQuestion} />
            )}
          </div>
        </div>
        <div className={cx("questions_buttons")}>
          {current === questions.length - 1 && (
            <Button modifier={ButtonModifier.PRIMARY}>Submit</Button>
          )}
          {current < questions.length - 1 && (
            <Button
              modifier={ButtonModifier.PRIMARY}
              onClick={IncrementHandler}
            >
              Next
            </Button>
          )}
          {current >= 1 && (
            <Button
              modifier={ButtonModifier.PRIMARY}
              onClick={DecrementHandler}
            >
              Back
            </Button>
          )}

          {current === 0 && (
            <Button
              modifier={ButtonModifier.PRIMARY}
              onClick={() => setCurrentSwitchTab("tabs")}
            >
              Back
            </Button>
          )}
        </div>
      </div>
      {currentQuestion.termsAndCondition && (
        <div className={cx("terms-and-conditions")}>
          <p>
            <span className={cx("terms-heading")}>CONSENT.</span> By proceeding,
            I consent to Mortgage Research Center, LLC’s{" "}
            <span className={cx("terms-links")}>privacy policy</span> and{" "}
            <span className={cx("terms-links")}>terms of use</span>
            and to my information being shared with, and receiving calls/texts,
            including marketing by autodialers and pre-recorded and artificial
            voice (at the phone no. I’ve provided), and email from, members of
            this{" "}
            <span className={cx("terms-links")}>
              network of advertisers
            </span>{" "}
            (and those who may be assisting any of them) as to my inquiry and
            other <span className={cx("terms-links")}>credit</span>
            or home-related matters, and also realtor.com® if I have indicated I
            am not currently working with a real estate agent, in case they can
            connect me with one. Msg/data rates may apply. This consent is not a
            condition of any purchase of any kind from anyone, and it applies
            even if I am on a corporate, state or national Do Not Call list. I
            agree that any of the information about me may be shared with
            realtor.com® and will be subject to its{" "}
            <span className={cx("terms-links")}>privacy policy.</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PreApprovedQuestions;
