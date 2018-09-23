import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input()
dish:Dish;
}
