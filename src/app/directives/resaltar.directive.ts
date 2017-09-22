import {Directive, OnInit, ElementRef, Renderer2, Input} form "@angular/core";
@Directive({
	selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit{
	constructor(private elRef: ElementRef, private renderer: Renderer2){}
	@Input('resaltar') plan : string = '';
	ngOnInit(){
		if(this.plan === 'pagado') {
			this.renderer.setStyle(this.elRef.nativeElement, 'backgorund-color', 'yellow');
			this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
		}
	}
}