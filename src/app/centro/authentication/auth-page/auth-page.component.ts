import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

	formRegistrazione : FormGroup; 

	ngOnInit(){
		this.formRegistrazione=new FormGroup({
			"uname": new FormControl(null,[Validators.required]),
			"upsk": new FormControl(null, [Validators.required, Validators.minLength(8)])
		})
	}

	login() {
		console.log("logged")
	}

	reset(){
		this.formRegistrazione.reset()
	}

	forgot(){

		console.log("forgot psk");
	}
}
