export interface ErrorResponse {
    estado: number;
    mensaje: string;
    detalle: { [key: string]: string };
  }