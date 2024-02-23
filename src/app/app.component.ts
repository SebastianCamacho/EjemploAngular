
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './models/product.model';
import { ProductoComponent } from "./components/producto/producto.component";
import { CommonModule } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductoComponent, HttpClientModule, CommonModule]
})


export class AppComponent {
  title = 'My_app';
  productos: Producto[]=[];
  constructor(private http: HttpClient) {}
  
  changeTitle(){
    
    if (this.title=="My_app") {
      this.title="Sebastian";
    }else{
      this.title='My_app';
    }
  }

  ngOnInit(): void {
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data)=>{
      this.productos=data;
    
    });
    
  }
}
