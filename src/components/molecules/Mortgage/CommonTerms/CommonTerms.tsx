import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./CommonTerms.module.scss";
const cx = createModuleStyleExtractor(styles);

const CommonTerms = () => {
  const terms = [
    {
      heading: "Bi-weekly Mortgage",
      detail:
        "A bi-weekly mortgage is a mortgage in which the borrower makes half of their monthly mortgage payment every two weeks, rather than paying the full payment amount once every month. So if you paid monthly and your monthly mortgage payment was $1,000, then for a year you would make 12 payments of $1,000 each, for a total of $12,000. But with a bi-weekly mortgage, you would make 26 payments of $500 each, for a total of $13,000 for the year. This can help the borrower pay off their mortgage loan sooner and reduces the total amount of interest paid over the life of the loan. ",
    },
    {
      heading: "Escrow",
      detail:
        "Escrow is a legal arrangement where a third party temporarily holds money on behalf of a buyer and seller in a real estate transaction.",
    },
    {
      heading: "Extra mortgage payment",
      detail:
        "An extra payment is when you make a payment in addition to your regular monthly mortgage payment. Extra payments can help pay off your mortgage loan sooner.",
    },
    {
      heading: "Homeowners insurance",
      detail:
        "Homeowners insurance is a type of property insurance. It protects you from damage to your home or possessions. Homeowners insurance also provides liability insurance if accidents occur in your home or on the property.",
    },
    {
      heading: "Loan amount",
      detail:
        "The loan amount is the amount of money you plan to borrow from a lender.",
    },
    {
      heading: "Loan-to-value ratio",
      detail:
        "The loan-to-value ratio (or. LTV) is a factor looked at by lenders when qualifying a borrower for a mortgage loan. The LTV compares the amount of a loan to the value of the asset being financed: the amount you are borrowing divided by the price of the property being purchased or financed. So the LTV is 66.66% on a $300,000 house where the amount being borrowed to purchase it is $200,000 (meaning the down payment is $100,000). The lower your LTV the easier it will be to qualify for a mortgage loan. For example, many conventional loans require that your LTV be no higher than 80%. Of course, the greater your down payment amount, the better/higher your LTV will be.",
    },
    {
      heading: "Long-term mortgage",
      detail:
        "A long-term mortgage is a loan with a longer length of time. Long-term mortgages typically have higher rates but offer more protection against rising interest rates. Penalties for breaking a long-term mortgage can be higher for this type of term.      ",
    },
    {
      heading: "Loan-to-value ratio",
      detail:
        "The loan-to-value ratio (or. LTV) is a factor looked at by lenders when qualifying a borrower for a mortgage loan. The LTV compares the amount of a loan to the value of the asset being financed: the amount you are borrowing divided by the price of the property being purchased or financed. So the LTV is 66.66% on a $300,000 house where the amount being borrowed to purchase it is $200,000 (meaning the down payment is $100,000). The lower your LTV the easier it will be to qualify for a mortgage loan. For example, many conventional loans require that your LTV be no higher than 80%. Of course, the greater your down payment amount, the better/higher your LTV will be.",
    },
    {
      heading: "Lump sum payment",
      detail:
        "A lump-sum payment is when you make a one-time payment toward your mortgage, in addition to your regular payments. How much of a lump sum payment you can make without penalty depends on the original mortgage principal amount.",
    },
    {
      heading: "Monthly mortgage payment",
      detail:
        "Your monthly mortgage payment has four components: principal, interest, taxes, and insurance.",
    },
    {
      heading: "Mortgage rates",
      detail:
        "A mortgage rate is the rate of interest charged on a mortgage. The lender determines the mortgage rate. They can be either fixed, staying the same for the mortgage term or variable, fluctuating with a reference interest rate.",
    },
    {
      heading: "Mortgage refinance",
      detail:
        "Mortgage refinance is the process of replacing your current mortgage with a new loan. Often people do this to get better borrowing terms like lower interest rates. Refinancing requires a new loan application with your existing lender or a new one. Your lender will then re-evaluate your credit history and financial situation.",
    },
    {
      heading: "Mortgage term",
      detail:
        "A mortgage term is the length of time you have to repay your mortgage loan. Mortgage terms can range from 15 to 30 years or even longer.",
    },
    {
      heading: "Pre-tax amount",
      detail:
        "Pre-tax is your total income before you pay income taxes but after your deductions. It is also known as your gross income.",
    },
    {
      heading: "Short-term mortgage",
      detail:
        "A long-term mortgage is a loan with a shorter length of time. Short-term mortgages typically have lower interest rates. Short-term mortgages offer less protection against changing interest rates because you need to renew them more frequently.",
    },
  ];
  return (
    <div className={cx("common-term")}>
      <h1>Common Terms</h1>
      {terms.map((term, index) => (
        <div className={cx("common-term_inside")} key={`index_${index}`}>
          <h2>{term.heading}</h2>
          <p>{term.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default CommonTerms;
