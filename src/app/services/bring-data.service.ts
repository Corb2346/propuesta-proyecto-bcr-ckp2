import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BringDataService {

  constructor( private http: HttpClient) { }

  getbooks(){
    return this.http.get<any>('https://the-one-api.dev/v2')
  }
  
}
