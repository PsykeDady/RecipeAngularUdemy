import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

	constructor(public router:Router){
		RoutesService.cambiorotte.subscribe(()=>{
			this.tabs=RoutesService.getRoutes()
		});
	}

	hamFlag(){
		this.ham_pressed=!this.ham_pressed;
	}

	indietro():void{
		let croute = this.router.url.split("/");
		this.router.navigate(croute.splice(0,1))
	}

}
