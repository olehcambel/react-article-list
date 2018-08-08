export const arrToMap = array => {
  return array.reduce(
    (acc, data) => ({
      ...acc,
      [data.id]: data
    }),
    {}
  );
}

export const mapToArr = obj => {
  return Object.values(obj) 
}

