import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
	selector:"[factoryPlaceholder]"
})
export class FactoryPlaceholderDirective {
	constructor(public viewContainerRef:ViewContainerRef) {
		console.log("called")
	}
}