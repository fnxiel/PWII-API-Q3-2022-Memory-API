import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IProducto } from './IProducto';
import { Observable, of } from 'rxjs';
import { IImagen } from './IImagen';
import { INasa } from './INasa';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrlBase = "api/productos"
  constructor(private http: HttpClient){}
 
  //CRUD
  private HttpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  ///https://rxjs.dev/guide/observable
  getProductos(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.apiUrlBase)
    .pipe(
      catchError(this.manejarError<IProducto[]>('getProductos', []))
    )
  }

  getProducto(id: number): Observable<IProducto>{
    return this.http.get<IProducto>(`this.apiUrlBase/${id}`)
    .pipe(
      catchError(this.manejarError<IProducto>('getProductos'))
    )
  }

  insertProducto(producto: IProducto): Observable<IProducto>{
    return this.http.post<IProducto>(this.apiUrlBase, producto, this.HttpOptions).pipe(
      catchError(this.manejarError<IProducto>('insertProducto'))
    )
  }

  manejarError<T>(operacion = 'Operación', resultado?: T){
    return (error: any) : Observable<T> => {
        console.error(`La operación ${operacion} falló con el siguiente odigo de error: ${error.message}`);
        return of(resultado as T)
    }
  }

}

export const IMAGEN_PREDETERMINADA: IImagen = {
  src: 'https://picsum.photos/200/300',
  alt: 'Imagen predeterminada'
}
