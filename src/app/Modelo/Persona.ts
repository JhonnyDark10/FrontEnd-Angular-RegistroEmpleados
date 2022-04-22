import { Area } from "./Area";
import { Pais } from "./Pais";
import { TipoIdentificacion } from "./TipoIdentificacion";

export class Persona{

    id : number = 0;
	usuApellidopaterno: String = "";   
    usuApellidomaterno: String = "";
    usuPrimernombre: String = "";
    usuSegundonombre: String = "";
    usuEstado: String = "";
    usuNumeroidentificacion: String = "";
    
    usuFechaedicion: Date | undefined;
    usuFechahoraregistro: Date | undefined;
    usuFechaingreso: Date | undefined;

    usuIdArea!: Area;
    usuIdPais!: Pais;
    usuIdTipo!: TipoIdentificacion;
    usuCorreo: String ="";
    constructor(){}


}