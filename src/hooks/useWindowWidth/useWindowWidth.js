import useWindowSize from "../useWindowSize/useWindowSize";

const useWindowWidth = () => {
  const { windowWidth } = useWindowSize();
  return windowWidth;
};

export default useWindowWidth;
