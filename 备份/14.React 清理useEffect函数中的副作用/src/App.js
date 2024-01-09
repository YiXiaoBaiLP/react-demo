import { useState, useEffect } from "react";

function Son() {
  // 1. 渲染时开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("定时器情理中。。。");
    }, 10);
    return () => {
      // 清理副作用（组件卸载时）
      // 关闭定时器
      clearInterval(timer);
    };
  }, []);
  return <div>this is Son</div>;
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载son组件</button>
      <button onClick={() => setShow(true)}>装载son组件</button>
    </div>
  );
}

export default App;
