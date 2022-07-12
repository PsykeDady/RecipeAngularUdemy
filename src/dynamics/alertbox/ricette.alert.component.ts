import { Component } from "@angular/core";

@Component({
	selector:"ricette-alert",
	templateUrl:"ricette.alert.component.html",
	styleUrls:['ricette.alert.component.css']
})
export class RicetteAlert {

	closed:boolean=false;
	tipologia:"ALERT"|"WARNING"|"SUCCESS"|"DARK"|"";

	close(){
		this.closed=true;
	}

	open(){
		this.closed=false;
	}

	classBasedType() {
		let background_color:string;
		let color:string;
		console.log(this.tipologia)
		switch (this.tipologia) {
			case "ALERT":
				background_color="var(--bg-ko)";
				color="var(--fg-ko)";
				break;
			case "WARNING": 
				background_color="var(--bg-wg)";
				color="var(--fg-wg)";
				break; 
			case "SUCCESS":
				background_color="var(--bg-ok)";
				color="var(--fg-ok)";
				break;
			case "DARK":
				background_color="#000000";
				color="#FFFFFF";
				break; 
			default:
				background_color="#FFFFFF";
				color="#000000";
		}
		console.log(color,background_color)
		return {'color':color,"background-color":background_color}
	}

	setType(tipologia:"ALERT"|"WARNING"|"SUCCESS"|"DARK"|""){
		this.tipologia=tipologia;
	}
}