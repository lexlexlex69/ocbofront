export default function selectValuesDisplay(selectOption, value) {
  //   console.log(selectOption);
  return selectOption.find((item) => item.id == value)?.label?.toUpperCase();
}
export function selectValuesDisplayVer2(selectOption, value) {
  console.log(selectOption);
  //   console.log(selectOption);
  let obj = selectOption?.find((item) => item.id == value);
  return `${obj?.label}: ${obj?.description}`;
}

// `${value}: ${description}`;
