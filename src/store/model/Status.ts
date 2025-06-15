export enum Status{
    IN_PROGRESS ="EN PROGRESO",
    PENDING ="PENDIENTE",
    COMPLETED ="FINALIZADO"
}

export const statusArray = Object.entries(Status).map(([key, value]) => ({
    key,    // Enviar esta clave al backend
    value   // Mostrar este valor en la UI
}));
