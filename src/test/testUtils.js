export const findByTestAttributes = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
