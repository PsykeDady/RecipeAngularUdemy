import { Component } from '@angular/core';
import { Choise } from './shared/Choise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ricette';
	hamburger=false;
	tab:Choise=Choise.RECIPES;
	choises=Choise;



	changeTab(theChoise:Choise) {
	  this.tab=theChoise;
	}
}
