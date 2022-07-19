import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }
  async getHeroes(offset: number) {
    let params = new HttpParams()
    params = params.append("ts", 1)
    params = params.append("apikey", environment.apiKey)
    params = params.append("hash", environment.hashKey)

    params = params.append("offset", offset)

    return new Promise((resolve) => {
      this.http
        .get(`${environment.apiUrl}/characters`, { params }).subscribe((response: any) => {
          resolve(response)
        })

    });
  }
  async getHeroesStartsBy(name: string) {
    let params = new HttpParams()
    params = params.append("nameStartsWith", name)
    return new Promise((resolve) => {
      this.http
        .get(`${environment.apiUrl}/characters`, { params }).subscribe((response: any) => {
          resolve(response)
        })

    });
  }
  async getHeroesByName(name: string) {
    let params = new HttpParams()
    params = params.append("name", name)
    return new Promise((resolve) => {
      this.http
        .get(`${environment.apiUrl}/characters`, { params }).subscribe((response: any) => {
          resolve(response)
        })

    });
  }
}
