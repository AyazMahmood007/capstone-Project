import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  categoriesList: any = [];


  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllProductCategories().subscribe((response)=>{
       this.categoriesList = response;
    })
    
  }



  getCurrentTime(){
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date();
var day = days[d.getDay()];
var hr = d.getHours();
var min: any = d.getMinutes();
if (min < 10) {
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) {
    hr -= 12;
    ampm = "pm";
}
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

return day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
  }





  productList = [
    {productName: "Cricket Bat",
  productprice: "5",
productQuantity: 2}
,
{productName: "Wickets & Bails",
productprice: "20",
productQuantity: 1},
{productName: "Keeper Gloves",
productprice: "5",
productQuantity: 1},
{productName: "Batsman kit",
productprice: "5",
productQuantity: 1},
{productName: "Cricket Bat",
productprice: "5",
productQuantity: 2}
,
{productName: "Wickets & Bails",
productprice: "20",
productQuantity: 1},
{productName: "Keeper Gloves",
productprice: "5",
productQuantity: 1},
{productName: "Batsman kit",
productprice: "5",
productQuantity: 1}
  ]

}
