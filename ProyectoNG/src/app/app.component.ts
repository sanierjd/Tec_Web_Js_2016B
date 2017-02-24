import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {MasterUrlService} from "./services/master-url.service";

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
  colorH4 = "red";
  tamanoH4 = "52px";
  classes = "btn btn-block btn-success";

  constructor(private _http: Http, private _masterUrl:MasterUrlService){


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

  crearTienda(formulario){
    console.log(formulario);
    this._http.post(this._masterUrl.url+"Tienda",{
      nombre:formulario.valueOf.nombre
    }).subscribe(
      (res)=>{
        console.log("No hubo errores")
        console.log(res)
        this.nuevaTienda = {};
      },
      (res)=>{
        console.log("Ocurrio un error", err);
      },
      ()=>{
        console.log("Termino la funcion vamos a las casas")
      }
    );
    /*
      .post("http://localhost:1337/Tienda", formulario.valores)
      .subscribe(
        res=>console.log('Respuesta: ',res),
        err=>console.log('Error: ',err),
        ()=>{
          console.log("Se completo la accion")
        }
      );
      */
  }

}
