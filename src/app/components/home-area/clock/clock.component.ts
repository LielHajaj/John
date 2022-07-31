import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    public time: string;
    private timerId: number;

    constructor() { }


    ngOnInit(): void {
        const now = new Date();
        this.time = now.toLocaleTimeString();
        this.timerId = window.setInterval(() => {
            const now = new Date();
            this.time = now.toLocaleTimeString();
        }, 1000);
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
    ngDoCheck(): void {
    }
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }



}
