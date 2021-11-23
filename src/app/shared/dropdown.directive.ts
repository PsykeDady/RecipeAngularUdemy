import { Component, Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
	selector:'[appDropdown]',
	host: {
		'(document:click)': 'closeMenu($event)',
	  }
})

export class RicetteDropdown{

	@HostBinding('class.open') aperto:boolean=false;

	constructor(private el:ElementRef){}


	@HostListener("click") 
	onClick (event: Event){	
		this.aperto=!this.aperto;
	}
	// onClick (event: Event){
	// 	let elE:HTMLElement  = this.el.nativeElement as HTMLElement;
	// 	console.log(elE.classList);
	// 	if (elE.classList.contains("open")){
	// 		elE.classList.remove("open");
	// 	} else {
	// 		this.renderer.addClass(this.el.nativeElement,"open")
	// 	}
	// 	console.log(elE.classList);
	// }


	closeMenu(event:Event) {
		this.aperto=this.el.nativeElement.contains(event.target)&&this.aperto;
	}
}
