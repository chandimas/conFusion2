import { Component, OnInit } from '@angular/core';
import {DISHES} from '../shared/dishes';
import { Dish } from 'src/app/shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

   dishes:Dish[] = DISHES;
  selectedDish : Dish;
  constructor() { }

  ngOnInit() {
  }


  onSelect(dish:Dish){
    this.selectedDish = dish;
  }

}
