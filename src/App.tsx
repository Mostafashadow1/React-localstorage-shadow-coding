import { useEffect, useState } from "react";
import "./App.css";
import {
  getItemFromLocalstorage,
  setItemInLocalstorage,
} from "./utils/localstorage";

function App() {
  const [count, setCount] = useState<number>(() =>
    getItemFromLocalstorage("count", 0)
  );

  useEffect(() => {
    setItemInLocalstorage("count", count);
  }, [count]);
  return (
    <div>
      <h2>Item's in cart is : {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Add item in your cart
      </button>
    </div>
  );
}

export default App;
