const data = [{ id: 1, value: 2 }, { pId: 1, id: 2 }, { pId: 2, id: 3 }, { pId: 2, id: 4 }, { pId: 1, id: 5 }, { id: 6 }]
function list2Tree(list) {
  const map = {};
  const result = []
  list.forEach((item) => {
    map[item.id] = item;
  });
  list.forEach((item) => {
    if (item.pId === undefined) result.push(item);
    else {
      (map[item.pId].children || (map[item.pId].children = [])).push(item)
    }
  })
  return result;
}
list2Tree(data)