import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ARA from "../../assets/ARA.json";
import NVI from "../../assets/NVI.json";
import NVT from "../../assets/NVT.json";

@Injectable({
  providedIn: 'root',
})
export class CarregarBibliaService {
  constructor(private http: HttpClient) {}

  loadVersion(version: string): Observable<any> {
    if (version === 'ARA') return of(ARA);
    if (version === 'NVI') return of(NVI);
    if (version === 'NVT') return of(NVT);
    return this.http.get(`/assets/${version}.json`);
  }
}
