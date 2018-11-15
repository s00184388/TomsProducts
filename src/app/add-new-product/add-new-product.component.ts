import { Component, OnInit } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
import { ProductService } from '../shared/product.service';
import { IProducts } from '../product-list/products';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})



export class AddNewProductComponent {

  pageTitle: string = "Add new Product";
  model: any = {};
  showDisplayClipartComponent: boolean;
  
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  constructor(private _productService:ProductService, private router: Router){

  } 

  //controls hiding the component until the button is pressed
  showHideDisplayClipartComponent():boolean{
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
    return false;
  }

  //receives the URL string from the display-cipart component
  //displays in the text box
  addImageStringToFormTextBox(evt):boolean{
    console.log("using this url:" + evt);
    this.imageUrl = evt;
    return false;
  }

  submitProduct(form){
   
    console.log(form.value);

    let products: IProducts =
      {
        productName: this.productName,
        productCode: this.productCode,
        releaseDate: this.releaseDate,
        description: this.description,
        price: this.price,
        starRating: this.starRating,
        imageUrl: this.imageUrl,

      };
    this._productService.addProduct(products);
    //redirect to the product-list component
    this.router.navigate(['/product-list']);
    }   
  }
