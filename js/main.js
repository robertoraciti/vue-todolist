// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
// il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi":
//  cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
//   che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo
//  alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done
//  del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          text: "Fare la spesa",
          done: false,
        },
        {
          text: "Leggere manga",
          done: false,
        },
        {
          text: "Andare al cinema",
          done: false,
        },
      ],
      newTodo: "",
    };
  },

  methods: {
    done(index) {
      this.todoList[index].done = true;
    },

    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },

    addTodo() {
      console.log(this.newTodo);
      const newObject = {
        text: this.newTodo,
        done: false,
      };
      this.todoList.unshift(newObject);
      this.newTodo = "";
    },
  },
}).mount("#app");
