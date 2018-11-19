import { Component,OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit{
    
   
  pageTitle: string="Joe's Products";
  imageWidth: number=30;
  imageMargin:number=5;
  showImage: boolean=false;
  
  _listFilter:string;
  get listFilter():string{
    return this._listFilter;


}
performFilter(filterBy:string ):IProducts[]{
    filterBy:filterBy.toLocaleLowerCase();
    return this.products.filter((products:  IProducts)=>
    products.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
}

constructor(private _productService:ProductService){
    
}
    set listFilter(value:string)
    {
        this._listFilter=value;
        this.filteredProducts=this.listFilter? this.performFilter(this.listFilter):this.products;
    }

  filteredProducts: IProducts[];
  products: IProducts[]=[];
  
  togleImage():void
  {
    this.showImage=!this.showImage;
  }

  deleteProduct(id:string):void{
    this._productService.deleteProduct(id);
  }
   

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products=>
      {
        this.products=products,
        this.filteredProducts=this.products;
      }, error=><any>error);
}
}
