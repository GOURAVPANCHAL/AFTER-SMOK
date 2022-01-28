import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }
  apiCall() {
    return this.http.get('https://reqres.in/api/users?page=2')
  }

  deleteUser(id) {
    return this.http.delete('https://reqres.in/api/user/' + id)
  }
}
