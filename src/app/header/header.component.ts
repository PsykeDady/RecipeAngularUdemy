import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/models/Tab.model';
import { RoutesService } from 'src/services/static/Routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

	tabs:Tab[] = RoutesService.getRoutes();
	menu_visibile:boolean = true;
	ham_pressed:boolean = false;

	constructor(){
		RoutesService.cambiorotte.subscribe(()=>{
			this.tabs=RoutesService.getRoutes()
		});
	}

	hamFlag(){
		this.ham_pressed=!this.ham_pressed;
	}

}
