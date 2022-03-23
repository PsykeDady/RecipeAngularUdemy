import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrls: ['./ricetta.component.css']
})
export class RicettaComponent {

	editMode:boolean; 

	constructor(activatedRoute: ActivatedRoute) {
		activatedRoute.queryParams.subscribe(params => {
			let editFlag=params["editMode"];
			this.editMode= editFlag!=undefined && (editFlag == "true" || editFlag == "1");
		})
		activatedRoute.params.subscribe( params=> {
			let recipeName=params["name"];
			let editFlag=activatedRoute.snapshot.queryParams["editMode"];
			this.editMode= editFlag!=undefined && (editFlag == "true" || editFlag == "1");
			this.editMode=editFlag || recipeName.toLowerCase()=="newrecipe";
		})
	}

}
