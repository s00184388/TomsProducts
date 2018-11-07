import { Component, OnInit } from '@angular/core';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import { RouterModule,Router} from '@angular/router';
import { ProductService } from '../shared/product.service';
import { IProducts } from '../product-list/products';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class AddNewProductComponent implements OnInit {

  

  constructor() { }
  
  onAddSubmit():void{

      
  }


  ngOnInit() {
    
  }
}
