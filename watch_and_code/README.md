1. https://watchandcode.com/

2. http://todomvc.com/examples/vanillajs/

3. https://plnkr.co/ - PLUNKER

## Requirments:

* it should store todos. ok
* it should display todos. ok
* it should add new todos. ok
* it should change a todo. ok
* it should should have a way to delete a todo item. ok

* Store: Lists in JS (array); var x = [1, 2, 3]

* Display: console.log("Hello World"); console.log(x);

* Push: x.push(10); appends item, returns new length

* Change list: x[0] = 8

* Delete list item: x.splice(start, number of items to delete, <strong>x.splice(1,1)</strong> deletes the 2nd item in the array and takes only one.

* See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

```{javascript}
* test code
var todoList = {
  todos:['item1', 'item2','item3'],
  // modules
  displayToDos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: functon(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(poistion, 1);
    this.displayTodos();
};
```

* Ability = Process * Time

Read:
https://medium.com/@gordon_zhu/how-to-be-great-at-asking-questions-e37be04d0603

* V4 - Booleans

 ** we will be using booleans to test if we have made a change to our code, ex. have we deleted something true or False

```{javascript}
* test code
var todoList = {
  todos:[],
  // modules
  displayTodos: function(){
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText){
    this.todos.push({
    todoText: todoText,
    completed: false
    )};
    this.displayTodos();
  }
  changeTodo: functon(position, newValue){
    this.todos[position].todoText = todoText;
    this.displayTodos();
    //completed: false;
  },
  deleteTodo: function(position){
    this.todos.splice(poistion, 1);
    this.displayTodos();
};
```
