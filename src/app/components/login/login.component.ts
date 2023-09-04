import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public correo:string="";
  public clave:string="";
  private router:Router;
  constructor(router:Router){
    this.router=router;
  }
  public Ingresar():void{
   if(this.correo=="jony@gmail.com" && this.clave=="admin123"){
    this.router.navigate(['/bienvenido']);
   }else{
    this.router.navigate(['/error']);
   }
  }
}
