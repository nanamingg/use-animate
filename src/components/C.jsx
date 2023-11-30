import { useAnimate } from "../hooks";

const C = () => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__swing animate__infinite"
        } `}
        src="./images/kakao.jpeg"
        alt="kakao"
      />
    </div>
  );
};

export default C;
