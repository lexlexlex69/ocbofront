import * as yup from "yup";
export const schemaBuildingPermitChecklist = yup.object().shape({
  landOwnershipStatus: yup.string().required("Required"),
  landOwnershipMethod: yup.string().required("Required"),
  landOwnershipForm: yup.string().required("Required"),
  projectTitle: yup.string().required("Required"),
  lotNo: yup.string().required("Required"),
  blkNo: yup.string().required("Required"),
  tctNo: yup.string().required("Required"),
  street: yup.string().required("Required"),
  barangay: yup.object().required("Required"),
  taxDecNo: yup.string().required("Required"),
  disctrict: yup.string().required("Required"),
  city: yup.string().required("Required"),
  // username: yup
  //   .string()
  //   .min(3, "Username must be at least 3 characters long")
  //   .required("Required"),
  // jobType: yup
  //   .string()
  //   .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
  //   .required("Required"),
  // acceptedTos: yup
  //   .boolean()
  //   .oneOf([true], "Please accept the terms of service"),
});
