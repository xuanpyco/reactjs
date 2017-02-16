let nextId = 2;
export const createTask = (task) => {
    let action = {
      type: 'CREATE_TASK',
      task
    }
    action.task.id = nextId++;
    action.task.createdDate = new Date();
    return action;
}
