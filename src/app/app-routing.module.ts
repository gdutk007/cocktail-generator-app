import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FoodDetailsComponent} from './food-details/food-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/Drinks', pathMatch: 'full' },
  {path: 'Drinks', component: RecipeListComponent },
  {path: 'Details/:id', component: FoodDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
