import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/service/cart.service';
import data from 'src/app/filles/data.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  
  
  public productList : any ;
  public datalist :{id:number,title:string,price:number,description:string,category:'string',image:'string'}[]=data ;
  public filterCategory : any
  searchKey:string ="";
  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    
      this.productList = data;
      this.filterCategory = data;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
      console.log(data)
    

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
