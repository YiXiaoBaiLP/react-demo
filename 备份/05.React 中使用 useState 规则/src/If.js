// 定义 一个类型
const type = 0; // 1 2 3
function getTypeTem() {
  if (type === 1) {
    return <div> 类型1</div>;
  } else if (type === 2) {
    return <div> 类型2</div>;
  } else if (type === 3) {
    return <div>类型3</div>;
  }
  return <div>默认类型</div>;
}

function If() {
  const isLogin = false;
  return (
    <div className="If">
      {/* 逻辑与 && */}
      {isLogin && <span>this is span</span>}
      <p> 三元表达式 </p>
      {isLogin ? <span>这是成功的</span> : <span>这是失败的</span>}
      <p>根据类型来选择不同的内容</p>
      {getTypeTem()}
    </div>
  );
}

export default If;
