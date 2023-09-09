export const useEnterClicker = () => {
  window.addEventListener("keypress", (e) => {
    console.log("eee enter", e);
  });
};
