import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  thing = Date.now();
  STbool = 0;
  PST(){
    this.thing = Date.now();
    this.thing -= 7*3600000
    this.a = new Date(this.thing);
    this.time = this.a.toUTCString();
    this.STbool = 1;  
  }
  MST(){
    this.thing = Date.now();
    this.thing -= 6*3600000
    this.a = new Date(this.thing);
    this.time = this.a.toUTCString();  
    this.STbool = 2;  
  }
  CST(){
    this.thing = Date.now();
    this.thing -= 5*3600000
    this.a = new Date(this.thing);
    this.time = this.a.toUTCString();  
    this.STbool = 3;  
  }
  EST(){
    this.thing = Date.now();
    this.thing -= 4*3600000
    this.a = new Date(this.thing);
    this.time = this.a.toUTCString();  
    this.STbool = 4;  
  }
  clear(){
    this.thing = Date.now();
    this.a = new Date(this.thing);
    this.time = this.a.toUTCString();  
    this.STbool = 0;  
  }
  a = new Date(this.thing);
  time = this.a.toUTCString();  
  
}
