import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list/shopping.list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent {

	constructor(public ingredients: ShoppingListService ) {	}

}
