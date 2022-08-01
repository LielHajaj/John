import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[zoomIn]'
})
export class ZoomInDirective implements OnInit {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, "transition", "transform 1s");
    }
    @HostListener("mouseenter")
    public zoomIn():void {
        this.renderer.setStyle(this.elementRef.nativeElement, "transform", "scale(1.2)");
    }
    @HostListener("mouseleave")
    public clear():void {
        this.renderer.removeStyle(this.elementRef.nativeElement, "transform");
    }
}
