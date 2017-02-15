let nextId = 2;
export const createTask = (summary, desc) => {
    return {
        type: 'CREATE_TASK',
        summary, 
        desc,
        id: nextId++
    }
}