const visibilityFilter = (state = "SHOW_ALL", action) => {
    console.log(state)
    console.log(action)
    // 初始： state = "SHOW_ALL" ，action = {id: 0, text: "di yi", type: "ADD_TODO"}
    // 点击Completed： state = "SHOW_ALL" 是变化前, action = { filter: "SHOW_COMPLETED", type: "SET_VISIBILITY_FILTER" }
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default: 
            return state;
    }
}

export default visibilityFilter;
