import { Component, OnInit } from '@angular/core';
// import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { ViewChild , ChangeDetectorRef } from '@angular/core';




@Component({
  selector: 'app-interview-candidates-room',
  templateUrl: './interview-candidates-room.component.html',
  styleUrls: ['./interview-candidates-room.component.css']
})
export class InterviewCandidatesRoomComponent implements OnInit {

  // name = 'Angular';
  // slideNo = 0;
  // withAnim = true;
  // resetAnim = true;
  
  
  ngOnInit(): void {
    
  }
 

  // @ViewChild('myCarousel') myCarousel: NguCarousel;
  // carouselConfig: NguCarouselConfig = {
  //   grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
  //   load: 3,
  //   slide : 1,
  //   interval: {timing: 1000, initialDelay: 1000},
  //   loop: true,
  //   touch: true,
  //   velocity: 0.2,
  //   vertical : {
  //     enabled : true,
  //     height : 600
  //   }
 
  // }
  // carouselItems:any[any] = [1, 2, 3 , 4 ];
  // mainItems:any[] = [...this.carouselItems]

  // constructor(private _cdr: ChangeDetectorRef) { }

  // ngAfterViewInit() {
  //   this._cdr.detectChanges();
  // }

  // carouselTileLoad(data) {
  //   let arr = this.carouselItems;
  //   this.carouselItems = [ ...this.carouselItems , ...this.mainItems ];
  // }

}
