import { ChangeEvent } from "react";
import { FunctionComponent } from "react";
import styles from "./PostAdd.module.scss";
import DownArrow from "@/src/assets/svg/DownArrow";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styless from "../../atoms/DropDown/DropDown.module.scss";
import { useLayout } from "@/src/components/hooks/useLayout";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
}

const libraries: Libraries = ["places"];
const cx = createModuleStyleExtractor(styles);


export function SearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: 'AIzaSyBmnOt5N39SC5efqHg5w5ddVubetuiEEOw' ?? "",
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError) return <div>Error loading</div>;

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
    />
  );
}

function ReadySearchBox({ onSelectAddress, defaultValue }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", null, null);
    }
  };
  const { location, setLocation } = useLayout();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    console.log(address);
    setLocation(address);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      onSelectAddress(address, lat, lng);
    } catch (error) {
      console.error(`😱 Error:`, error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        id="search"
        value={value}
        onChange={handleChange}
        disabled={!ready}
        placeholder="Search your location"
        // className="w-full p-2"
        className={cx("dropdown")}
        style={{ "paddingLeft" : "15px", 'fontSize' : "17px"} }
        autoComplete="on"
      />
      <ComboboxPopover className = {cx("dropdownSearch")}  style={{ 'fontSize' : "17px"} }>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}