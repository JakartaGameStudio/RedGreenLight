/* eslint-disable @typescript-eslint/no-empty-function */
let document;

if (typeof window !== 'undefined') {
  document = window.document;
} else {
  document = {
    querySelectorAll() {
      return;
    },
  };
}

module.exports = document;
