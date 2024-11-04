export default function selectValuesDisplay(selectOption, value) {
  //   console.log(selectOption);
  return selectOption.find((item) => item.id == value)?.label?.toUpperCase();
}
