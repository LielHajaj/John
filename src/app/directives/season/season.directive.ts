import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[season]'
})
export class SeasonDirective implements OnInit {

    @Input("season")
    public season: string;


    constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        if (this.season == this.getCurrentSeason()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
    private getCurrentSeason(): string {
        const now = new Date();
        let month = now.getMonth() + 1;
        if (month >= 4 && month <= 5) return "spring";
        if (month >= 6 && month <= 9) return "summer";
        if (month >= 10 && month <= 11) return "autumn";
        return "winter";

    }

}
