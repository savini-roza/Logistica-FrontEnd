import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
  }
}
