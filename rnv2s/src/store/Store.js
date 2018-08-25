import { types } from "mobx-state-tree"

const Todo = types.model({
    key: types.string,
    count: types.number
});

const CountStore = types.model({
    aCount: types.optional(types.number, 0),
    todoList: types.optional(types.array(Todo), [Todo.create({ key: `todo${0}`, count: 0 })])
}).actions(self => {
    const aIncrease = () => {
        self.aCount += 1;
    }

    const aDecrease = () => {
        self.aCount -= 1;
    }

    const addTodo = () => {
        self.todoList.push(Todo.create({ key: `todo${self.todoList.length + 1}`, count: 0 }));
    }
    const increaseTodoCount = (index = 0) => {
        const todo = self.todoList[index];
        console.log(todo);
        todo.count += 1;
    }
    return {
        aIncrease,
        aDecrease,
        addTodo,
        increaseTodoCount
    };
})

export default CountStore;
