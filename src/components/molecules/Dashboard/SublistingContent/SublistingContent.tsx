import React, { useEffect, useState } from "react";
import { useLayout } from "@/src/components/hooks/useLayout";
import EditPost from "../EditPost/EditPost";
import SubListing from "../SubListing/SubListing";
const SublistingContent = () => {
  const { currentSubListing } = useLayout();

  // useEffect(() => {
  //   window.location.reload();
  // }, [currentListing === "feature"]);
 
  return (
    <div>
      {currentSubListing === "sublisting" && <SubListing />}

      {currentSubListing === "edit" && (
        <EditPost label="Edit Details" flag={false} />
      )}
    </div>
  );
};

export default SublistingContent;
