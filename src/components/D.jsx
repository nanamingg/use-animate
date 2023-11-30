import { useAnimate } from "../hooks";

const D = () => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-white min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__bounce animate__infinite"
        } `}
        src="./images/cat.png"
        alt="cat"
      />
    </div>
  );
};

export default D;
