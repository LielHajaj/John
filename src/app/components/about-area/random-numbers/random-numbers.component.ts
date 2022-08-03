import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription, take, takeLast } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator/generator.service';

@Component({
    selector: 'app-random-numbers',
    templateUrl: './random-numbers.component.html',
    styleUrls: ['./random-numbers.component.css']
})
export class RandomNumbersComponent implements OnInit, OnDestroy {

    public arr: number[] = [];
    constructor(private generator: GeneratorService) { }
 
    private subscription: Subscription;
    ngOnInit(): void {
    }
    //Observable with filter operator:
    // public start(): void {
    //     this.generator.generate(20).subscribe(
    //         num => this.arr.push(num),
    //         err => alert(err.message),
    //         () => alert("done")
    //     );
    // }


    // public start(): void {
    //     this.generator.generate(20).pipe(filter(n=> n%2 === 0)).subscribe(
    //         num => this.arr.push(num),
    //         err => alert(err.message),
    //         () => alert("done")
    //     );
    // }

    // public start(): void {
    //     this.generator.generate(20).pipe(map(n => n*n)).subscribe(
    //         num => this.arr.push(num),
    //         err => alert(err.message),
    //         () => alert("done")
    //     );
    // }

    public start(): void {
        this.subscription = this.generator.generate(20).pipe(takeLast(5)).subscribe(
            num => this.arr.push(num),
            err => alert(err.message),
            () => alert("done")
        );

    }
    ngOnDestroy(): void {
            this.subscription?.unsubscribe();
        
    }
}
