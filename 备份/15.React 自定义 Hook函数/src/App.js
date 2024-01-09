import { useState } from "react";

/**
 * 此函数中设置可复用逻辑
 * @returns 
 */
function useToggle() {
  // 可以复用的代码
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  // 哪些状态和回调函数需要在其它组件中使用 则return出去
  return {
    value,
    toggle,
  };
}
/*
  封装自定义 Hook 思路
  1. 声明一个以 use打头的函数
  2. 在函数体内封装可以复用的逻辑（只要是可以复用的逻辑）
  3. 把组件中用到的状态或者回调 return 出去（以对象或数组）
  4. 在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用
*/

/**
 * 项目根组件
 * @returns
 */
function App() {
  const { value, toggle } = useToggle();
  return (
    <div>
      {value && <div>his is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

export default App;
