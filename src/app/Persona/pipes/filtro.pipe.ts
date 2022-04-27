import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Persona[], page: number = 0, search:string=''): Persona[] {

    if(search.length === 0)
     return value.slice(page,page+10);

    
    const filterempleados = value.filter( person => person.usuApellidopaterno.includes(search) || person.usuApellidomaterno.includes(search) || person.usuPrimernombre.includes(search) || person.usuSegundonombre.includes(search) || person.usuCorreo.includes(search) || person.usuIdTipo.tipoidentificacionDescripcion.includes(search) || person.usuNumeroidentificacion.includes(search) || person.usuIdPais.paisDescripcion.includes(search) || person.usuIdArea.areaDescripcion.includes(search));

    return filterempleados.slice(page,page+10);
  }

}
