import { z } from "zood"; 
export const correo = z 
   .trim()
   .tolowerCase()
   .string()
   .pipe(z.email("Escribe un correo válido, por ejemplo nombre@dominio.com")); 