import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { disableBodyScroll, isServer } from "@/src/utils/Common";
//import { disableBodyScroll } from "@/src/utils/common";
import { noop } from "../../utils/noop";
import { IPostDetail } from "../molecules/PostDetail/PostDetail";
export type IntoButton = "residential" | "commercial";

export type propertyButton = "list" | "map";

export type tabs =
  | "dashboard"
  | "listing"
  | "addProperty"
  | "profile"
  | "business"
  | "subListingContent"
  | "features"
  | "adsStatus"
  | "paymentStatus"
  | "paymentMethod"
  | "logout";

export type listing = "edit" | "feature" | "new";
export type subListingType = "edit" | "sublisting";

export type business = "form" | "plan" | "payment";

export type mortgage = "payment" | "loan";

export type preApproved = "homePurchase" | "refinance" | "homeEquity";

export type newFeaturedProperty =
  | "detail"
  | "paymentPlan"
  | "paymentMethod"
  | "submit";

export type payment = "setCard" | "save";

export type menuTabs = "buy" | "sell" | "rent" | "mortgage" | "contact";

export type HomepurchaseTab = "tabs" | "questions";

export type mortgageRatesTab = "apr" | "monthly" | "rate" | "fee";

export type mortgageQuestion =
  | "property0"
  | "property1"
  | "loan0"
  | "loan1"
  | "detail0"
  | "detail1"
  | "wrap0"
  | "wrap1";

type ContextProps = {
  show: boolean;
  setShow: (flag: boolean) => void;
  isSubmit: boolean;
  setIsSubmit: (flag: boolean) => void;

  /// introButtons
  currentIntroBtn: IntoButton;
  setCurrentIntroBtn: Dispatch<SetStateAction<IntoButton>>;

  ///propertyButton
  currentPropertyButton: propertyButton;
  setCurrentPropertyButton: Dispatch<SetStateAction<propertyButton>>;

  ///tabs
  currentTab: tabs;
  setCurrentTab: Dispatch<SetStateAction<tabs>>;

  ///listing
  currentListing: listing;
  setCurrentListing: Dispatch<SetStateAction<listing>>;

  ///Sub-listing
  currentSubListing: subListingType;
  setCurrentSubListing: Dispatch<SetStateAction<subListingType>>;

  ///business
  currentBusiness: business;
  setCurrentBusiness: Dispatch<SetStateAction<business>>;

  ///mortgage
  currentMortgage: mortgage;
  setCurrentMortgage: Dispatch<SetStateAction<mortgage>>;

  ///Pre Approved
  currentApproved: preApproved;
  setCurrentApproved: Dispatch<SetStateAction<preApproved>>;

  ///New Featured Property
  currentFeatured: newFeaturedProperty;
  setCurrentFeatured: Dispatch<SetStateAction<newFeaturedProperty>>;

  ///Current payment
  currentPayment: payment;
  setCurrentPayment: Dispatch<SetStateAction<payment>>;

  ///Menu Tabs
  currentMenuTab: menuTabs;
  setCurrentMenuTab: Dispatch<SetStateAction<menuTabs>>;

  ///Pre Approved Tabs
  currentSwitchTab: HomepurchaseTab;
  setCurrentSwitchTab: Dispatch<SetStateAction<HomepurchaseTab>>;

  ///mortgageQuestion
  currentQuestion: mortgageQuestion;
  setCurrentQuestion: Dispatch<SetStateAction<mortgageQuestion>>;

  ///mortgage Rates Tab
  currentRateTab: mortgageRatesTab;
  setCurrentRateTab: Dispatch<SetStateAction<mortgageRatesTab>>;

  authToken: string;
  setAuthToken: (token: string) => void;

  properties: any[];
  setProperties: Dispatch<SetStateAction<any[]>>;

  location: string;
  setLocation: Dispatch<SetStateAction<string | "">>;

  currentId: number | null;
  setCurrentId: Dispatch<SetStateAction<number | null>>;
};

