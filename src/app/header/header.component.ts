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
		this.aperturaMenu=!this.aperturaMenu;
		let el:HTMLElement =document.getElementById("menuMobile")
		if(this.aperturaMenu){
			el.style.height="var(--h-menum)"
		} else {
			el.style.height="0";
		}
	}

}
