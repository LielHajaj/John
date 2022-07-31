import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {



    @Output()
    public report = new EventEmitter<string>();
    public send(level: string): void {
        this.report.emit(level)
    }

    constructor() { }

    ngOnInit(): void {
    }

}
