import { useEffect, useState } from "react";

const URL = "http://geek.itheima.net/v1_0/channels";
/**
 * 1.没有依赖项 初始 + 组件更新
 * @returns
 */
function A() {
  useEffect(() => {
    console.log("A 中的 useEffact 方法执行了");
  });
  const [count, setCount] = useState(0);
  return (
    <dev>
      this is A
      <button onClick={() => setCount(count + 1)}>click me A! {count}</button>
    </dev>
  );
}
/**
 * 传入空的数组依赖 初始执行一次
 * @returns
 */
function B() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const resJson = await res.json();
      console.log(resJson);
      console.log(resJson.data.channels);
      setList(resJson.data.channels);
    }
    getList();
  }, []);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * 监测 [sum] 时候存在变化，如果发生变化这执行 useEffect 函数
 * @returns
 */
function C() {
  const [count, setCount] = useState(0);
  const sum = 10;
  useEffect(() => {
    console.log(" C 中的 count 发生了变化");
    // 这里监测 sum 中的变化，如果发生变化这执行此函数
  }, [sum]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click me C!{count}</button>
    </div>
  );
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  return (
    <div>
      <A />
      <B />
      <C />
    </div>
  );
}

export default App;
