import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { IProducto } from './IProducto';

@Injectable({
  providedIn: 'root'
})
export class MemoriaDatosService implements InMemoryDbService {

  createDb(){
    const productos: IProducto[] = [
      {id: 1, nombre: "Mouse", imagen: {src: "https://picsum.photos/200/300", alt: "Descripcion de la imagen"}},
      {id: 2, nombre: "Teclado", imagen: {src: "https://picsum.photos/200/300", alt: "Descripcion de la imagen"}},
      {id: 3, nombre: "Monitor", imagen: {src: "https://picsum.photos/200/300", alt: "Descripcion de la imagen"}},
      {id: 4, nombre: "Memoria", imagen: {src: "https://picsum.photos/200/300", alt: "Descripcion de la imagen"}}
    ]
    return {productos}
  }

  genId(productos: IProducto[]): number {
    //... spread operator https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) + 1 : 5
  }

}
