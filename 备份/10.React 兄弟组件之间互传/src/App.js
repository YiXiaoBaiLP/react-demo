import { useState } from "react";
// 核心：在子组件中调用父组件中的函数并传递实参

function A({ setAName }) {
  const name = "this is A name";
  return (
    <div>
      <button onClick={() => setAName(name)}>click me!</button>
    </div>
  );
}

function B({ setBName }) {
  return <div>this is B name, {setBName}</div>;
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  const [name, setName] = useState("");
  const getAName = (name) => {
    console.log(name);
    setName(name);
  };
  return (
    <div className="App">
      <A setAName={getAName} />
      <B setBName={name} />
    </div>
  );
}

export default App;
