import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment5';
  public Message="";
  public data:any;
  public Name:any;
  values = '';

  onKey(event: any) { // without type info
    this.values = event.target.value.length;
  }
}
