const tasks = (state = [], action) => {
    switch(action.type){
        case 'CREATE_TASK':{
            return [...state, {id: action.id, summary: action.summary, desc: action.desc}];
        }
        default: {
            return state;
        }

    }
}

export default tasks;