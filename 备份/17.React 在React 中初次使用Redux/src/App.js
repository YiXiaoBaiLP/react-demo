import { useSelector, useDispatch } from "react-redux";
// 导入创建的action对象方法
import { inscrement, decrement } from "./store/modules/counterStore";

/**
 * 项目根组件
 * @returns
 */
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch函数
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* 调用dispatch提交action对象 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(inscrement())}>+</button>
    </div>
  );
}

export default App;
