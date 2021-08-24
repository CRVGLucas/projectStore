import { Component, OnInit } from '@angular/core';
//const produtos = require('../../backend/productsStore');
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  arrayProducts = [
    {id: 0, name: 'Monitor', price: 800, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 1, name: 'Mouse', price: 100, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 2, name: 'Teclado', price: 130, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 3, name: 'Fone', price: 200, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 4, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 5, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 6, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 7, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 8, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 9, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 10, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 11, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 12, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 13, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 14, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 15, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 16, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 17, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 18, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 19, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
    {id: 20, name: 'Pen drive', price: 60, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqwnvn7g6HBwYOXjGab5_NbJk91GD9uT2uyGaW-JN9ww-O3RCx-0-odDDiHEUyD9TUWWQCeR05iA&usqp=CAc'},
];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
