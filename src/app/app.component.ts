import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {ServicesMusicService} from './services/services-music.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy  {
   destroy = new Subject<void>()
   albums:any
   artists:any
   songs:any
   musicData:any;
   p: Number = 1;
   count: Number = 5;

  constructor(private musicService: ServicesMusicService){}

  ngOnInit(): void {
    this.getAlbums()
    this.getArtists()
    this.getSongs()
    this.filterData()
  }

  getAlbums(){
    this.albums=this.musicService.getAlbums()
  }

  getArtists(){
    this.artists=this.musicService.getArtists()
  }

  getSongs(){
    this.songs=this.musicService.getSongs()
  }

  filterData(){
    //filter data from albums, artists and songs arrays
    this.musicData=this.albums


  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }

}
