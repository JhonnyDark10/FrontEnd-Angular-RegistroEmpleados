import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ListarComponent } from './Persona/listar/listar.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistroEmpleados';

  constructor(private router:Router){}
    
  Listar(){
      this.router.navigate(["Listar"])
    }
    
  Nuevo(){
      this.router.navigate(["add"])
    }
  

}
