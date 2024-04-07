import { Component, OnInit } from '@angular/core';
import { Iproducts } from './shared/models/productInterface';
import { ProductsService } from './shared/services/products.service';
import { productStatus } from './shared/consts/productEnum';
import { UtilityService } from './shared/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  productsArray! : Array<Iproducts>
getAllProductStatus = productStatus

  constructor(private _productService : ProductsService,
    private _UtilityService:UtilityService){

  }
  ngOnInit(): void {
     this.productsArray = this._productService.getAllProduct()
  }
   
  onProductAdd(pname : HTMLInputElement , pdetails : HTMLInputElement){

    let productObj : Iproducts = {
      pName : pname.value,
      pStatus :  pdetails.value,
      pDetails : productStatus.Inprogress,
      id : this._UtilityService.generateUuid()
    }

    this._productService.AddNewProduct(productObj);
    pname.value = "",
    pdetails.value = ""
  }

  onChangeProductStatus(pId : string , newstatus : productStatus){
    this._productService.changeProductStatus(pId,newstatus)
  }
}
