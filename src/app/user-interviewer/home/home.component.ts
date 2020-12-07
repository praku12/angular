import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  name="Prakash Nandhan";


  constructor() { }

  ngOnInit(): void {
  }

  view(){
    // alert("ongoing");
   
      (document.querySelector('.div_extra') as HTMLElement).style.height = 'auto';
      (document.querySelector('.ongoing_content') as HTMLElement).style.display = 'block';
      (document.querySelector('.ongoing_content1') as HTMLElement).style.display = 'block';
      (document.querySelector('.ongoing_content2') as HTMLElement).style.display = 'block';
      (document.querySelector('.ongoing_content3') as HTMLElement).style.display = 'block';
      (document.querySelector('.hide') as HTMLElement).style.display = 'none';
      (document.querySelector('.show') as HTMLElement).style.display = 'block';

      (document.querySelector('.live') as HTMLElement).style.display = 'none';

      

      

      
  }

  view1(i){
    //  alert("upcoming");
    //  alert(i);
     
     (document.querySelector('#div_'+i) as HTMLElement).style.height = '200px';
     (document.querySelector('#upgoing_content_'+i) as HTMLElement).style.display = 'block';
     (document.querySelector('#upgoing_content1_'+i) as HTMLElement).style.display = 'block';
     (document.querySelector('#upgoing_content2_'+i) as HTMLElement).style.display = 'block';
     (document.querySelector('#upgoing_content3_'+i) as HTMLElement).style.display = 'block';
     (document.querySelector('#hide1_'+i) as HTMLElement).style.display = 'none';
      (document.querySelector('#show1_'+i) as HTMLElement).style.display = 'block';

   

      
  }

  counter(i: 2) {
    return new Array(i);
}

hide()
{
  (document.querySelector('.div_extra') as HTMLElement).style.height = '58px';
  (document.querySelector('.ongoing_content') as HTMLElement).style.display = 'none';
  (document.querySelector('.ongoing_content1') as HTMLElement).style.display = 'none';
  (document.querySelector('.ongoing_content2') as HTMLElement).style.display = 'none';
  (document.querySelector('.ongoing_content3') as HTMLElement).style.display = 'none';
  (document.querySelector('.hide') as HTMLElement).style.display = 'block';
  (document.querySelector('.show') as HTMLElement).style.display = 'none';
  
}

// searchCities(ev: any) {
//   this.searchKey = ev.target.value;
// }

hide1(i)
{

    (document.querySelector('#div_'+i) as HTMLElement).style.height = '58px';
     (document.querySelector('#upgoing_content_'+i) as HTMLElement).style.display = 'none';
     (document.querySelector('#upgoing_content1_'+i) as HTMLElement).style.display = 'none';
     (document.querySelector('#upgoing_content2_'+i) as HTMLElement).style.display = 'none';
     (document.querySelector('#upgoing_content3_'+i) as HTMLElement).style.display = 'none';
     (document.querySelector('#hide1_'+i) as HTMLElement).style.display = 'block';
      (document.querySelector('#show1_'+i) as HTMLElement).style.display = 'none';


}

// let rtItems:any = items;
//         try{
//             rtItems = items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1 );
//         }finally{
//             return rtItems;
//         }

// (keyup)=searchCities($event)
}
