import { menuTabs } from "../components/Context/applyoutContext";

type questionType = "input" | "button" | "range";

export interface ISingleCard {
  id: any;
  projectName: string;
  type: string;
  statusType: string;
  installmentAvailable: boolean;
  area: string;
  areaDesc: string;
  city: string;
  location: string;
  contactPersonName: string;
  contactPersonEmail: string;
  contactPersonNumber: string;
  propertyType: string;
  numberOfBedrooms: number;
  currency: string;
  listingType: string;
  propertyStatus: string;
  monthlyRent: number;
  photos: [{ photoURL: string }];
  features: [{ featureName: string }];
}
export interface IDashboardColor {
  color?: string;
}
export interface IQuestion {
  id?: number;
  title?: string;
  subTitle?: string;
  type: questionType;
  inputlabel?: {
    name: string;
    placeholder: string;
    type?: string;
  }[];
  buttonLabel?: string[];
  rangLabel?: string;
  rangeOne?: string;
  rangeTwo?: string;
  buttonFlag?: boolean;
  creditScoreFlag?: boolean;
  footerLabel?: string;
  buttonSubLabel2?: string;
  buttonText?: string;
  buttonSubLabel?: string;
  termsAndCondition?: boolean;
  lastTitle?: string;
}

export interface IMenuType {
  id?: number;
  name: string;
  to: string;
  titleOne?: string;
  tabId: menuTabs;
  listOne?: {
    label: string;
    to: string;
    tabId: menuTabs;
  }[];
  titleTwo?: string;
  listTwo?: {
    label: string;
    to: string;
    tabId: menuTabs;
  }[];
  titleThree?: string;
  listThree?: {
    label: string;
    to: string;
    tabId: menuTabs;
  }[];
}
