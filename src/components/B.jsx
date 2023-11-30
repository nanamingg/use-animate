const B = ({ bRef, isObserve }) => {
  return (
    <div
      ref={bRef}
      className="bg-blue-100 min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__bounce animate__infinite"
        } `}
        src="./images/tom.png"
        alt="tom"
      />
    </div>
  );
};

export default B;
