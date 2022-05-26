import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'custompipes';
  day = new Date();
  num=123678.56;
  name ="kokila";
  num1=0.56;
}

