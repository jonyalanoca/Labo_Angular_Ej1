import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  private router:Router;
  public constructor(ruoter:Router){
    this.router=ruoter;
  }
  public Volver(event?:any):void{
    this.router.navigate(['/login']);
  }
}
