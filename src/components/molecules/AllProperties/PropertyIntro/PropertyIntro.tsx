import FillterButtonIcon from "@/src/assets/svg/FillterButtonIcon";
import IntroSearchIcon from "@/src/assets/svg/IntroSearchIcon";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import { Input } from "@/src/components/atoms/Input";
import DownArrow from "@/src/assets/svg/DownArrow";
import DownButtonArrow from "@/src/assets/svg/DownButtonArrow";
import React, { useState } from "react";
import { createModuleStyleExtractor } from "../../../../utils/css";
import styles from "./PropertyIntro.module.scss";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
const cx = createModuleStyleExtractor(styles);

const PropertyIntro = () => {
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
  const [bed, setBed] = useState<boolean>(false);
  const Bed = ["1 BedRoom", "2 BedRoom", "3 BedRoom", "4 BedRoom"];
  const [transactionType, setTransactionType] = useState<boolean>(false);
  const TransactionType = [
    "TransactionType1",
    "TransactionType2",
    "TransactionType3",
    "TransactionType4",
  ];
  const [listingStatus, setListingStatus] = useState<boolean>(false);
  const ListingStatus = [
    "ListingStatus1",
    "ListingStatus2",
    "ListingStatus3",
    "ListingStatus4",
  ];

  const [moreFillter, setMoreFillter] = useState<boolean>(false);

  const Fillterss = [
    {
      label: "Commute",
      list: [
        "ListingStatus1",
        "ListingStatus2",
        "ListingStatus3",
        "ListingStatus4",
      ],
    },
    {
      label: "Max HOA fees per month",
      list: [],
    },
    {
      label: "Days on Property Post",
      list: [
        "ListingStatus1",
        "ListingStatus2",
        "ListingStatus3",
        "ListingStatus4",
      ],
    },
    {
      label: "Expand Search",
      list: [],
    },
    {
      label: "Home Size",
      list: [],
    },
    {
      label: "Lot Size",
      list: [],
    },
    {
      label: "Home Age",
      list: [],
    },
    {
      label: "Stories",
      list: [],
    },
    {
      label: "Garage",
      list: [],
    },
    {
      label: "Parking",
      list: [],
    },
    {
      label: "Heating",
      list: [],
    },
  ];
  const [selectedList, setSelectedList] = useState<number | null>(null);

  return (
    <div className={cx("intro")}>
      <div className={cx("intro_container")}>
        <div className={cx("intro_container_text")}>
          <h1>Popular Properties in Pakistan</h1>
          <p>Home/Popular Properties</p>
        </div>
        <div className={cx("intro_container_search")}>
          <div className={cx("intro_container_search_inside")}>
            <Input
              type="text"
              value=""
              placeholder="Search for City, House, Zip Code etc "
              className="intro-search"
            />
            <div className={cx("intro_container_search_inside_buttons")}>
              <span>
                <IntroSearchIcon />
              </span>
            </div>
          </div>
        </div>
        <div className={cx("intro_container_fillter")}>
          <div className={cx("intro_container_fillter_location")}>
            <div
              className={cx("dropdown")}
              onClick={() => setLocation(!location)}
            >
              <p>Location</p>
              <span>
                <DownArrow />
              </span>
              {location && (
                <DropDown
                  dropdown={Location}
                  className="all-properties-dropdown"
                />
              )}
            </div>
          </div>
          <div className={cx("intro_container_fillter_type")}>
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
                  className="all-properties-dropdown"
                />
              )}
            </div>
          </div>
          <div className={cx("intro_container_fillter_price")}>
            <div
              className={cx("dropdown")}
              onClick={() => setPriceRange(!priceRange)}
            >
              <p>Price Range</p>
              <span>
                <DownArrow />
              </span>
              {priceRange && (
                <DropDown
                  dropdown={PriceRange}
                  className="all-properties-dropdown"
                />
              )}
            </div>
          </div>
          <div className={cx("intro_container_fillter_price")}>
            <div
              className={cx("dropdown")}
              onClick={() => setTransactionType(!transactionType)}
            >
              <p>Transaction Type</p>
              <span>
                <DownArrow />
              </span>
              {transactionType && (
                <DropDown
                  dropdown={TransactionType}
                  className="all-properties-dropdown"
                />
              )}
            </div>
          </div>
          <div className={cx("intro_container_fillter_price")}>
            <div className={cx("dropdown")} onClick={() => setBed(!bed)}>
              <p>Bed</p>
              <span>
                <DownArrow />
              </span>
              {bed && (
                <DropDown dropdown={Bed} className="all-properties-dropdown" />
              )}
            </div>
          </div>
          <div className={cx("intro_container_fillter_price")}>
            <div
              className={cx("dropdown")}
              onClick={() => setListingStatus(!listingStatus)}
            >
              <p>Listing Status</p>
              <span>
                <DownArrow />
              </span>
              {listingStatus && (
                <DropDown
                  dropdown={ListingStatus}
                  className="all-properties-dropdown"
                />
              )}
            </div>
          </div>
        </div>
        <div className={cx("intro_container_button")}>
          <div className={cx("intro_container_button_search")}>
            <Button modifier={ButtonModifier.PRIMARY}>Search</Button>
          </div>
          <div className={cx("intro_container_button_fillter")}>
            <Button
              modifier={ButtonModifier.PRIMARYIntro}
              onClick={() => setMoreFillter(!moreFillter)}
            >
              <div>
                <FillterButtonIcon /> More Filters
              </div>
              <DownButtonArrow />
            </Button>
            {moreFillter && (
              <div className={cx(["dropdown-list"])}>
                <ul>
                  {Fillterss.map((item, index) => (
                    <>
                      <li
                        key={`index-${index}`}
                        onClick={() =>
                          setSelectedList(selectedList === index ? null : index)
                        }
                      >
                        {item.label}
                        <span>
                          <DownArrow />
                        </span>
                      </li>
                      {selectedList === index && (
                        <ul className={cx("multi-dropdown")}>
                          {item.list.map((list) => (
                            <li key={`index-${index}`}>{list}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyIntro;
