import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化 state
  initialState: {
    count: 0,
  },
  // 修改状态的方法 同步方法 支持直接修改
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

// 解析出来 actionCreater 函数
const { inscrement, decrement } = counterStore.actions;
// 函数reducer
const reducer = counterStore.reducer;

// 以按需导出的方式导出 actionCreate
export { inscrement, decrement };
// 以默认导出的方式导出 reducer
export default reducer;
