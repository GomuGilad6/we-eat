const sortByAttr = (attr) => (a, b) => {
  const first = a[attr];
  const second = b[attr];
  switch (attr) {
    case "name":
    case "rating":
    case "max_delivery_time":
      return first - second;
    default:
      return true;
  }
};

export default ({ restaurants = [], sortBy }) => {
  return restaurants.sort(sortByAttr(sortBy));
};