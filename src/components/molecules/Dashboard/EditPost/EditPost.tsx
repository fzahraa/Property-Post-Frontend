import { createModuleStyleExtractor } from "@/src/utils/css";
import DownArrow from "@/src/assets/svg/DownArrow";
import PakistanIcon from "@/src/assets/svg/PakistanIcon";
import styles from "./EditPost.module.scss";
import multiImageStyle from "../../PostAdd/MultipleImages.module.scss";
import { Input } from "@/src/components/atoms/Input";
import FormCheckbox from "@/src/components/atoms/FormCheckbox/FormCheckbox";
import DropDown from "@/src/components/atoms/DropDown/DropDown";
import UploadIcon from "@/src/assets/svg/UploadIcon";
import { Button, ButtonModifier } from "@/src/components/atoms/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLayout } from "@/src/components/hooks/useLayout";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';

const cx = createModuleStyleExtractor(styles);
const dx = createModuleStyleExtractor(multiImageStyle);

export interface IPostForm {
  label?: string;
  flag: boolean;
}

const DashboardPostForm: FC<IPostForm> = ({ label, flag }) => {
  const { properties, setCurrentListing, currentId, setCurrentSubListing } =
    useLayout();
  const route = useRouter();

  const propertyId = currentId;

  const getPropertyById = (id: any) => {
    return properties.find((property) => property.id === id) || null;
  };

  const property = getPropertyById(propertyId);

  const City = ["Lahore", "Karachi", "Faisalabad", "Jhang"];
  const [isCity, setIsCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>(
    property ? property.city : City[0]
  );

  const Location = ["Lahore", "Karachi", "Faisalabad", "Jhang"];
  const [isLocation, setIsLocation] = useState<boolean>(false);
  const [selectLocation, setSelectLocation] = useState<string>(
    property ? property.location : Location[0]
  );

  const Country = ["Pakistan", "pakistan", "Pakistan", "Pakistan"];
  const [isCountry, setIsCountry] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>(
    property ? property.country : Country[0]
  );
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile]);
var [selectedImages, setSelectedImages] = useState([] as any);
var imageFile: File;
const onSelectFile = (event : any) => {
  const selectedFiles = event.target.files;
  if(event.target.files.length > 1){
    for(var i = 0;i<event.target.files.length  ;i++){
      imageFile = event.target.files[i];
      photos.push(imageFile);
    }
  }
  else{
  imageFile = event.target.files[0];
  photos.push(imageFile);
  }

  setPhotos(photos);
  console.log(photos)
  const selectedFilesArray : File[] = Array.from(selectedFiles);

  const imagesArray = selectedFilesArray.map((file) => {
    return URL.createObjectURL(file);
  });

  setSelectedImages((previousImages : any) => previousImages.concat(imagesArray));

  // FOR BUG IN CHROME
  event.target.value = "";
};

  const TypeOfHouse = [
    "Standard Apartment",
    "Studio Apartment",
    "Duplex Apartment",
    "Bungalow",
    "Pent House",
    "Mensionette",
    "Town House",
    "Villa",
    "Blocks of Flat for sale",
    "Gated Community",
    "Own Compound",
    "Villa",
  ];

  const OtherFeatures = [
    "Master Ensuite",
    "Parking",
    "Pets Allowed",
    "Servant Quarter (DSQ)",
    "Swimming Pool",
    "Fiber Internet",
    "Fiber Internet",
  ];
  const Beds = [2, 4, 6, 8];
  const [isBeds, setIsBeds] = useState<boolean>(false);
  const [selectBed, setSelectBed] = useState<number>(
    property ? property.numberOfBedrooms : Beds[0]
  );

  const Currency = ["riyal", "taka", "dollar", "rupees"];
  const [isCurrency, setIsCurrency] = useState<boolean>(false);
  const [selectCurrency, setSelectCurrency] = useState<string>(
    property ? property.currency : Currency[0]
  );

  const [selectType, setSelectedType] = useState(property ? property.type : "");

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setInput((prevInput) => ({
      ...prevInput,
      type: type,
    }));
  };

  const [selectInstallment, setSelectedInstallment] = useState<boolean>(
    property ? property.installmentAvailable : undefined
  );
  const handleInstallmentSelect = (type: boolean) => {
    setSelectedInstallment(type);
    setInput((prevInput) => ({
      ...prevInput,
      installmentAvailable: type,
    }));
  };

  const [selectStatusType, setSelectedStatusType] = useState(
    property ? property.statusType : ""
  );
  const handleStatusTypeSelect = (value: any) => {
    setSelectedStatusType(value);
    setInput((prevInput) => ({
      ...prevInput,
      statusType: value,
    }));
  };

  const [selectHouseType, setSelectedHouseType] = useState<string[]>(
    property ? [property.propertyType] : [""]
  );
  const handleHouseTypeSelect = (type: string) => {
    setSelectedHouseType([type]);
    setInput((prevInput) => ({
      ...prevInput,
      propertyType: type,
    }));
  };

  const [selectedOtherFeatures, setSelectedOtherFeatures] = useState(
    property ? [property.features[0].featureName] : [""]
  );
  const handleOtherFeatureSelect = (feature: string) => {
    setSelectedOtherFeatures([feature]);
    setInput((prevInput) => ({
      ...prevInput,
      features: [
        {
          featureName: feature,
        },
      ],
    }));
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);

    // setInput((prevInput) => ({
    //   ...prevInput,
    //   photos: [
    //     {
    //       photoURL: imageURL,
    //     },
    //   ],
    // }));
  };

  // const handleImageUpload = (event: any) => {
  //   const file = event.target.files[0];
  //   const updatedPhotos = [
  //     {
  //       photoURL: file,
  //     },
  //   ];

  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     photos: updatedPhotos,
  //   }));
  // };
  const [featurediItems , setFeaturediItems] = useState([] as any);
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
console.log(property);
  const [input, setInput] = useState({
    projectName: property ? property.projectName : "",
    city: property ? property.city : City[0],
    location: property ? property.location : Location[0],
    area: property ? property.area : "",
    userId : property ? property.userId : "",
    contactPersonName: property ? property.contactPersonName : "",
    contactPersonEmail: property ? property.contactPersonEmail : "",
    //country: property ? property.country : Country[0],
    numberOfBedrooms: property ? property.numberOfBedrooms : Beds[0],
    currency: property ? property.currency : Currency[0],
    contactPersonNumber: property ? property.contactPersonNumber : "",
    monthlyRent: property ? property.monthlyRent : 0,
    // for(let i in property.photos){
    //   var photo = property.photos[i].;
    //   var id = property.photos[i].id;
    // };
    photos : setPhotos(property?.photos),

    features: [
      {
        featureName: selectedOtherFeatures[0],
      },
    ],
    type: selectType,

    statusType: property ? property.statusType : selectStatusType,
    installmentAvailable: property
      ? property.installmentAvailable
      : selectInstallment,
    areaDesc: property ? property.areaDesc : "",
    propertyType: property ? property.propertyType : selectHouseType,
    samePhotos : []
  });

  const handleChange = (value: string, name: string) => {
    setInput({
      ...input,
      [name]: value,
    });
  };
  const updateProperty = async () => {
   
      // console.log(input.photos);
      // console.log(photos);
      // console.log(selectedImages);
      //input.photos = input.photos.filter(item => selectedImages.includes(item.photoURL.toString().split("\\").pop()));
//       result = firstArray.filter(o => secondArray.some(({id,name}) => o.id === id && o.name === name));
// console.log(result);
//       console.log(res);
const a = selectedImages.map((x : any)=>x.split("\\").pop());
      var b = [] as any;

      input.photos.forEach((element: any) => {
        b.push(element[0].photoURL.split("\\").pop());
      }
      );
      // input.photos.forEach(element => {
      //   b.push(element?.map(x=> x.photoURL.split("\\").pop()));
      // });
console.log(a)
     console.log(b);
var res = a.filter((item : any) => b.some((i : any) => i == item))

      console.log(res);
      input.samePhotos = res;
      input.photos = [];
      input.photos = photos;

      console.log(input);

//
let formData = new FormData();
formData.append("projectName", input.projectName);
formData.append("city", input.city);
formData.append("location", input.location);
formData.append("area", input.area);
formData.append("contactPersonName", input.contactPersonName);
formData.append("contactPersonEmail", input.contactPersonEmail);
//formData.append("country", input.country);
formData.append("numberOfBedrooms", input.numberOfBedrooms);
formData.append("currency", input.currency);
formData.append("contactPersonNumber", input.contactPersonName);
formData.append("monthlyRent", input.monthlyRent);
formData.append("userId", input.userId);
for (var i = 0; i < photos.length; i++) {
  formData.append('photos', photos[i]);
}
//   for (var i = 0; i < selectedImages.length; i++) {
//   formData.append('photos', selectedImages[i]);
// }
for(var i = 0;i<input.features.length ;i++){
  featurediItems.push(input.features[i]);
}
setFeaturediItems(featurediItems);
formData.append('samePhotos', JSON.stringify(input.samePhotos));
formData.append('features', JSON.stringify(featurediItems));
formData.append("type", input.type);
formData.append("statusType", input.statusType);
formData.append("installmentAvailable", input.installmentAvailable);
formData.append("areaDesc", input.areaDesc);
formData.append("propertyType", input.propertyType);
// for (const value of formData.values()) {
//   console.log(value);
// }

//
try {
 const response = await fetch(
        `http://localhost:3000/property/updateProperty/${propertyId}`,
        {
          method: "PATCH",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify(input),
          body: formData
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Failed to update property:", responseData.message);
        toast.error(responseData.message);
        return;
      } else {
        setCurrentListing("feature");
        setCurrentSubListing("sublisting");
      }
      console.log("Property updated successfully:", responseData.message);
      toast.success(responseData.message);
    } catch (error) {
      console.log("hi " + error)
      console.error("Error:", error);
    }
  };
  //var [photos, setPhoto] = useState([] as any);
  var [photos, setPhoto] = useState([] as any);

  function setPhotos(images : any) {
    if(selectedImages.length === 0){
    photos = [];
    console.log(" hi again ")
    selectedImages.length = 0;
    if(images.length > 0){
    if(images[0].photoURL){   
      images.forEach((element : any) => {
          var data = [{
            //photoURL : element.photoURL.split("\\").pop(),
            photoURL : `http://localhost:3000/${element.photoURL}`,
            id : element.id
          }]
          photos.push(data);
          selectedImages.push(`http://localhost:3000/${element.photoURL}`);
        });
      }
      else{
        images.forEach((element : any) => {
          var data = [{
            //photoURL : element.name,
            photoURL : `http://localhost:3000/${element.name}`
          }]
          photos.push(data);
          console.log(element);
          selectedImages.push(`http://localhost:3000/${element.name}`);
          console.log(selectedImages)
        });
      }
  }
  console.log(selectedImages);
}
    return photos;
    //setSelectedImages(selectedImages.filter((e) => e !== image));
    //URL.revokeObjectURL(image);
    // photos.forEach((element : any) => {
    //   var data = [{
    //     photoURL : element.photoURL.split("\\").pop(),
    //     id : element.id
    //   }]
    //   selectedImages.push();
      
    // });
  }
  
  function deleteHandler(image : any) {
    console.log("hi " + image);
    //setSelectedImages(selectedImages.filter((e) => e !== 'Start165c5ba2-f6a5-481f-a16e-604af5424e54.PNG'));
    selectedImages = selectedImages.filter(function(item : any) {
      return item !== image
  })
  console.log(photos);
  photos = photos.filter(function(item : any) {
    return item.photoURL !== image
  })
    setPhoto(photos);
    setSelectedImages(selectedImages);
    property.photos = property.photos.filter(function(item : any) {
      return !item.photoURL.toString().includes(image)
  })
  URL.revokeObjectURL(image);
  console.log(property.photos);
    console.log(property.photos)
  }


  console.log(input);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    await updateProperty();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={cx([flag ? "new-property" : "edit-post"])}>
          <div className={cx("edit-post_left")}>
            {!flag && (
              <div className={cx("edit-post_left_heading")}>
                <h1>{label}</h1>
              </div>
            )}
            <div className={cx("form-input")}>
              <label>Project Name</label>
              <Input
                type="text"
                placeholder="One Bedroom House"
                onChange={handleChange}
                value={input.projectName}
                className="add-post-form"
                name="projectName"
              />
            </div>
            <div className={cx("form-input-checkbox-container")}>
              <div className={cx("form-input")}>
                <label>Type</label>
                <div className={cx("from-checkbox")}>
                  <FormCheckbox
                    label="Rent"
                    checked={selectType === "rent"}
                    onChange={() => handleTypeSelect("rent")}
                  />
                  <FormCheckbox
                    label="Buy"
                    checked={selectType === "buy"}
                    onChange={() => handleTypeSelect("buy")}
                  />
                </div>
              </div>
              <div className={cx("form-input")}>
                <label>Status Type</label>
                <div className={cx("from-checkbox")}>
                  <FormCheckbox
                    label="Furnished"
                    checked={selectStatusType === "furnished"}
                    onChange={() => handleStatusTypeSelect("furnished")}
                  />
                  <FormCheckbox
                    label="Unfurnished"
                    checked={selectStatusType === "Unfurnished"}
                    onChange={() => handleStatusTypeSelect("Unfurnished")}
                  />
                </div>
              </div>
              <div className={cx("form-input")}>
                <label>Installment Available</label>
                <div className={cx("from-checkbox")}>
                  <FormCheckbox
                    label="Yes"
                    checked={selectInstallment === true}
                    onChange={() => handleInstallmentSelect(true)}
                  />
                  <FormCheckbox
                    label="No"
                    checked={selectInstallment === false}
                    onChange={() => handleInstallmentSelect(false)}
                  />
                </div>
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>Area(Squarefoot)</label>
              <Input
                type="text"
                placeholder="e.g 40 * 40"
                onChange={handleChange}
                value={input.area}
                className="add-post-form"
                name="area"
              />
            </div>
            <div className={cx("form-input")}>
              <label>City</label>

              <div
                className={cx("dropdown")}
                onClick={() => setIsCity(!isCity)}
              >
                <p>{selectCity}</p>
                <span>
                  <DownArrow />
                </span>
                {isCity && (
                  <DropDown
                    dropdown={City}
                    setLabel={setSelectCity}
                    onChange={(value) => handleChange(value, "city")}
                  />
                )}
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>Location</label>
              <div
                className={cx("dropdown")}
                onClick={() => setIsLocation(!isLocation)}
              >
                <p>{selectLocation}</p>
                <span>
                  <DownArrow />
                </span>
                {isLocation && (
                  <DropDown
                    dropdown={Location}
                    setLabel={setSelectLocation}
                    onChange={(value) => handleChange(value, "location")}
                  />
                )}
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>Contact Person Name</label>
              <Input
                type="text"
                placeholder="e.g Elon Musk "
                onChange={handleChange}
                value={input.contactPersonName}
                className="add-post-form"
                name="contactPersonName"
              />
            </div>
            <div className={cx("form-input")}>
              <label>Contact Person Name</label>
              <div className={cx("form-input_inside")}>
                <div
                  className={cx("dropdown-v2")}
                  onClick={() => setIsCountry(!isCountry)}
                >
                  <p>
                    <span>
                      <PakistanIcon />
                    </span>
                    +92
                    <span>
                      <DownArrow />
                    </span>
                  </p>

                  {isCountry && (
                    <DropDown
                      dropdown={Country}
                      setLabel={setSelectCountry}
                      onChange={(value) => handleChange(value, "country")}
                    />
                  )}
                </div>

                <Input
                  type="number"
                  placeholder="+ 92 301 993 838"
                  onChange={handleChange}
                  value={input.contactPersonNumber}
                  className="dropdown-search-number"
                  name="contactPersonNumber"
                />
              </div>
            </div>
            <div className={cx("form-input")}>
              <label>Email</label>
              <Input
                type="email"
                placeholder="e.g xyz@gmail.com"
                onChange={handleChange}
                value={input.contactPersonEmail}
                className="add-post-form"
                name="contactPersonEmail"
              />
            </div>
          </div>
          <div className={cx("edit-post_right")}>
            <div className={cx("form-input-checkbox")}>
              <label>Type of House</label>
              <div className={cx("form-input-checkbox_inside")}>
                {TypeOfHouse.map((item, index) => (
                  <FormCheckbox
                    key={`index_${index}`}
                    label={item}
                    checked={selectHouseType[0] === item}
                    onChange={() => handleHouseTypeSelect(item)}
                  />
                ))}
              </div>
            </div>
            <div className={cx("post-add-input-grid")}>
              <div className={cx("form-input-checkbox")}>
                <label>No. of Bedrooms</label>
                <div
                  className={cx("dropdown")}
                  onClick={() => setIsBeds(!isBeds)}
                >
                  <p>{selectBed}</p>
                  <span>
                    <DownArrow />
                  </span>
                  {isBeds && (
                    <DropDown
                      dropdown={Beds}
                      setLabel={setSelectBed}
                      onChange={(value) =>
                        handleChange(value, "numberOfBedrooms")
                      }
                    />
                  )}
                </div>
              </div>
              <div className={cx("form-input-checkbox")}>
                <label>Currency</label>
                <div
                  className={cx("dropdown")}
                  onClick={() => setIsCurrency(!isCurrency)}
                >
                  <p>{selectCurrency}</p>
                  <span>
                    <DownArrow />
                  </span>
                  {isCurrency && (
                    <DropDown
                      dropdown={Currency}
                      setLabel={setSelectCurrency}
                      onChange={(value) => handleChange(value, "currency")}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={cx("monthly-rent")}>
              <div className={cx("form-input")}>
                <label>Monthly Rent (KSH)</label>
                <Input
                  type="number"
                  placeholder="Monthly Rent (KSH)"
                  onChange={handleChange}
                  value={input.monthlyRent}
                  name="monthlyRent"
                  className="add-post-form"
                />
              </div>
            </div>

            <div className={cx("form-input-checkbox")}>
              <label>Other Features</label>
              <div className={cx("form-input-checkbox_inside")}>
                {OtherFeatures.map((item, index) => (
                  <FormCheckbox
                    key={`index_${index}`}
                    label={item}
                    checked={selectedOtherFeatures[0] === item}
                    onChange={() => handleOtherFeatureSelect(item)}
                  />
                ))}
              </div>
            </div>

            <div className={cx(["form-input", "input-textarea"])}>
              <label>Description</label>
              <textarea
                cols={20}
                rows={5}
                placeholder="Area Description"
                onChange={handleTextAreaChange}
                value={input.areaDesc}
                name="areaDesc"
                className="add-post-form"
              ></textarea>
            </div>
            <div className={cx("form-input")}>
              <label>Property Images</label>
              <div className={cx("form-input_upload-file")}>
                <label>Drop here or </label>
                <div className={cx("edit-icon")}>
                  <div className={cx("edit-icon_inside")}>
                    <span className={cx("icon")}>
                      <UploadIcon />
                    </span>
                    <p>Upload Images</p>
                  </div>
                  <input
                        type="file"
                        name="images"
                        onChange={ev=>onSelectFile(ev)}
                        multiple
                        accept="image/png , image/jpeg, image/webp"
                        className={cx("input-file")}
                      />
                  {/* <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleImageUpload}
                    className={cx("input-file")}
                  /> */}
                </div>
              </div>
            </div>
            <div className={dx("images")}>
            {/* {photos &&
                        photos.map((image, index) => {
                          return (
                            <div key={image.id} className={dx("image")}>
                              <img src={image.photoURL} height="200" width="150" alt="upload" />
                              <button >
                                x
                              </button>
                              <p>{image.photoURL.ToString().slice(5,20)}</p>
                            </div>
                          );
                        })} */}
             
             <div className={dx("images")}>
                      {selectedImages &&
                        selectedImages.map((image : any, index : any) => {
                          return (
                            <div key={index} className={dx("image")}>
                              <Image src={image} height="200" width="150" alt="upload" loader={({ src }) => `${src}?w=100&blur=10`}/>
                              <button onClick={() => deleteHandler(image)}>
                                x
                              </button>
                              <p>{image.split("\\").pop().slice(0, 10)}</p>
                            </div>
                          );
                        })}
                    </div>
    {/* <img src={'http://localhost:3000/public/uploads/Usercf5e6971-2a34-4d83-a8c5-84f1c29b92e5.jpg' } height="200" width="150" alt="upload" /> */}
                      {/* {selectedImages &&
                        selectedImages.map((image : any, index : any) => {
                          return (
                            <div key={image} className={dx("image")}>
                              <img src={`http://localhost:3000/public/uploads/propertyImages/${image}`} height="200" width="150" alt="upload" />
                              <button onClick={() => deleteHandler(image)}>
                                x
                              </button>
                              <p>{image?.slice(5,20)}</p>
                            </div>
                          );
                        })} */}
                    </div>
          </div>
        </div>
        {!flag && (
          <div className={cx("button")}>
            <Button modifier={ButtonModifier.PRIMARY} type="submit" onClick={() => submitHandler}>
              Save
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default DashboardPostForm;
