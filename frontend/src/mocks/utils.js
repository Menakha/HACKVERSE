export const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const randomDelay = (min = 300, max = 800) =>
  delay(Math.random() * (max - min) + min);

export const shouldSimulateError = (probability = 0.05) =>
  Math.random() < probability;

export const simulateApiCall = async (data, errorMessage) => {
  await randomDelay();

  if (shouldSimulateError() && errorMessage) {
    throw new Error(errorMessage);
  }

  return data;
};

export const paginateArray = (array, page, pageSize) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return array.slice(start, end);
};

export const sortByField = (array, field, order = 'asc') => {
  return [...array].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];

    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const filterBySearch = (array, searchTerm, fields) => {
  if (!searchTerm) return array;

  const lowerSearch = searchTerm.toLowerCase();

  return array.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      return String(value).toLowerCase().includes(lowerSearch);
    })
  );
};
