import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';



@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input("highlight")
    public defaultBackColor="";

    @HostBinding("style.background-color")
    public backColor = "";

    ngOnInit(): void {
        if(!this.defaultBackColor) this.defaultBackColor= "yellow";
    
    }
    @HostListener("mouseenter")
    public paint():void{
        this.backColor= this.defaultBackColor;
    }
    @HostListener("mouseleave")
    public clear():void{
        this.backColor= "";
    }


}
