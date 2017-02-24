import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Identar: Ctrl + alt + L
export class AppComponent implements OnInit{
  title:string = "Hola amigos";
  nombre:string = "";
  apellido:string = "";
  constructor(){
    this.apellido = "Loya";
    this.nombre = "Santiago";
    console.log("Inició el constructor")
  }
  ngOnInit(){
    this.apellido = "Nasimba";
    this.nombre = "Xavier";
    console.log("On Init")
  }
  nombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }
  hizoClick(){
    console.log("Hizo Click")
  }
  hizoFocus(){
    console.log("Hizo Focus")
  }
}
