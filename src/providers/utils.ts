// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addIdField = (data: any, idField: string) => {
  if (Array.isArray(data)) {
    return data.map(item => ({
      ...item,
      id: item[idField],
    }));
  } else if (typeof data === 'object') {
    return {
      ...data,
      id: data[idField],
    };
  } else {
    throw new TypeError("Expected an array or object but got " + typeof data);
  }
};

export default addIdField;