export const layoutServiceContext = React.createContext<ContextProps>({
  show: false,
  setShow: noop,
  isSubmit: false,
  setIsSubmit: noop,
  currentIntroBtn: "residential",
  setCurrentIntroBtn: noop,
  currentPropertyButton: "list",
  setCurrentPropertyButton: noop,
  currentTab: "dashboard",
  setCurrentTab: noop,
  currentListing: "feature",
  setCurrentListing: noop,
  currentSubListing: "sublisting",
  setCurrentSubListing: noop,
  currentBusiness: "form",
  setCurrentBusiness: noop,
  currentMortgage: "payment",
  setCurrentMortgage: noop,
  currentApproved: "homePurchase",
  setCurrentApproved: noop,
  currentFeatured: "detail",
  setCurrentFeatured: noop,
  currentPayment: "setCard",
  setCurrentPayment: noop,
  currentMenuTab: "buy",
  setCurrentMenuTab: noop,
  currentSwitchTab: "tabs",
  setCurrentSwitchTab: noop,
  currentQuestion: "property0",
  setCurrentQuestion: noop,
  currentRateTab: "apr",
  setCurrentRateTab: noop,
  authToken: "",
  setAuthToken: () => {},
  properties: [],
  setProperties:  noop,
  location: "",
  setLocation : noop,
  currentId: 0,
  setCurrentId: noop,
});

/**
 * Context provider that helps to share data across all application pages
 * We can fetch any required data and pass via props
 * content state is used to hold on globally shared data
 * fetch whatever is needed to share in useEffect hook and store it inside the content state
 * @param {*} param0
 * @returns
 */

interface LayoutProviderProps {
  children: React.ReactNode;
}
export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [show, setShow] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [currentIntroBtn, setCurrentIntroBtn] =
    useState<IntoButton>("residential");
  const [currentPropertyButton, setCurrentPropertyButton] =
    useState<propertyButton>("list");
  const [currentTab, setCurrentTab] = useState<tabs>("dashboard");
  const [currentListing, setCurrentListing] = useState<listing>("feature");
  const [currentSubListing, setCurrentSubListing] =
    useState<subListingType>("sublisting");
  const [currentBusiness, setCurrentBusiness] = useState<business>("form");
  const [currentMortgage, setCurrentMortgage] = useState<mortgage>("payment");
  const [currentFeatured, setCurrentFeatured] =
    useState<newFeaturedProperty>("detail");
  const [currentApproved, setCurrentApproved] =
    useState<preApproved>("homePurchase");
  const [currentPayment, setCurrentPayment] = useState<payment>("setCard");
  const [currentMenuTab, setCurrentMenuTab] = useState<menuTabs>("buy");
  const [currentSwitchTab, setCurrentSwitchTab] =
    useState<HomepurchaseTab>("tabs");
  const [currentQuestion, setCurrentQuestion] =
    useState<mortgageQuestion>("property0");
  const [currentRateTab, setCurrentRateTab] = useState<mortgageRatesTab>("apr");
  const [authToken, setAuthToken] = useState<string>("");
  const [location, setLocation] = useState<string | ""> ("");
  const [properties, setProperties] = useState<any[]>([]);//useState<Dispatch<SetStateAction<any[]>>>([] as any);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (isServer) return;
    if (show || isSubmit) {
      disableBodyScroll(true);
    } else {
      disableBodyScroll(false);
    }

    //enable
  }, [show, isSubmit]);

  useEffect(() => {
    fetch("http://localhost:3000/property/getProperties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <layoutServiceContext.Provider
      value={{
        show,
        setShow: (flag: boolean) => setShow(flag ?? !show),
        isSubmit,
        setIsSubmit: (flag: boolean) => setIsSubmit(flag ?? !isSubmit),
        currentIntroBtn,
        setCurrentIntroBtn,
        currentPropertyButton,
        setCurrentPropertyButton,
        currentTab,
        setCurrentTab,
        currentListing,
        setCurrentListing,
        currentSubListing,
        setCurrentSubListing,
        currentBusiness,
        setCurrentBusiness,
        currentMortgage,
        setCurrentMortgage,
        currentApproved,
        setCurrentApproved,
        currentFeatured,
        setCurrentFeatured,
        currentPayment,
        setCurrentPayment,
        currentMenuTab,
        setCurrentMenuTab,
        currentSwitchTab,
        setCurrentSwitchTab,
        currentQuestion,
        setCurrentQuestion,
        currentRateTab,
        setCurrentRateTab,
        authToken,
        setAuthToken,
        properties,
        setProperties,
        location,
        setLocation,
        currentId,
        setCurrentId,
      }}
    >
      {children}
    </layoutServiceContext.Provider>
  );
};
