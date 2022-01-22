/* eslint-disable @typescript-eslint/no-empty-function */
let localStorage;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
} else {
  localStorage = {
    setItem() {},
    getItem() {},
  };
}

module.exports = localStorage;
