import AreaIcon from "@/src/assets/svg/AreaIcon";
import BathIcon from "@/src/assets/svg/BathIcon";
import BedIcon from "@/src/assets/svg/BedIcon";
import FavouriteIcon from "@/src/assets/svg/FavouriteIcon";
import LocationTargetIcon from "@/src/assets/svg/LocationTargetIcon";
import { createModuleStyleExtractor } from "@/src/utils/css";
import ExportedImage from "next-image-export-optimizer";
import { ISingleCard } from "@/src/context/types";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./SingleCardItem.module.scss";
import { useRouter } from "next/router";
import MenuIcon from "@/src/assets/svg/MenuIcon";
import Modal from "../Modal/Modal";
import { useLayout } from "../../hooks/useLayout";
import { useOnClickOutside } from "../../hooks/UseClickOutside";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { disableBodyScroll } from "@/src/utils/common";
import ModalCloseIcon from "@/src/assets/svg/ModalCloseIcon";
import { Button, ButtonModifier } from "../Button";
const cx = createModuleStyleExtractor(styles);

const SingleCardItem: FC<{
  card: ISingleCard;
  flag: boolean;
  options?: boolean;
  label?: boolean;
  buttonFlag?: boolean;
}> = ({ card, flag, options, label = true, buttonFlag }) => {
  const route = useRouter();
  const { setCurrentListing, setCurrentId, setCurrentSubListing } = useLayout();
  const Options = [
    {
      name: "Edit",
      action: () => {
        setCurrentListing("edit");
        setCurrentSubListing("edit");
        setCurrentId(card.id);
      },
    },
    { name: "Remove", action: () => setIsRemove(!isRemove) },
    {
      name: "View details & Stats",
      action: () => {
        route.push(`/post-detail/${card.id}`);
      },
    },
    {
      name: "Change Status",
      action: () =>
        card.listingType === "Featured"
          ? setIsGeneral(!isGeneral)
          : setIsFeatured(!isFeatured),
    },
  ];

  const [isOption, setIsOption] = useState<boolean>(false);

  const [isRemove, setIsRemove] = useState<boolean>(false);

  const content = useLayout();

  const handleToggleModal = () => {
    content.setShow(!content.show);
  };

  const clickRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(clickRef, () => {
    isRemove && setIsRemove(false);
  });

  const [isGeneral, setIsGeneral] = useState<boolean>(false);

  const GeneralToggleModal = () => {
    content.setShow(!content.show);
  };

  const clickRefGeneral = useRef<HTMLDivElement>(null);
  useOnClickOutside(clickRefGeneral, () => {
    isGeneral && setIsGeneral(false);
  });

  const [isFeatured, setIsFeatured] = useState<boolean>(false);

  const FeaturedToggleModal = () => {
    content.setShow(!content.show);
  };

  const clickRefFeatured = useRef<HTMLDivElement>(null);
  useOnClickOutside(clickRefFeatured, () => {
    isFeatured && setIsFeatured(false);
  });

  const extractNumbers = (text: any) => {
    const numbersOnly = text.replace(/\D/g, "");
    return numbersOnly;
  };

  let areaNumbers = "";
  if (card.area) {
    areaNumbers = extractNumbers(card.area);
  }

  const formattedPrice = card.monthlyRent && card.monthlyRent.toLocaleString();

  const [apiResponse, setApiResponse] = useState(null);

  const handleGeneralClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/property/updateListingType/${card.id}/Featured`,

        {
          method: "PATCH",
        }
      );

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
        return;
      } else {
        toast.success(data.message);
        setIsGeneral(!isGeneral);
      }
      setApiResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleFeaturedClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/property/updateListingType/${card.id}/General`,

        {
          method: "PATCH",
        }
      );

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
        return;
      } else {
        toast.success(data.message);
        setIsFeatured(!isFeatured);
      }
      setApiResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (apiResponse) {
      console.log("API response:", apiResponse);
    }
  }, [apiResponse]);

  return (
    <>
      <div className={cx("single-card")}>
        <div className={cx("single-card_image")}>
          {flag && (
            <div className={cx("single-card_image_properties")}>
              <div className={cx("single-card_image_properties_feature")}>
                <span
                // onClick={handleSpanClick}
                // className={cx(
                //   card.listingType === "Featured"
                //     ? "disable-feature"
                //     : "active-feature"
                // )}
                >
                  {card.listingType === "Featured"
                    ? "Featured"
                    : card.propertyType}
                </span>
              </div>
              <div className={cx("single-card_image_properties_days")}>
                <span>11 days ago</span>
              </div>
            </div>
          )}
          {label && (
            <div className={cx("single-card_image_detail")}>
              <span>Detail</span>
            </div>
          )}
          <ExportedImage
            src="/images/house-1.png"
            // src={card.photos[0].photoURL}
            alt="Large Image"
            width={422}
            height={370}
            layout="responsive"
            objectFit="contain"
            onClick={() => route.push(`/post-detail/${card.id}`)}
            className={cx("card-image")}
          />
          <div className={cx("single-card_image_favourite")}>
            <span>
              <FavouriteIcon />
            </span>
          </div>
        </div>

        <div className={cx("single-card_inside")}>
          <div className={cx("single-card_inside_header")}>
            <div className={cx("single-card_inside_header_heading")}>
              <h3>{card.projectName}</h3>
              {options && (
                <div className={cx("dropdown")}>
                  <span
                    onClick={() => {
                      setIsOption(!isOption);
                    }}
                  >
                    <MenuIcon />
                  </span>
                  {isOption && (
                    <div className={cx(["dropdown_inside"])}>
                      <ul>
                        {Options.map((item, index) => (
                          <li
                            key={`index-${index}`}
                            onClick={() => {
                              setIsOption(!isOption);
                              item.action();
                            }}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className={cx("single-card_inside_header_price")}>
              {/* <p>${card.monthlyRent}</p> */}
              <p>${formattedPrice}</p>
              {buttonFlag && (
                <div
                  className={cx("single-card_inside_header_price_email-agent")}
                >
                  <p>Email Agent</p>
                </div>
              )}
            </div>
          </div>
          <div className={cx("single-card_inside_properties")}>
            <div className={cx("single-card_inside_properties_property")}>
              <span>
                <BedIcon />
              </span>
              <p>{card.numberOfBedrooms} Bed</p>
            </div>
            <div className={cx("single-card_inside_properties_property")}>
              <span>
                <BathIcon />
              </span>
              <p>2 Bath</p>
            </div>
            <div className={cx("single-card_inside_properties_property")}>
              <span>
                <AreaIcon />
              </span>
              <p>{areaNumbers} sq ft</p>
            </div>
          </div>
          <div className={cx("single-card_inside_footer")}>
            <span>
              <LocationTargetIcon />
            </span>
            <p>{card.location}</p>
          </div>
        </div>
      </div>
      {isRemove && (
        <div className={cx("remove-modal")}>
          <Modal
            onClose={handleToggleModal}
            ref={clickRef}
            classname={"remove-card-modal"}
          >
            <div className={cx("remove-modal_inside")}>
              <div className={cx("remove-modal_inside_header")}>
                <h3>Remove Listing</h3>
                <span onClick={() => setIsRemove(false)}>
                  <ModalCloseIcon />
                </span>
              </div>
              <div className={cx("remove-modal_inside_body")}>
                <p>Are You Sure you want to remove your listing?</p>
                <div className={cx("remove-modal_inside_body_btn")}>
                  <div className={cx("remove-modal_inside_body_btn_left")}>
                    <Button modifier={ButtonModifier.TERIARY}>
                      Remove Permanently
                    </Button>
                  </div>
                  <div className={cx("remove-modal_inside_body_btn_right")}>
                    <Button modifier={ButtonModifier.PRIMARY}>
                      Deactivate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {isGeneral && (
        <div className={cx("remove-modal")}>
          <Modal
            onClose={GeneralToggleModal}
            ref={clickRefGeneral}
            classname={"remove-card-modal"}
          >
            <div className={cx("remove-modal_inside")}>
              <div className={cx("remove-modal_inside_header")}>
                <h3>Change Status of Your Listing </h3>
                <span onClick={() => setIsGeneral(false)}>
                  <ModalCloseIcon />
                </span>
              </div>
              <div className={cx("remove-modal_inside_body")}>
                <p>
                  Are You Sure you want to move your listing from Featured ads
                  to general ads?
                </p>
                <div className={cx("remove-modal_inside_body_button")}>
                  <div className={cx("remove-modal_inside_body_button_left")}>
                    <Button
                      modifier={ButtonModifier.PRIMARY}
                      onClick={() => setIsGeneral(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className={cx("remove-modal_inside_body_button_right")}>
                    <Button
                      modifier={ButtonModifier.TERIARY}
                      onClick={handleFeaturedClick}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {isFeatured && (
        <div className={cx("remove-modal")}>
          <Modal
            onClose={FeaturedToggleModal}
            ref={clickRefFeatured}
            classname={"remove-card-modal"}
          >
            <div className={cx("remove-modal_inside")}>
              <div className={cx("remove-modal_inside_header")}>
                <h3>Change Status of Your Listing </h3>
                <span onClick={() => setIsFeatured(false)}>
                  <ModalCloseIcon />
                </span>
              </div>
              <div className={cx("remove-modal_inside_body")}>
                <p>
                  Are You Sure you want to move your listing from General ads to
                  Featured ads?
                </p>
                <div className={cx("remove-modal_inside_body_button")}>
                  <div className={cx("remove-modal_inside_body_button_left")}>
                    <Button
                      modifier={ButtonModifier.PRIMARY}
                      onClick={() => setIsFeatured(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div className={cx("remove-modal_inside_body_button_right")}>
                    <Button
                      modifier={ButtonModifier.TERIARY}
                      onClick={handleGeneralClick}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default SingleCardItem;
