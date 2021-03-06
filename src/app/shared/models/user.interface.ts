
export interface User{
    usuario: string;
    contrasena: string;
}

export interface Resultado {
    resultado: ResultadoDetalle;
}

export interface ResultadoDetalle {
    exito: boolean;
    id_rol: number;
    desc_rol: string;
}