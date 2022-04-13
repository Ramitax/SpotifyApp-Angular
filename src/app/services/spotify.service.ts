import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  token = 'BQBmcd2-0bLFinVBozjPfiP8WxPc1uxkO5AwrBzmZ6Z0LHOYjlrqsYMaADWO6cdk7YO1NFKNq2AjASv9hRs';
  
  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get( url, {headers} );
  } 

  getNewReleases( ) {

    return this.getQuery('browse/new-releases?country=AR&limit=20')
               .pipe ( map ( (response : any ) => response.albums.items ) )
  }

  getArtists ( text: string ) {
    return this.getQuery(`search?q=${text}&type=artist&limit=15`)
               .pipe ( map ( (response : any) => response.artists.items ) )
  }

  getArtist ( id : string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks ( id : string ) {
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
               .pipe ( map ( (response : any) => response.tracks ) );
  }
}