import { Injectable } from '@angular/core';
import { IProducts } from '../product-list/products';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';

import { map } from 'rxjs/operators'
import { pureFunction7 } from '@angular/core/src/render3/pure_function';



@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private _producturl:'http://localhost:3000/products';
  productsCollection:AngularFirestoreCollection<IProducts>;
  
  products:Observable<IProducts[]>;
  allProducts:IProducts[];
  errorMessage:string;

  constructor(private _http:HttpClient,private _afs:AngularFirestore){
    this.productsCollection=_afs.collection<IProducts>("products");
  }

  deleteProduct(id:string):void{
    this.productsCollection.doc(id).delete()
    .catch(error=>
      {console.log("DeleteProduct error: "+error);
      }).then(()=>console.log('deleteProduct:id ='+id));
  }
  
  getProducts(): Observable<IProducts[]>
  {
    this.products=this.productsCollection.snapshotChanges().pipe(
    map(actions=>actions.map(a=>{
      const data=a.payload.doc.data() as IProducts;
      console.log("getProducts:data"+JSON.stringify(data));
      const id=a.payload.doc.id;
      console.log("getProducts:id = "+id);
      return {id,...data};
    })));
    return this.products;
  }

  onAddSubmit(string)
  {
  }

 
}
