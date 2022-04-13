import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  newReleases : any [] = [];
  loading: boolean = true;
  error: boolean = false;
  errorTexto : string = '';

  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases().subscribe( (response : any) => { 
      this.newReleases = response
      this.loading = false;
     }, ( error ) => {
      this.loading = false;
      this.error = true;
      this.errorTexto = error.error.error.message;
     });
  }
}
