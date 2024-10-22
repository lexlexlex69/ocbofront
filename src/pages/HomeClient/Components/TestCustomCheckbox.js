import { useField, useFormikContext } from "formik";
import React from "react";

export default function TestCustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  console.log(field);
  return (
    <input
      {...props}
      onClick={() => {
        const data = field.value.workScopeCheckist;
        const newObject = { id: 4, data: "ghj" };
        const index = data.findIndex((item) => item.id === newObject.id);
        console.log(index);

        if (index !== -1) {
          data.splice(index, 1);
        } else {
          setFieldValue("workScopeCheckist", [...data, newObject]);
        }
      }}
    />
  );
}
