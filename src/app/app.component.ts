import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase1Ejercicios';
  public edad1?:number;
  public edad2?:number;
  public promedioEdades?:number;
  public sumaEdades?:number;
  public Calcular(event?: any):void{
    if(this.edad1!=undefined && this.edad2!=undefined){
      this.sumaEdades=parseInt(this.edad1.toString())+parseInt(this.edad2.toString());
      this.promedioEdades=this.sumaEdades/2;
    }
  }
  public Limpiar(event?: any):void{
    this.edad1=undefined;
    this.edad2=undefined;
    this.promedioEdades=undefined;
    this.sumaEdades=undefined;
  }
}
