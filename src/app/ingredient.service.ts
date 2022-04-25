import { Injectable, OnInit, Directive, Input, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Drink} from './types/types'
import { forkJoin , Observable , of} from 'rxjs';
import {RecipeListComponent} from './recipe-list/recipe-list.component'
import { DriverProvider } from 'protractor/built/driverProviders';
import {Ingredient} from './navbar/ingredientType'
import { HammerModule } from '@angular/platform-browser';
import { runInThisContext } from 'vm';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredientList: string[] = [];
  retrievedDrinks: Map<string, Drink> = new Map<string,Drink>(); 

  constructor(private https: HttpClient) { }

  private heroesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';  // URL to web api

  updateIngredientList(ingredient: string): void{
    const index = this.ingredientList.indexOf(ingredient,0);
    if(index > -1){
      this.ingredientList.splice(index,1);
    }else{
      this.ingredientList.push(ingredient);
    }
  }

  addIngredient(ingredient: string): void {
    const index = this.ingredientList.indexOf(ingredient,0);
    if(index < 0){
      this.ingredientList.push(ingredient);
    }
  }

  removeIngredient(ingredient: string): void{
    const index = this.ingredientList.indexOf(ingredient,0);
    if(index > -1){
      this.ingredientList.splice(index,1);
    }
  }

  clear(): void {
    this.ingredientList = [];
  }

  getCheckedList(): string[] {
    return this.ingredientList;
  }

  getDrinksFromSingleIngredient(ingredient: Ingredient): void {
    this.https.get<Drink[]>(this.heroesUrl+ingredient.name)
                .subscribe( (drink: any) => {
                  drink = JSON.parse(JSON.stringify(drink))
                  drink["drinks"].forEach((element: any) => {
                    if(!this.retrievedDrinks.has(element.idDrink)){
                            this.retrievedDrinks.set(element.idDrink, {id: element.idDrink, 
                                                                    name: element.strDrink,
                                                                    photo: element.strDrinkThumb} as Drink );
                          }
                  })
                  console.log(this.retrievedDrinks)
                })
}

removeDrinkFromSingleIngredient(ingredient: Ingredient): void {
  this.https.get<Drink[]>(this.heroesUrl+ingredient.name)
              .subscribe((drinks: any) => {
                drinks = JSON.parse(JSON.stringify(drinks))
                drinks["drinks"].forEach((element: any) => {
                  if(this.retrievedDrinks.has(element.idDrink)){
                    this.retrievedDrinks.delete(element.idDrink)
                  }
                });
              })
}

getDrinksFromIngredients(): Observable<Drink[][]> {
    var vals = this.ingredientList.map( (ing: string) => {
      return this.https.get<Drink[]>(this.heroesUrl+ing); 
    })
    return forkJoin( vals );
  }

}
