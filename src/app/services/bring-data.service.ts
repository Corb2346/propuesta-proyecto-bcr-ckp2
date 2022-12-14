import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { combineLatestAll, concatMap, map, merge, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BringDataService {

  private toSearch: Observable<any>[] = [];

  constructor( private http: HttpClient) { }

  
  getPokemon(pokemonName:string){
    return  this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).pipe(
    tap ( res => {
      console.log('tap1' , res);
    }),  
    concatMap((resPokemon:any) => {
        return  this.getSpecies(resPokemon.species.url,resPokemon)
      }),

    concatMap((resSpecies: any) => {
      return this.getVarieties(resSpecies);
    }),
      tap ( res => {
        console.log('Tap2: ', res);
      })
      
    );
    
  }

  getSpecies(url:string, original: any) : Observable<any>{
    return  this.http.get(url).pipe(
      map((resSpecies:any) => {

        (resSpecies.varieties as any[]).forEach( element => {
          this.toSearch.push(this.http.get(element.pokemon.url))
        })
        return {
          ...resSpecies, ...original
        }
      })
    );
  }

  getVarieties(original: any): Observable<any>{
    return merge(this.toSearch).pipe(
      tap( res => {
        console.log('before response combine',res);
        
      }),
      combineLatestAll(),
      map(res => {

        console.log('responses merge',res);

        let sprites = res.map(item => {
          return {
            name: item.name,
            img: item.sprites.front_default
          }
        })

        return{
          ...original,
          sprites: sprites
        }
      }),

      map( resp => {
        console.log(resp);
        return {
          name:resp.name,
          stats: resp.stats,
          sprites: resp.sprites
        }
      })
    )
  }

  getType(type:string){
    return this.http.get(`https://pokeapi.co/api/v2/type/${type}`).pipe(
      map((resp:any) => {
        console.log(resp);
        return resp;
      })
      
    )
  }



}
