// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addIdField = (data: any[] | any, idField?: string) => {
  if (Array.isArray(data)) {
    return data.map((item, index) => ({
      ...item,
      id: idField ? (item[idField] !== undefined ? item[idField] : null) : index,
    }));
  } else if (typeof data === 'object' && data !== null) {
    return {
      ...data,
      id: idField ? (data[idField] !== undefined ? data[idField] : null) : null,
    };
  } else {
    throw new TypeError("Expected an array or object but got " + typeof data);
  }
};

export default addIdField;