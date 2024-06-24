const isDate = (date) => {
  return Boolean(Date.parse(date));
};

console.log(isDate("2014-10-31"))
