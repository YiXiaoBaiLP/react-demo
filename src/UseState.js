import { useState } from "react";

function UseState() {
  // 1. 调用 useState 添加一个状态变量
  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0);

  // 2.点击事件回调
  const handleClick = () => setCount(count + 1);

  // 修改 对象中的属性
  const [form, setForm] = useState({ name: "jack" });
  const handleForm = () => {
    return setForm({
      ...form,
      name: "修改后的对象",
    });
  };
  return (
    <div className="UseState">
      <button onClick={handleClick}>{count}</button>
      <h2>====== 修改对象中的名称 =========</h2>
      <button onClick={handleForm}> 修改对象中的名称：{form.name}</button>
    </div>
  );
}

export default UseState;
