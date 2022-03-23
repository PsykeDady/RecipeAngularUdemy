import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
	maxwidth:number=12
	ncol:number=4
	left:number=Math.ceil((this.maxwidth - this.ncol)/2) + 1 

}
