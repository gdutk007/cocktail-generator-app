import { Component, Input, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {Ingredient} from './ingredientType'
import {Ingredients} from './ingredients'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../app.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public sideNavRef: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

  ingredientList : Ingredient[] = Ingredients;

  toggleSideNav(): void {
    this.sideNavRef.toggle();
  }

}
