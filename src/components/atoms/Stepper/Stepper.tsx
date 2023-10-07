import React from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Stepper.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
const cx = createModuleStyleExtractor(styles);

const Stepper = () => {
  const { currentQuestion } = useLayout();
  // const { currentQuestion, setCurrentQuestion } = useLayout();

  // const nextHandler = () => {
  //   const next = {
  //     property0: "property1",
  //     property1: "loan0",
  //     loan0: "loan1",
  //     loan1: "detail0",
  //     detail0: "detail1",
  //     detail1: "wrap0",
  //     wrap0: "wrap1",
  //   };
  //   //@ts-ignore
  //   setCurrentQuestion(next[currentQuestion]);
  // };
  // const prevHandler = () => {
  //   const previous = {
  //     wrap1: "wrap0",
  //     wrap0: "detail1",
  //     detail1: "detail0",
  //     detail0: "loan1",
  //     loan1: "loan0",
  //     loan0: "property1",
  //     property1: "property0",
  //   };
  //   //@ts-ignore
  //   setCurrentQuestion(previous[currentQuestion]);
  // };
  return (
    <div>
      <div className={cx("questions_header")}>
        <div className={cx("circle-container")}>
          <div className={cx("parent-circle")}>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "loan1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "loan0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "property1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "property0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "property1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "loan0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "loan1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>

            <div className={cx(["parent-circle_text"])}>1</div>
          </div>
          <div className={cx("container-text")}>
            <p>Property</p>
          </div>
        </div>
        <div className={cx("parent-line-container")}>
          <div
            className={cx([
              currentQuestion === "property1"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "loan0" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "loan1" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "detail0"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "detail1"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap0" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap1" ? "active-child-line" : "child-line",
            ])}
          ></div>

          <div
            className={cx([
              currentQuestion === "property1"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
        </div>
        <div className={cx("circle-container")}>
          <div className={cx("parent-circle")}>
            <div
              className={cx([
                currentQuestion === "loan0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "loan1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>

            <div
              className={cx([
                currentQuestion === "loan1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>

            <div className={cx("parent-circle_text")}>2</div>
          </div>
          <div className={cx("container-text")}>
            <p>Loans</p>
          </div>
        </div>

        <div className={cx("parent-line-container")}>
          <div
            className={cx([
              currentQuestion === "loan1" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "detail0"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "detail1"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap0" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap1" ? "active-child-line" : "child-line",
            ])}
          ></div>
        </div>
        <div className={cx("circle-container")}>
          <div className={cx("parent-circle")}>
            <div
              className={cx([
                currentQuestion === "detail0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>

            <div
              className={cx([
                currentQuestion === "detail1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>

            <div className={cx("parent-circle_text")}>3</div>
          </div>
          <div className={cx("container-text")}>
            <p>Details</p>
          </div>
        </div>

        <div className={cx("parent-line-container")}>
          <div
            className={cx([
              currentQuestion === "detail1"
                ? "active-child-line"
                : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap0" ? "active-child-line" : "child-line",
            ])}
          ></div>
          <div
            className={cx([
              currentQuestion === "wrap1" ? "active-child-line" : "child-line",
            ])}
          ></div>
        </div>
        <div className={cx("circle-container")}>
          <div className={cx("parent-circle")}>
            <div
              className={cx([
                currentQuestion === "wrap0"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>
            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-top"
                  : "parent-circle_inside1",
              ])}
            ></div>

            <div
              className={cx([
                currentQuestion === "wrap1"
                  ? "active-circle-bottom"
                  : "parent-circle_inside2",
              ])}
            ></div>

            <div className={cx("parent-circle_text")}>4</div>
          </div>
          <div className={cx("container-text")}>
            <p>Wrap-up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
