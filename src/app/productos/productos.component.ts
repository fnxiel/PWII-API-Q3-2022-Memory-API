import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../IProducto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {
  @Input() productos: IProducto[] = []

  @Input() cargando: boolean = true
  
  constructor() { }

  ngOnInit(): void {
    
  }

  
}
