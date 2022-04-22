import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { Area } from 'src/app/Modelo/Area';
import { TipoIdentificacion } from 'src/app/Modelo/TipoIdentificacion';
import { Pais } from 'src/app/Modelo/Pais';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  paises:Pais[] | undefined;
  area:Area[] | undefined;
  tipos:TipoIdentificacion[] | undefined;
  persona:Persona = new Persona();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
    this.service.getPaises()
    .subscribe(data=>{this.paises=data});

    this.service.getAreas()
    .subscribe(data=>{this.area=data});

    this.service.getTipos()
    .subscribe(data=>{this.tipos=data});
  }

  Editar(){
    
    let id: any | null
     
    = localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(persona:Persona){
  this.service.updatePersona(persona)
  .subscribe(data=>{
    this.persona=data;
    alert("se actualizo con exito");
    this.router.navigate(["Listar"]);
  })
  }

}
