import { useState, useEffect, useRef } from "react";
import A from "./components/A";
import B from "./components/B";

const App = () => {
  const [isObserve, setIsObserve] = useState(false);

  const bRef = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        setIsObserve(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.current.observe(bRef.current);

    return () => observer.current.unobserve(bRef.current);
  }, []);

  return (
    <>
      <A />
      <B bRef={bRef} isObserve={isObserve} />
    </>
  );
};

export default App;
