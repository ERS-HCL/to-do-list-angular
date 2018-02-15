# To-Do-List in angular and bootstrap
To-Do-List Component This is a simple componentfor building a to-do-list using angular and bootstrap. You can add all your task in this list and check the box when You completed a specific task.

<p align="center">
    <img  alt="To-Do-List" src="img/todoimg.png" class="img-responsive">
</p>
For preview , [Click here](https://stackblitz.com/edit/angular-c3k3vm?embed=1&file=app/list/list.component.html)

## Adding a new task
Write the task you want to do and click on the plus button then it will be added to your task list. 

## Removing a task 
Click on the close button and it will be deleted. 

## Marking completed
Check the box when you completed the task and it will sort your whole list. It can also accept an array of lists from user and display. 
just copy and paste this in md 

## @Input Decorator
 
@Input has been used to receive input from user.User will passan array containing 'id','desc' and 'status' and it will be added to the list.

  <list [userList]="lists" (mylist)="getList($event)"></list>
  userList is the input.
  lists is an array of objects what user will give.
  
  
  Ex:-
  {'id':1,'desc':'angular','status':false}
  
## @Output Decorator
@Output has been used to provide user with required output.For this i have used EventEmitter, whenever some event will be called user will get result.

getList(lists){

       for(let i=0;i<lists.length;i++){
       
      console.log(lists[i].desc);
    }
   
  }
  
 
 This method will give all the lists.
  
  <list [userList]="lists" (mylist)="getList($event)"></list>
  
  
  mylist is the output event name i have used.

