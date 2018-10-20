import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// @Pipe({
//   name: 'my-pipe'
// })
// export class MyPipePipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return null;
//   }

// }


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
