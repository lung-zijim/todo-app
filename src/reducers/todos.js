const todos = (state = [], action) => {    // state 是数组，action是一个对象
    // console.log(state)
    // console.log(action)
    // 添加第一次：state是[]数组，action是{id: 0, text: 'ccc', type: 'ADD_TODO'}字典
    // 添加第二次：state-> [{completed: false, id: 0, text: 'ccc'}]  action-> {id: 1, text: '第二', type: 'ADD_TODO'}
    switch (action.type) {
        case "ADD_TODO":
            return [
                // 3个点能够文字上拆分数组字典成逗号相隔的对象。[1,2] => 1, 2 或者 {a:1 b:2} => a:1, b:2
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            // [{...}, {...}, {completed: false, id: 0, text: "get up"}]
        case "TOGGLE_TODO":
            // 每个 => 箭头后面生成的东西会加入一个List
            return state.map(todo =>  // 每个todo 都是一个对象{}
                // map 会把每轮的语句加入 list
                (todo.id === action.id)
                // javascript 的字典可以有重复键，但是会被后面的覆盖
                // { completed: false, id: 0, text: 'ccc', completed: true } => { id: 0, text: 'ccc', completed: true }
                ? {...todo, completed: !todo.completed}
                : todo
            );
        default:
            return state;
    }
}

export default todos;
