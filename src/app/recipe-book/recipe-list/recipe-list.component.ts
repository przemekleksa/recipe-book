import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Frytki belgijskie', 'Według przepisu Makłowicza', 'https://www.thedailymeal.com/sites/default/files/story/2017/belgian%20fries.JPG'),
    new Recipe('Frytki belgijskie', 'Według przepisu Makłowicza', 'https://www.thedailymeal.com/sites/default/files/story/2017/belgian%20fries.JPG')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
