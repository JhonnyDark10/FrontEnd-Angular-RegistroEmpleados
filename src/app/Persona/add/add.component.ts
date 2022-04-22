import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Modelo/Pais';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Area } from 'src/app/Modelo/Area';
import { TipoIdentificacion } from 'src/app/Modelo/TipoIdentificacion';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  paises:Pais[] | undefined;
  area:Area[] | undefined;
  tipos:TipoIdentificacion[] | undefined;
  ngOnInit(){

    this.service.getPaises()
    .subscribe(data=>{this.paises=data});

    this.service.getAreas()
    .subscribe(data=>{this.area=data});

    this.service.getTipos()
    .subscribe(data=>{this.tipos=data});
  }
  



  modelPersona = new Persona();

  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("se agrego con exito...!");
      this.router.navigate(["Listar"]);
    })
  }
}
