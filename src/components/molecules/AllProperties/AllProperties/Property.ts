import { ISingleCard } from "./../../../../context/types";

const allProperties: ISingleCard[] = [
  {
    id: 1,
    projectName: "First Property Testing",
    type: "type1",
    statusType: "Active",
    installmentAvailable: true,
    area: "2300sqft",
    areaDesc: "2200sqft",
    city: "Lahore",
    location: "Lahore",
    contactPersonName: "Najam",
    contactPersonEmail: "najam@gmail.com",
    contactPersonNumber: "123445",
    propertyType: "House",
    numberOfBedrooms: 2,
    currency: "Dollar",
    monthlyRent: 20000,
    listingType: "General",
    propertyStatus: "Active",
    photos: [
      {
        photoURL: "/images/house-1.png",
      },
    ],
    features: [
      {
        featureName: "Swimming Pool",
      },
    ],
  },
];

export default allProperties;
