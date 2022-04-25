import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';
import {Ingredient} from './navbar/ingredientType'
import {Ingredients} from './navbar/ingredients'
import {IngredientService} from './ingredient.service'
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ingredientList: Ingredient[] = Ingredients;


  constructor(private ingredientService: IngredientService) { }

  updateIngredients(ingredient: Ingredient, isChcked: any): void {
    if(!isChcked){
      this.ingredientService.addIngredient(ingredient.name);
      this.ingredientService.getDrinksFromSingleIngredient(ingredient)
    }else{
      this.ingredientService.removeIngredient(ingredient.name)
      this.ingredientService.removeDrinkFromSingleIngredient(ingredient)
    }
  }



}
