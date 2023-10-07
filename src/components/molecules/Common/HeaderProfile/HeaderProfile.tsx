import DropDown from "@/src/components/atoms/DropDown/DropDown";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
export interface IHeaderProfile {
  profileSelectDropdown: string[];
  setProfileDropdown: (value: boolean) => any;
  clasName?: string;
  urlRoute?: string;
}

const HeaderProfile: FC<IHeaderProfile> = ({
  profileSelectDropdown,
  setProfileDropdown,
  clasName,
  urlRoute,
}) => {
  const route = useRouter();
  const handleProfileSelect = (option: any) => {
    if (option === "Dashboard") {
      route.push(`/${urlRoute}`);
    } else if (option === "Logout") {
      localStorage.removeItem("token");
      route.push("/auth/login");
    } else if (option === "Home") {
      route.push(`${urlRoute}`);
    }

    setProfileDropdown(false);
  };
  return (
    <div>
      <DropDown
        dropdown={profileSelectDropdown}
        setLabel={setProfileDropdown}
        onChange={handleProfileSelect}
        className={clasName}
      />
    </div>
  );
};

export default HeaderProfile;
