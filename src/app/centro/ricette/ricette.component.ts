import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-ricette',
  templateUrl: './ricette.component.html',
  styleUrls: ['./ricette.component.css']
})
export class RicetteComponent {
	showDettaglio:boolean
	constructor(route:Router){
		
		route.events.pipe(filter(
			e => e instanceof NavigationEnd
		)).subscribe(v=>{
			let ne=v as NavigationEnd;
			console.log("ne.urlAfterRedirects",ne.urlAfterRedirects)
			
			this.showDettaglio=ne.urlAfterRedirects!="/recipes";
		})
	}
	
	dettaglioFlag() {
		return !this.showDettaglio?{opacity:'0', width:'0px'}:"";
	}
}
