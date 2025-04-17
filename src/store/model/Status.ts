export enum Status{
    IN_PROGRESS ="IN PROGRESS",
    PENDING ="PENDING",
    COMPLETED ="COMPLETED"
}

export const statusArray = Object.entries(Status).map(([key, value]) => ({
    key,    // Enviar esta clave al backend
    value   // Mostrar este valor en la UI
}));
