import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component'; 
import { ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [AppComponent, RecipeListComponent, FoodDetailsComponent, MessagesComponent, DashboardComponent, TestComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule, 
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
