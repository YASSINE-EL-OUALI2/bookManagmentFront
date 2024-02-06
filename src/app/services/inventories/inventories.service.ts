import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoriesService {

  private apiUrl: string = "http://localhost:8080/inventory";

  constructor(private http: HttpClient) { }

  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.apiUrl + "/getall");
  }
  findInventoryById(inventoryId: number): Observable<Inventory> {
    return this.http.get<Inventory>(this.apiUrl + "/getbyid?id=" + inventoryId);
  }
}
