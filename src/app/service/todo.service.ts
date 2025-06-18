import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];
  private nextId = 1;

  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(title: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(newTodo);
    return newTodo;
  }


  delete(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggle(todo: Todo): void {
    todo.completed = !todo.completed;
  }

    update(updatedTodo: Todo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = { ...updatedTodo };
    }
  }
  stats(){
    const total = this.todos.length;
    const completed = this.todos.filter(todo => todo.completed).length;

    return {
      total,
      completed,
      active: total - completed,
      completionRate: total? Math.round((completed / total) * 100) : 0
    };
  }


  constructor() { }
}
