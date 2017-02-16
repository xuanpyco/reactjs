const tasks = (state = [], action) => {
    switch(action.type){
        case 'CREATE_TASK':{
            return [...state, action.task];
        }
        default: {
            return state;
        }

    }
}

export default tasks;
