import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/models/Inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoriesService {

  private apiUrl: string = "http://localhost:8080/api/inventory";

  constructor(private http: HttpClient) { }

  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.apiUrl + "/getall");
  }
  findInventoryById(inventoryId: number): Observable<Inventory> {
    return this.http.get<Inventory>(this.apiUrl + "/getitembyid?id=" + inventoryId);
  }

  addInventory(inventory: Inventory): Observable<Inventory> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Inventory>(this.apiUrl + "/additem", inventory, httpOptions);
  }
  updateInventory(inventory: Inventory): Observable<Inventory> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Inventory>(this.apiUrl + "/updateinventory", inventory, httpOptions);
  }


  deleteInventory(inventory: Inventory) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: inventory
    };

    return this.http.delete(this.apiUrl + "/deleteinventory", httpOptions);
  }
}
