import CommercialIcon from "@/src/assets/svg/CommercialIcon";
import FillterIcon from "@/src/assets/svg/FillterIcon";
import HomeIcon from "@/src/assets/svg/HomeIcon";
import IntroSearchIcon from "@/src/assets/svg/IntroSearchIcon";
import { Input } from "@/src/components/atoms/Input";
import MortgageCalculatorButton from "@/src/components/atoms/MortgageCalculatorButton/MortgageCalculatorButton";
import { useLayout } from "@/src/components/hooks/useLayout";
import { IntoButton } from "@/src/components/Context/applyoutContext";
import DownArrow from "@/src/assets/svg/DownArrow";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./Intro.module.scss";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import { FC, useState } from "react";
const cx = createModuleStyleExtractor(styles);
export interface IIntro {
  flag: boolean;
}

const Intro: FC<IIntro> = ({ flag }) => {
  const { currentIntroBtn, setCurrentIntroBtn } = useLayout();

  const handleClick = (id: IntoButton) => {
    setCurrentIntroBtn(id);
  };
  const residentialIcon =
    currentIntroBtn === "residential" ? "#000000" : "#ffffff";
  const commercialIcon =
    currentIntroBtn === "commercial" ? "#000000" : "#ffffff";

  const [location, setLocation] = useState<boolean>(false);
  const Location = ["location1", "location2", "location3", "location4"];
  const [propertyType, setPropertyType] = useState<boolean>(false);
  const PropertyType = ["Property1", "Property2", "Property3", "Property4"];
  const [priceRange, setPriceRange] = useState<boolean>(false);
  const PriceRange = [
    "PriceRange1",
    "PriceRange2",
    "PriceRange3",
    "PriceRange4",
  ];
  return (
    <div className={cx("intro")}>
      <div className={cx("intro_container")}>
        <div className={cx("intro_container_text")}>
          <h1>Discover a Place You Will Love To Live</h1>
          <p>
            Lorem ipsumaute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={cx("intro_container_calculator")}>
          <MortgageCalculatorButton />
        </div>
        <div className={cx("intro_container_search")}>
          <div className={cx("intro_container_search_button")}>
            <div
              className={cx([
                currentIntroBtn === "residential"
                  ? "active"
                  : "intro_container_search_button_left",
              ])}
              onClick={() => handleClick("residential")}
            >
              <span>
                <HomeIcon color={residentialIcon} />
              </span>
              <p>Residential</p>
            </div>
            <div
              className={cx([
                currentIntroBtn === "commercial"
                  ? "active"
                  : "intro_container_search_button_right",
              ])}
              onClick={() => handleClick("commercial")}
            >
              <span>
                <CommercialIcon color={commercialIcon} />
              </span>
              <p>Commercial</p>
            </div>
          </div>

          <div className={cx("intro_container_search_inside")}>
            <Input
              type="text"
              value=""
              placeholder="Search for City, House, Zip Code etc "
              className="intro-search"
            />
            <div className={cx("intro_container_search_inside_buttons")}>
              <span>
                <FillterIcon />
              </span>
              <span>
                <IntroSearchIcon />
              </span>
            </div>
          </div>
          <div
            className={cx([
              flag ? "hide-fillters" : "intro_container_search_fillter",
            ])}
          >
            <div className={cx("intro_container_search_fillter_location")}>
              <div
                className={cx(["dropdown", "location-dropdown"])}
                onClick={() => setLocation(!location)}
              >
                <p>Location</p>
                <span>
                  <DownArrow />
                </span>
                {location && (
                  <DropDown dropdown={Location} className="intro-dropdown" />
                )}
              </div>
            </div>
            <div className={cx("intro_container_search_fillter_type")}>
              <div
                className={cx("dropdown")}
                onClick={() => setPropertyType(!propertyType)}
              >
                <p>Property Type</p>
                <span>
                  <DownArrow />
                </span>
                {propertyType && (
                  <DropDown
                    dropdown={PropertyType}
                    className="intro-dropdown"
                  />
                )}
              </div>
            </div>
            <div className={cx("intro_container_search_fillter_price")}>
              <div
                className={cx(["dropdown", "price-range-dropdown"])}
                onClick={() => setPriceRange(!priceRange)}
              >
                <p>Price Range</p>
                <span>
                  <DownArrow />
                </span>
                {priceRange && (
                  <DropDown dropdown={PriceRange} className="intro-dropdown" />
                )}
              </div>
            </div>
          </div>
          {flag && <div className={cx("filler-padding")}></div>}
        </div>
      </div>
    </div>
  );
};

export default Intro;
