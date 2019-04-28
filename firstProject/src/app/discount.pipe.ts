import {Pipe , PipeTransform } from "@angular/core";

@Pipe({
    name: 'discount'
})

export class Discount implements PipeTransform{
    transform(value){
        return value - (value*0.1);
    }
}