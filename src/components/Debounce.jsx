// DebounceFunc.js
const DebounceFunc = ({ func, delay }) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default DebounceFunc;
