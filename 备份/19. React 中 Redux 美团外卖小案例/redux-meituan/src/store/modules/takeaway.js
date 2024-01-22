// 编写 store
import { createSlice } from "@reduxjs/toolkit";
// 调用请求
import axios from "axios";

const foodsStore = createSlice({
  name: "foods",
  initialState: {
    // 初始化一个商品列表
    foodsList: [],
    activeIndex: 0,
    // 购物车列表
    cartList: [],
  },
  reducers: {
    // 更改商品列表
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    // 更改 acivetIndex
    changeActiveIndex(state, action) {
      console.log(action.payload);
      state.activeIndex = action.payload;
    },
    // 添加购物车
    addCart(state, action) {
      //是否添加过商品
      const commodity = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (commodity) {
        console.log("购物车中的内容, 已经存在的内容：", action.payload.id);
        commodity.count++;
      } else {
        console.log("购物车中的内容, 没用的内容", action.payload.id);
        state.cartList.push(action.payload);
      }
    },
    // 购物车中的物品数量 增加
    increCount(state, action) {
      // 找到要修改谁的count ，通过id来增加
      const cartCount = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      cartCount.count++;
    },
    // 购物车中的物品数量 减少
    dncreCount(state, action) {
      // 找到要修改谁的count ，通过id来增加
      const cartCount = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      cartCount.count--;
      if (cartCount.count === 0) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    // 清除购物车中的内容
    clearCart(state, action) {
      state.cartList = [];
    },
  },
});

// 获取异步部分
const {
  setFoodsList,
  changeActiveIndex,
  addCart,
  increCount,
  dncreCount,
  clearCart,
} = foodsStore.actions;
const fetchFoodsList = () => {
  return async (dispatch) => {
    // 编写异步逻辑，获取接口数据
    const res = await axios.get("http://localhost:3004/takeaway");
    // 调用dispatch 函数提交 action
    dispatch(setFoodsList(res.data));
  };
};

export {
  fetchFoodsList,
  changeActiveIndex,
  addCart,
  increCount,
  dncreCount,
  clearCart,
};
const reducer = foodsStore.reducer;
export default reducer;
