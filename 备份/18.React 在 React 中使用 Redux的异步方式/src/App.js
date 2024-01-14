import { useSelector, useDispatch } from "react-redux";
// 导入创建的action对象方法
import {
  inscrement,
  decrement,
  addToNum,
  subToNum,
} from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/channelStore";
/**
 * 项目根组件
 * @returns
 */
function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  // 得到dispatch函数
  const dispatch = useDispatch();
  // 使用 useEffect 触发异步请求执行
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  return (
    <div className="App">
      {/* 调用dispatch提交action对象 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(subToNum(10))}>sub 10</button>
      <button onClick={() => dispatch(subToNum(20))}>sub 20</button>
      <span>{count}</span>
      <button onClick={() => dispatch(inscrement())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add 20</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
