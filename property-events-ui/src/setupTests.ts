import '@testing-library/jest-dom';
const matchMedia = () => ({
   matches: false,
   addListener: () => {},
   removeListener: () => {},
});
// @ts-ignore
window.matchMedia = window.matchMedia || matchMedia;
