import { Component, OnInit } from "@angular/core";

@Component({
	selector:"<app-notfound-page>",
	templateUrl:"NotFoundPage.html",
	styleUrls:["NotFoundPage.css"]
})
export class NotFoundPage {
	maxwidth:number=12
	ncol:number=8
	left:number=Math.ceil((this.maxwidth - this.ncol)/2) + 1 
}