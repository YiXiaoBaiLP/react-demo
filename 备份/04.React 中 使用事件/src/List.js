function List() {
  const list = [
    { id: 1001, name: "Vue" },
    { id: 1002, name: "React" },
    { id: 1003, name: "Angular" },
  ];
  return (
    <div className="List">
      this is List
      {/* 渲染列表 */}
      {/* 
        使用 map 循环哪个结构 return 哪个结构
        注意事项：
          1. 加上一个独一无二的key 字符串或 number id
          2. key的作用：React 框架内部使用，提升更新性能
      */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
