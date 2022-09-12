import { Component, OnInit } from '@angular/core';
import { IProducto } from './IProducto';
import { IMAGEN_PREDETERMINADA, ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angularapi';
  productos: IProducto[] = []
  cargando: boolean = true

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos
      this.cargando = false
    })
  }

  crear(nombre: string){
    this.cargando = true
    nombre = nombre.trim()
    if (!nombre) { return }
    this.productosService.insertProducto({ nombre, imagen: IMAGEN_PREDETERMINADA } as IProducto)
      .subscribe(producto => {
        this.productos.push(producto)
        this.cargando = false
      });
  }
}
