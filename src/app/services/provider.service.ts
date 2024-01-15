import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  //Atributo URL
  private URL: string = 'https://taskslistv0-default-rtdb.firebaseio.com/collection.json';

  constructor(private http:HttpClient) { }

   //Método con la petición HTTP
    getResponse() {
      return this.http.get(this.URL);
    }

    //Método con la petición HTTP
    postResponse(data: any) {
      return this.http.post(this.URL, data);
    }

}
