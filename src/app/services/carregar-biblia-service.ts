import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarregarBibliaService {
  constructor(private http: HttpClient) {}

  loadVersion(version: string): Observable<any> {
    return this.http.get(`/assets/${version}.json`);
  }
}
