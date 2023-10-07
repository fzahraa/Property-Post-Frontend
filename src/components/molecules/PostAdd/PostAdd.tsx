import React, { useState, useEffect, FC } from "react";
import { createModuleStyleExtractor } from "@/src/utils/css";
import DownArrow from "@/src/assets/svg/DownArrow";
import PakistanIcon from "@/src/assets/svg/PakistanIcon";
import { SearchBox } from "./searchBox";
import styles from "./PostAdd.module.scss";
import multiImageStyle from "./MultipleImages.module.scss";
import FormCover from "../../atoms/FormCover/FormCover";
import { Input } from "../../atoms/Input";
import FormCheckbox from "../../atoms/FormCheckbox/FormCheckbox";
import DropDown from "../../atoms/DropDown/DropDown";
import UploadIcon from "@/src/assets/svg/UploadIcon";
import { Button, ButtonModifier } from "../../atoms/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useLayout } from "@/src/components/hooks/useLayout";
import Image from "next/image";

const cx = createModuleStyleExtractor(styles);
const dx = createModuleStyleExtractor(multiImageStyle);


const PostAdd = () => {
  const { location, setLocation } = useLayout();
  const route = useRouter();

  var imageFile: File;

  const City = ["Lahore", "Karachi", "Faisalabad", "Jhang"];
  const [isCity, setIsCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>(City[0]);

  const [photos, setPhotos] = useState<File[]>([])

  //features items
  const [items , setItems] = useState([] as any);

  // var featureToAdd : {};
  // const [features, setFeatures] = useState([])


  const [images, setImages] = useState({});
  const Location = ["Lahore", "Karachi", "Faisalabad", "Jhang"];
  const [isLocation, setIsLocation] = useState<boolean>(false);
  const [selectLocation, setSelectLocation] = useState<string>(Location[0]);

  const Country = ["Pakistan", "pakistan", "Pakistan", "Pakistan"];
  const [isCountry, setIsCountry] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>(Country[0]);

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
}, [selectedFile])
  const Beds = ["2", "4", "6", "8"];
  const [isBeds, setIsBeds] = useState<boolean>(false);
 // const [isPhoto, setIsPhoto] = useState<string>("");
  const [isPhoto, setIsPhoto]  = useState<String[]>([]);
  const [selectBed, setSelectBed] = useState<string>(Beds[0]);

  const Currency = ["riyal", "taka", "dollar", "rupees"];
  const [isCurrency, setIsCurrency] = useState<boolean>(false);
  const [selectCurrency, setSelectCurrency] = useState<string>(Currency[0]);

  const [selectType, setSelectedType] = useState("");
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setInput((prevInput) => ({
      ...prevInput,
      type: type,
    }));
  };

  const [selectInstallment, setSelectedInstallment] = useState<string>();
  const handleInstallmentSelect = (type: string) => {
    setSelectedInstallment(type);
    setInput((prevInput) => ({
      ...prevInput,
      installmentAvailable: type,
    }));
  };

  const [selectStatusType, setSelectedStatusType] = useState("");
  const handleStatusTypeSelect = (value: any) => {
    setSelectedStatusType(value);
    setInput((prevInput) => ({
      ...prevInput,
      statusType: value,
    }));
  };

  const [selectHouseType, setSelectedHouseType] = useState([""]);

  const handleHouseTypeSelect = (type: string) => {
    setSelectedHouseType([type]);
    setInput((prevInput) => ({
      ...prevInput,
      propertyType: type,
    }));
  };
  const [selectedImage, setSelectedImage] = useState([] as any);
  const [selectedOtherFeatures, setSelectedOtherFeatures] = useState([""]);
  const handleOtherFeatureSelect = (feature: string) => {
    setSelectedOtherFeatures([feature]);
    const item = { featureName : feature};
    items.push(item);
    setItems(items);

    //check adding more than one items in features
    // const item1 = { featureName : 'Pets Allowed'};
    // items.push(item1);
    // setItems(items);

    setInput((prevInput) => ({
      ...prevInput,
      features: [
        {
          featureName: feature,
        },
      ],
    }));
  };

  // useEffect(() => {
  //   register({ name: "address" }, { required: "Please enter your address" });
  //   register({ name: "latitude" }, { required: true, min: -90, max: 90 });
  //   register({ name: "longitude" }, { required: true, min: -180, max: 180 });
  // }, [register]);

  // const handleImageUpload = (event: any) => {
  //   imageFile = event.target.files[0];
  //   const file = event.target.files[0];
  //   const path = URL.createObjectURL(file);
  //   photos.push(imageFile);
  //   setPhotos(photos);
  // };

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

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

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const [input, setInput] = useState({
    projectName: "",
    city: City[0],
    location: Location[0],
    area: "",
    contactPersonName: "",
    contactPersonEmail: "",
    country: Country[0],
    numberOfBedrooms: Beds[0],
    currency: Currency[0],
    contactPersonNumber: "",
    monthlyRent: "0",
    userId : "11",
    photos: [{}
      // {
      //   photoURL: "",
      // },
    ],
    features: [
      {
        featureName: selectedOtherFeatures[0],
      },
    ],
    type: selectType,
    statusType: selectStatusType,
    installmentAvailable: selectInstallment,
    areaDesc: "",
    propertyType: selectHouseType[0],
  });

  const handleChange = (value: string | boolean, name: string) => {
    setInput({
      ...input,
      // [name]: value,
      [name]: name === "monthlyRent" ? Number(value) : value,
    });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (input.projectName.trim() === "") {
      toast.error("Project name is required");
      return;
    }

    if (input.type === "") {
      toast.error("Type is required");
      return;
    }

    if (input.statusType === "") {
      toast.error("Status Type is required");
      return;
    }

    if (input.installmentAvailable === undefined) {
      toast.error("Installment is required");
      return;
    }

    if (input.area.trim() === "") {
      toast.error("Area is required");
      return;
    }

    if (input.contactPersonName === "") {
      toast.error("Contact Person Name is required");
      return;
    }

    if (input.contactPersonNumber === "") {
      toast.error("Contact Person Number is required");
      return;
    }

    if (input.contactPersonNumber.includes(" ")) {
      toast.error("Contact Person Number should not contain spaces");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.contactPersonEmail)) {
      toast.error("Invalid email address");
      return;
    }

    if (input.propertyType === "") {
      toast.error("Type of House is required");
      return;
    }

    if (input.monthlyRent === "0") {
      toast.error("Monthly Rent is required");
      return;
    }

    if (input.areaDesc === "") {
      toast.error("Description is required");
      return;
    }
    let formData = new FormData();
    input.photos = photos;


    formData.append("projectName", input.projectName);
    formData.append("city", input.city);
    formData.append("location", location);
    formData.append("area", input.area);
    formData.append("contactPersonName", input.contactPersonName);
    formData.append("contactPersonEmail", input.contactPersonEmail);
    formData.append("country", input.country);
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
    formData.append('features', JSON.stringify(items));
    formData.append("type", input.type);
    formData.append("statusType", input.statusType);
    formData.append("installmentAvailable", input.installmentAvailable);
    formData.append("areaDesc", input.areaDesc);
    formData.append("propertyType", input.propertyType);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    try {
      const response = await fetch(
        "http://localhost:3000/property/addProperty",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.error("Failed to add property:", response);
        toast.error(responseData.message[0]);
        return;
      } else {
        console.log("Property added successfully:", responseData.message);
        toast.success(responseData.message);
        route.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };


  function deleteHandler(image : any) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  return (
    <div className={cx("post-add")}>
      <div className={cx("post-add_inside")}>
        <form onSubmit={submitHandler}>
          <div className={cx("post-add_inside_header")}>
            <p>Home/Post Your Add</p>
            <h1>Post Your Add</h1>
          </div>
          <div className={cx("post-add_inside_grid")}>
            <div className={cx("post-add_inside_grid_left")}>
              <FormCover>
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
                        checked={selectInstallment === "true"}
                        onChange={() => handleInstallmentSelect("true")}
                      />
                      <FormCheckbox
                        label="No"
                        checked={selectInstallment === "false"}
                        onChange={() => handleInstallmentSelect("false")}
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
              </FormCover>
              <FormCover>
                <div className={cx("dropdown-container")}>
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
                  {/* <div className={cx("form-input")}>
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
                  </div> */}
                  <div className={cx("form-input")}>
                    <label>Location</label>
                    <SearchBox
                      onSelectAddress={(address, latitude, longitude) => {
                        address : ""
                        // setValue("latitude", latitude);
                        // setValue("longitude", longitude);
                      }}
                      defaultValue={""}
                    />
                  </div>
                </div>
                </FormCover>
                <FormCover>
                <div className={cx("form-input")}>
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
              </FormCover>

            </div>
            <div className={cx("post-add_inside_grid_right")}>
              <FormCover>
                <div className={cx("post-add_inside_grid_right_container")}>
                  <div className={cx("form-input-checkbox")}>
                    <label>Type of House</label>
                    <div className={cx("form-input-checkbox_inside")}>
                      {TypeOfHouse.map((item, index) => (
                        <FormCheckbox
                          label={item}
                          key={index}
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
                            onChange={(value) =>
                              handleChange(value, "currency")
                            }
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
                        // value={""}
                        className="add-post-form"
                      />
                    </div>
                  </div>

                  <div className={cx("form-input-checkbox")}>
                    <label>Other Features</label>
                    <div className={cx("form-input-checkbox_inside")}>
                      {OtherFeatures.map((item, index) => (
                        <FormCheckbox
                          label={item}
                          key={index}
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

                  {/* <div className={cx("form-input")}>
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
                          onChange={ev => handleImageUpload(ev)}
                          className={cx("input-file")}
                        />
                    
                      </div>
                      
                  
                    </div>
                 
                  </div> */}
                  <div>
                  <section>
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
                    
                      </div>
                      
                  
                    </div>
                 
                  </div>
              <div className={dx("images")}>
                      {selectedImages &&
                        selectedImages.map((image, index) => {
                          return (
                            <div key={image} className={dx("image")} data-custom-attribute="yourValue">
                              <div>
                              <Image src={image} height="200" width="150" alt="upload" loader={({ src }) => `${src}?w=100&blur=10`}/>
                              </div>
                              <button onClick={() => deleteHandler(image)}>
                                x
                              </button>
                              <p>{image.slice(5,20)}</p>
                            </div>
                          );
                        })}
                    </div>
                  
                </section>
                    </div>
                </div>
              </FormCover>
            </div>
          </div>
          <div className={cx("post-add_inside_button")}>
            <Button modifier={ButtonModifier.PRIMARY} type="submit">
              Submit Property
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAdd;
