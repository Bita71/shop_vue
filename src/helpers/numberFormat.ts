const numberFormat = (value = 0) => {
  return Intl.NumberFormat().format(value);
};

export default numberFormat;
