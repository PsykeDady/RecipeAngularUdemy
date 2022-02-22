import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutesService } from '../services/routes/Routes.service';
import { Tab } from '../shared/Tab';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	tabs:Tab[]= RoutesService.getRoutes();
	
	constructor(){
		RoutesService.cambiorotte.subscribe(()=>{
			this.tabs=RoutesService.getRoutes()
		});
	}
}
