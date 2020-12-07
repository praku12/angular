import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import{MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {

 mediaSub:Subscription;
 deviceXs:boolean;


  constructor(private router: Router,public mediaObserver:MediaObserver) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.mediaSub=this.mediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.deviceXs=result.mqAlias === 'XS'? true :false;
      }

    )


  }
  ngOnDestroy(){


    this.mediaSub.unsubscribe();



  }
}
