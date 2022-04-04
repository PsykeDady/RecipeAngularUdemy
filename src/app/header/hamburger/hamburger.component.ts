import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/models/Tab.model';
import { RoutesService } from 'src/services/static/Routes.service';

@Component({
	selector: 'app-hamburger',
	templateUrl: './hamburger.component.html',
	styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {

	tabs:Tab[] = RoutesService.getRoutes();

	constructor() {
		
	}

}
