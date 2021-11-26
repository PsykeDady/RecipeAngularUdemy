import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Choise } from '../shared/Choise';

@Component({
  selector: 'app-header-btn',
  templateUrl: './header-btn.component.html',
  styleUrls: ['./header-btn.component.css']
})
export class HeaderBtnComponent  {

	choises = Choise;
	@Input() active: Choise; 
	@Output() choise: EventEmitter<Choise> = new EventEmitter<Choise> ();

	primaryBtn(theChoise:Choise){
		return theChoise===this.active;
	}

	changeChoise(theChoise:Choise){
		this.choise.emit(theChoise);
	}



}
