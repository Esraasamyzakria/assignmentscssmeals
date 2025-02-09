import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor( private httpClient:HttpClient) { }

  getcatergory():Observable<any>{
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  }
  getallcategorey(category:string):Observable<any>{
    if(category=='all'){
      return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
    }
    else{
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    }

  }
}
