// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CurrencyService {
//   // private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR'; // Remplacez par l'URL réelle de l'API
//   // private apiKey = 'c19d56546bmsh601445ee1cca141p196e2bjsn256a184d409b';
//   private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR/gram'
//   private apiKey = 'c19d56546bmsh601445ee1cca141p196e2bjsn256a184d409b'
//   constructor(private http: HttpClient) { }


//   getCurrentMetalPrices(): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'apikey': this.apiKey
//     });

//   return this.http.get<any>(`${this.apiUrl}/current-prices`, { headers });
// }
// }
// metal-price.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetalPriceService {
  private apiUrl = 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/EUR/gram';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '0a66c387f4msh6b3782aa41656d1p1dc2d8jsn7e9b48334cf9',
    'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getCurrentMetalPrice(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }
}
