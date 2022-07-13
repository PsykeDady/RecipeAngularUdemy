import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FactoryPlaceholderDirective } from 'src/directives/factory.placeholder.directive';
import { RicetteAlert } from 'src/dynamics/alertbox/ricette.alert.component';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit ,AfterViewInit{

	formRegistrazione : FormGroup; 
	@ViewChild(FactoryPlaceholderDirective, {static:true}) 
	factoryPlaceholder!: FactoryPlaceholderDirective; 
	

	constructor(private componentFactory : ComponentFactoryResolver){}

	ngOnInit(){
		this.formRegistrazione=new FormGroup({
			"uname": new FormControl(null,[Validators.required]),
			"upsk": new FormControl(null, [Validators.required, Validators.minLength(8)])
		})
	}

	ngAfterViewInit(): void {
		console.log("afterview check")
		console.log("this.factoryPlaceholder:",this.factoryPlaceholder)
	}

	login() {
		console.log("logged")

		const alertFactory: ComponentFactory<RicetteAlert> = this.componentFactory.resolveComponentFactory(RicetteAlert);
		console.log("this.factoryPlaceholder.viewContainerRef:",this.factoryPlaceholder.viewContainerRef);

		const viewContainerRef = this.factoryPlaceholder.viewContainerRef; 
		viewContainerRef.clear();
		
		let alertRef= viewContainerRef.createComponent<RicetteAlert> (alertFactory);

		alertRef.instance.message="Purtroppo lo sviluppo della pagina di accesso non \u00e8 ancora completato"

		alertRef.instance.closed=false;

		alertRef.instance.titolo="Scusa!!!"

		alertRef.instance.tipologia="ALERT"

	}

	reset(){
		this.formRegistrazione.reset()
	}

	forgot(){

		console.log("forgot psk");
	}
}
