import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[] ): string {
    if ( images != null && images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
