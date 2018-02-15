import { Component, OnInit,EventEmitter,Output,Input,ViewEncapsulation } from '@angular/core';
import { error } from 'util';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit{
   public lists= [];
  public status=false;
  public count=0;
  public name;
  public error;
  public completedItems=0;
  @Input() public userList;
 @Output() public mylist=new EventEmitter();
  constructor() {}

  ngOnInit() {
   if(this.userList!=""){
     this.lists=this.userList;
   }
    this.name=name;
    this.mylist.emit(this.lists);
  }
 
  addItem(item){
    this.error="";
        if(item!=""){
   
    let a=this.lists.length;
    item={'id':a,'desc':item,'status':false}
    this.lists.push(item);
    this.name="";
  }
  else{
    this.error="You must enter text here";
   
  }
  this.mylist.emit(this.lists);
  //sort array
  this.lists.sort(function(a,b):number{
      return a.status-b.status;
  });
  
     }
  deleteItem(item){
    for(let i=0;i<this.lists.length;i++){
      if(this.lists[i]==item){
        this.lists.splice(i,1);
       
      }
    }
    this.mylist.emit(this.lists);
  }
changed(itemStatus){
  if(itemStatus==true){
    this.count=this.count+1;
  }
  else{
    this.count=this.count-1;
  }
  this.mylist.emit(this.lists);
}

getCompletedList(){
  for(let i=0;i<this.lists.length;i++){
    if(this.lists[i].staus==true){
      this.completedItems=this.completedItems+1;
    }
  }
  this.mylist.emit(this.lists);
}


}
