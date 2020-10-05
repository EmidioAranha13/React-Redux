
const ACTIONS = {
    LIST: "LIST_TASK",
    ADD: "ADD_TASK",
    REMOVE: "REMOVE_TASK"
}

const inicialState = {
    taskList: []
}

export const postReducer = (state = inicialState, action) => {
    switch(action.type){
        case ACTIONS.LIST:
            return {...state, taskList: action.tasks}
        default:
            return state;
    }
}