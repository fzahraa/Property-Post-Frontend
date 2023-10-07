import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./GuideBlogs.module.scss";
import GuideBlogItem from "@/src/components/atoms/GuideBlogItem/GuideBlogItem";
const cx = createModuleStyleExtractor(styles);

const GuideBlogs = () => {
  const GuideBlog = [
    {
      image: "/images/blogImage.png",
      title:
        " How to qualify for a Mortgage: Income, Credit, and Debt requirements for a loan",
      subTitle:
        "  To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        "What loan down payment do you Need? A first-time borrower’s guide (No Calculator Required)",
      subTitle:
        "To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        " How to qualify for a Mortgage: Income, Credit, and Debt requirements for a loan",
      subTitle:
        "  To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        "What loan down payment do you Need? A first-time borrower’s guide (No Calculator Required)",
      subTitle:
        "To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        " How to qualify for a Mortgage: Income, Credit, and Debt requirements for a loan",
      subTitle:
        "  To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        "What loan down payment do you Need? A first-time borrower’s guide (No Calculator Required)",
      subTitle:
        "To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        " How to qualify for a Mortgage: Income, Credit, and Debt requirements for a loan",
      subTitle:
        "  To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.",
      label: "Learn More",
    },
    {
      image: "/images/blogImage.png",
      title:
        "What loan down payment do you Need? A first-time borrower’s guide (No Calculator Required)",
      subTitle:
        "To get a loan from a lender to buy property you need a good credit score, decent debt-to-income ratio, and a handle on how much house you can really afford.how much house you can really afford.",
      label: "Learn More",
    },
  ];
  return (
    <div className={cx("guide-blog")}>
      <div className={cx("guide-blog_container")}>
        {GuideBlog.map((data, index) => (
          <GuideBlogItem data={data} key={`index_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default GuideBlogs;
