import { useState } from "react";

function UseState() {
  // 1. 调用 useState 添加一个状态变量
  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0);

  // 2.点击事件回调
  const handleClick = () => setCount(count + 1);

  return (
    <div className="UseState">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default UseState;
