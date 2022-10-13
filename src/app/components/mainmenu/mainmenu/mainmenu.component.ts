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
  public typePokemon: string[]= ['normal','fire','water','grass','electric','ice','fighting','poison','dragon'];
  types:any[] = [];
  sprites:any[] = [];

  selectedType :string  = "";

  constructor( public BringDataService:BringDataService) {
    
   }

  ngOnInit() {

  }

  pokemonsearch(pokemonName:string){
    this.pokemon$ = this.BringDataService.getPokemon(pokemonName).pipe(
      tap(resp => {
        console.log(resp);
      })
    )
  }

  typePkm(event:any){
    this.selectedType = event.target.value;
    this.BringDataService.getType(this.selectedType).subscribe({
      next: resp => {
        this.types = resp.pokemon;
        console.log(this.types);
      }
     })

 
  }

  
}
