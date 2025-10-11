// update state to an object
export const updateState = (object, newState) => {
  object = { ...object, ...newState };
  return object;
};
