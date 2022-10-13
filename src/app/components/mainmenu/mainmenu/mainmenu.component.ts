import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BringDataService } from '../../../services/bring-data.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  public pokemon$: Observable<any>;

  inputEmpty:boolean = true;

  types:any[] = [];

  constructor( public BringDataService:BringDataService) {
    
   }

  ngOnInit() {
    this.BringDataService.getType().subscribe({
      next: resp => {
        this.types = resp.results;
        console.log(this.types);

      }
    })
  }

  pokemonsearch(pokemonName:string){
    this.pokemon$ = this.BringDataService.getPokemon(pokemonName).pipe(
      tap(resp => {
        console.log(resp);
      })
    )
  }
  
}
