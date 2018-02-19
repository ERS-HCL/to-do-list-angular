import { Component, OnInit,EventEmitter,Output,Input,ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ListComponent implements OnInit{
   private lists= [];
  private status=false;
  private count=0;
  private name;
  private error;
  private completedItems=0;
  @Input() private userList:List[];
 @Output('mylist') private mylist:EventEmitter<List[]>=new EventEmitter<List[]>();

  constructor() {}

  ngOnInit() {
   if (this.userList == undefined || this.userList == null) {
      this.userList = [];
    }
   else{
      this.lists=this.userList;
   }
    this.name=name;
    this.mylist.emit(this.lists);
  }
 
  private addItem(item){
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
  private deleteItem(item){
    for(let i=0;i<this.lists.length;i++){
      if(this.lists[i]==item){
        this.lists.splice(i,1);
       
      }
    }
    this.mylist.emit(this.lists);
  }
private changed(itemStatus){
  if(itemStatus==true){
    this.count=this.count+1;
  }
  else{
    this.count=this.count-1;
  }
  this.mylist.emit(this.lists);
}

 public getCompletedList(){
  for(let i=0;i<this.lists.length;i++){
    if(this.lists[i].staus==true){
      this.completedItems=this.completedItems+1;
    }
  }
  this.mylist.emit(this.lists);
}


}

export interface List {
  id: number;
  desc: string;
  status: boolean;
}
