class TodoManager {
    constructor(todos) {
      this.todos = todos;
    }
    getCompleted(){
        let completed = []
        for (let i = 0; this.todos.length; i++){
            console.log(`${i} <> ${this.todos[i]['is_completed']}`)
            if (this.todos[i]['is_completed'] === true){
              //completed.push(this.todos[i]['title']);
              completed.push(this.todos[i]);
              
            };
          return completed
        }
    };
    getPending(){
        let pending = []
        for (let i = 0; this.todos.length; i++){
            if (this.todos[i]['is_completed'] === false){
                //pending.push(this.todos[i]['title']);
                pending.push(this.todos[i]);
            };
          return pending;
        }
    };

    getFirst(){
      return this.todos[0];
    }

    getLast(){
      return this.todos[this.todos.length - 1]
    }

    getCount(){
      return this.todos.length;
    }

    markAsCompleted(done){
      for(i=0; done.length; i++){
        if(this.todos[i]['title'] === done){
          this.todos[i]['is_completed'] === true;
        };
      }
    };

    add(toAdd){
      this.todos.push(toAdd);
    }
    allCompleted(){
      let check = (bool) => bool === true;
      return this.todos['is_completed'].every(check)
    }
    allPending(){
      let check = (bool) => bool === false;
      return this.todos['is_completed'].every(check)  
      }
      exportCsv(){
        return this.todos['is_completed'].join(', ')
      }
    }
      


try {
  const initialTodos = [{
    title: "Learn JavaScript",
    is_completed: true
  }, {
    title: "Practice flashcards",
    is_completed: false
  }];
  const todoManager = new TodoManager(initialTodos);

  console.log(todoManager.getCompleted()); //returns completed todos
  console.log(todoManager.getPending()); //returns todos that are not completed
  console.log(todoManager.getFirst());
  console.log(todoManager.getLast());
  console.log(todoManager.getCount());
  todoManager.markAsCompleted("Practice flashcards"); //receives a title, finds todo with that title and marks it as completed
  todoManager.add({
    title: "Recap flashcards",
    is_completed: true
  });
  //when is_completed is not defined, it should default to false
  todoManager.add({
    title: "Get some rest"
  });
  console.log(todoManager.allCompleted()); //returns true when all todo items are completed
  console.log(todoManager.allPending()); //returns true when all todo items are pending
  console.log(todoManager.exportCsv()); //returns Comma Separated Values of titles "Todo title, Another todo title"

} catch (error) {
  console.log("Error");
}