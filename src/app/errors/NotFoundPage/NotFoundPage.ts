import { Component } from "@angular/core";

@Component({
	selector:"<app-notfound-page>",
	templateUrl:"NotFoundPage.html",
	styleUrls:["NotFoundPage.css"]
})
export class NotFoundPage {
	maxwidth:number=12
	ncol:number=7
	left:number=Math.ceil((this.maxwidth - this.ncol)/2) + 1 
}