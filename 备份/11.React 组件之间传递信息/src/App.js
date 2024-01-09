// App -> A -> B
import { createContext, useContext } from "react";
// 使用 createtContext() 来保存需要传递的变量
const MsgContext = createContext();

function A() {
  return (
    <div>
      <B />
    </div>
  );
}

function B() {
  // 使用 useContext 方法来传递 参数
  const msg = useContext(MsgContext);
  return <div>this is B component, asdsa{msg}</div>;
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  const msg = "this is app msg";
  return (
    <div>
      {/* 将 App 组件中的 msg 传入到 B 组件中 */}
      {/* value 中保存需要传递的 参数 */}
      <MsgContext.Provider value={msg}>
        this is App
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
