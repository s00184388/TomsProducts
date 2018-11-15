import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
 @Input() rating:number;
  starWidth: number;
  constructor(){ }
  ngOnInit(){

  }
  public ngOnChanges(): void{
    this.starWidth= this.rating*90/5;
    console.log(this.starWidth);
  }
  }

         

