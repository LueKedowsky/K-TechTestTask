import { Component } from '@angular/core';
import { Item } from "./item";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'completed' = 'all';

  allItems = [
    { title: 'eat', completed: true },
    { title: 'sleep', completed: false },
    { title: 'play', completed: false },
    { title: 'laugh', completed: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'completed' ? item.completed : !item.completed);
  }

  addItem(title: string) {
    this.allItems.unshift({
      title,
      completed: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
