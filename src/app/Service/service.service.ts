import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
import { Pais } from '../Modelo/Pais';
import { Area } from '../Modelo/Area';
import { TipoIdentificacion } from '../Modelo/TipoIdentificacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient ) { }

  Url='http://localhost:8080/usuario';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }


  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  UrlP='http://localhost:8080/paises';
  getPaises(){
    return this.http.get<Pais[]>(this.UrlP);
  }

  UrlA='http://localhost:8080/areas';
  getAreas(){
    return this.http.get<Area[]>(this.UrlA);
  }

  UrlT='http://localhost:8080/tipos';
  getTipos(){
    return this.http.get<TipoIdentificacion[]>(this.UrlT);
  }
 
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }
}
