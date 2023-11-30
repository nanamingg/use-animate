import ImageComp from "./ImageComp";

const B = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center gap-20">
      <ImageComp animateName="animate__bounce" image="cat.png" />
      <ImageComp animateName="animate__rotateIn" image="cat2.jpeg" />
    </div>
  );
};

export default B;
