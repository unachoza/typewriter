import { useState, useEffect } from "react";
import { useFetchData } from "./hooks/useFetchData";
import Typewriter from './components/Typewriter';
import { FLAG_URL } from "./constants/constants";

const App = () => {
  const { data, error, isLoading } = useFetchData(FLAG_URL);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    if(data && !isLoading) {
      performTypewriter(data);
    }
  }, [data]);

  let typewriterTimeoutId:any;

  const performTypewriter = (string:string, index:number = -1) => {
    // starting index at -1 for initial delay only for the first letter
    if (index === -1) {
      typewriterTimeoutId = setTimeout(() => performTypewriter(string, index + 1), 500);
    } else if (index < string.length) {
      setLetters((prevLetters) => [...prevLetters, string[index]]);
      typewriterTimeoutId = setTimeout(() => performTypewriter(string, index + 1), 500);
    } else if(index >= string.length){
      clearTimeout(typewriterTimeoutId);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="App">
       <Typewriter letters={letters} />
    </div>
  );
}

export default App;
