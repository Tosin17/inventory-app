import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    pure: false // Works like ng1 but has serious performance implication for large datasets
})
export class FilterPipe implements PipeTransform {
    transform(arr: [], searchParam: string, prop?: string) {
        if (arr.length === 0 || !searchParam) {
            return arr;
        }
        return arr.filter((el: any) => el[prop].toLowerCase()
            .startsWith(searchParam.toLowerCase()))
    }
}