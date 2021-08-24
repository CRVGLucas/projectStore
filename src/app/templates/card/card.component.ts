import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() content: any;
  
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  redirectDetail(id: any){
    this.router.navigateByUrl('/produtos/detalhe/'+id);
  }
  redirectEdit(id: any){
    this.router.navigateByUrl('/produtos/editar/'+id);
  }

}
