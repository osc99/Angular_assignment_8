import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Output() public myevent = new EventEmitter();
  public data="";
  public value:any;
  public msg="";
  public send(data:any)
  {
    this.value = data;
    this.msg = data;
    this.myevent.emit(this.msg);
  }
  public Name:any
 
  constructor() { }

  ngOnInit(): void {
  }

}
