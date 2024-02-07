import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  userClick: boolean = true;
  userImg : string = ' ' ;
  getSrc(image:string):void{
    console.log(image);
    this.userClick = true;
    this.userImg = image;
  }

  // Array of object to show row system images 
  items: any[] = [
    { imgUrl: './assets/part1.png' },
    { imgUrl: './assets/part2.png' },
    { imgUrl: './assets/part3.png' },
    { imgUrl: './assets/part2.png' },
    { imgUrl: './assets/part3.png' },
    { imgUrl: './assets/part1.png' }
  ];
}
