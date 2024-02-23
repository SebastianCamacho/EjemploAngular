import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Producto } from "./../../models/product.model";
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ProductoComponent {

  
  @Input() producto!: Producto;
  

}
