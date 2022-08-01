import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

    transform(num: number): string | number {

        const arrNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        if (num < 0 || num > 9) return num;
        return arrNum[num];
    }

}
