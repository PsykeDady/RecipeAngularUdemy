import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
	selector:"[closeable-popup]",
	host: {
		'(document:click)': 'closeMenu($event)',
	}
})
export class CloseablePopup {
	constructor(private el:ElementRef) {
		
	}

	@HostListener("click") 
	onClick (){	
		this.apriMenu();
	}

	apriMenu():void{
		let menuMobile:HTMLElement = this.el.nativeElement as HTMLElement;
		console.log("menuMobile.classList",menuMobile.classList);

		if(menuMobile.classList && menuMobile.classList.contains("open")){
			menuMobile.classList.remove("open");
		} else {
			menuMobile.classList.add("open");
		}
	}

	closeMenu(event:Event) {
		let menuMobile:HTMLElement = this.el.nativeElement as HTMLElement;
		
		if( this.el.nativeElement.contains(event.target) || ! menuMobile.classList.contains("open") || (event.target as HTMLElement).id=="pulsante"){
			return ;
		}
		this.apriMenu();
	}
}