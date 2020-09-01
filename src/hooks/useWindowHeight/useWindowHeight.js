import useWindowSize from "../useWindowSize/useWindowSize";

const useWindowHeight = () => {
  const { windowHeight } = useWindowSize();
  return windowHeight;
};

export default useWindowHeight;
