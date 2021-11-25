import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  isPosts:boolean = false;
  isAdd:boolean = false;
  isDel:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrar():void{

  }

  ocultarPosts():void{
    if(this.isPosts){
      this.isPosts=false;
    }else{
      this.isPosts=true;
    }
  }

  ocultarAgregar():void{
    if(this.isAdd){
      this.isAdd=false;
    }else{
      this.isAdd=true;
    }
  }

  ocultarBorrar():void{
    if(this.isDel){
      this.isDel=false;
    }else{
      this.isDel=true;
    }
  }

  }
