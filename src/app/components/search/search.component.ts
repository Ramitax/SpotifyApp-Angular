import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artists : any [] = [];
  loading? : boolean ;
  
  constructor( private spotify: SpotifyService ) {}
  
  buscar ( text: string ) {
    if( text.trim()){
      this.loading = true
      this.spotify.getArtists(text).subscribe ( (response : any) => { 
        this.artists = response
        this.loading = false
      })
    }
  }
}
