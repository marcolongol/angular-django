import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' 


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 9aaf09ace3fb45d09545e152a8c58774f95a7387'
  });

  private movies = ['terminator', 'predator'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(){
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
