import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {
  
  artist : any = {}
  loading? : boolean;
  topTracks : any []= []

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) { 
    this.loading = true
    this.router.params.subscribe( (params : any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id)
      
    })
    
  }

  getArtista ( id : string ) {
    this.loading = true;
    this.spotify.getArtist(id)
                .subscribe( (response : any ) => { this.artist = response; this.loading = false })
  }

  getTopTracks ( id: string ) {
    this.spotify.getTopTracks(id)
                .subscribe( (response : any ) => { this.topTracks = response })
  }
}
