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

	closeMenu(event:Event) {
		this.aperto=this.el.nativeElement.contains(event.target)&&this.aperto;
	}
}
