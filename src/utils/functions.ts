export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());
};
