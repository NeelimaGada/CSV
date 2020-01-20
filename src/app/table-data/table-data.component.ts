import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  data: any;
  private sum=0; 
  private result=0; 
  private value;
 
  @Input() public tableData;
  constructor(private route: ActivatedRoute) {
   
   }
   add(e){
    this.result = 0;
    this.sum = 0;
    this.value= this.tableData;
   
    for(let j=0;j<this.tableData.length;j++){
      this.result = +this.value[j].Amount;
         this.sum += this.result;
         }
  }
   

  ngOnInit() {
  
  }
  

}
