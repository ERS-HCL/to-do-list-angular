import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public lists=[{'id':1,'desc':'angular','status':false}];

  getList(lists){
    for(let i=0;i<lists.length;i++){
          console.log(lists[i].desc);
    }
  }
}
