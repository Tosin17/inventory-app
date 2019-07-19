import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenTextPipe implements PipeTransform {
    transform(text: string, n: number) {
        return (n < text.length) ? `${text.substring(0, n)}...` : text;
    }
}