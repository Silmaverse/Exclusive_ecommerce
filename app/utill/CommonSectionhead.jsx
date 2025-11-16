import React from "react";
import Text from "../utill/Text";

const CommonSectionhead = ({title}) => {
  return (
    <>

      <div className="section_head flex items-center gap-4">
        <div className="w-5 h-10 bg-brand"></div>
        <Text variant="h4" classname="text-brand">
          {title}
        </Text>
      </div>


    </>
  );
};

export default CommonSectionhead;
