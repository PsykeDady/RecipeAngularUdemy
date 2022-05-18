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
	aperturaMenu:boolean = false
	

	constructor(public router:Router){
		RoutesService.cambiorotte.subscribe(()=>{
			this.tabs=RoutesService.getRoutes()
		});
	}

	indietro():void{
		let croute = this.router.url.split("/");
		this.router.navigate(croute.splice(0,1))
	}

	apriMenu():void{
		let menuMobile:HTMLElement = document.getElementById("menuMobile");
	
		
		console.log("menuMobile.classList",menuMobile.classList);


		if(menuMobile.classList.contains("open")){
			menuMobile.classList.remove("open");
		} else {
			menuMobile.classList.add("open");
		}
	}

}
