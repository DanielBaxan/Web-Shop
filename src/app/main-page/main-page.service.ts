import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private baseUrl = 'http://localhost:5000/api/v1/'
  constructor(private http: HttpClient) {}

  getApi(addToUrl: string): Observable<any> {
    let params = new HttpParams()
    return this.http.get<any>(`${this.baseUrl}${addToUrl}`, { params })
  }
}
