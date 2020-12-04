import React, { useState } from "react";
import { Form, CustomInput } from "reactstrap";
import { countryCodes } from "../../config/countryCode";
import { getCode, getName } from "country-list";

const DropdownBtn = ({ defaultCountry, handleGetCountry }) => {
  return (
    <div className="ml-auto">
      <CustomInput
        onChange={handleGetCountry}
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
      >
        <option selected disabled value={defaultCountry}>
          {getName(defaultCountry)}
        </option>
        {countryCodes.map((c) => {
          return (
            <option key={c} value={c}>
              {getName(c)}
            </option>
          );
        })}
      </CustomInput>
    </div>
  );
};

export default DropdownBtn;
