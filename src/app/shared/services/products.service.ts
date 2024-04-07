import { Injectable } from '@angular/core';
import { productStatus } from '../consts/productEnum';
import { Iproducts } from '../models/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productArray =[
    {
      pName :"Samsung 13",
      pDetails : "Mobile 128 6",
      pStatus : productStatus.Inprogress,
      id :"hjtgffsdhyjuhgb"
    },

    {
      pName :" Oppo Reno 8",
      pDetails : "Mobile 122",
      pStatus : productStatus.Dispatched,
      id :"mfgjyilggcgn"
    },

    {
      pName :"Iphone +14",
      pDetails : "Mobile 141",
      pStatus : productStatus.Delivered,
      id :"hsdhyjuhgfdc"
    }
  ]
  constructor() { }

  getAllProduct(){
    return this.productArray
  }

  AddNewProduct(proObj :Iproducts){
    this.productArray.unshift(proObj)
  }

  changeProductStatus(prodId:string , prodStatus : productStatus){
    this.productArray.forEach(ele=>{
      if(ele.id===prodId){
         ele.pStatus=prodStatus
        return
      }

    })
  }
}
