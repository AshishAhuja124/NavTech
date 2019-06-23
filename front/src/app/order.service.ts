import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }
    getOrders() {
        return this.http.get("http://localhost:3000/api/order")

    }
    addOrder(info) {
        return this.http.post("http://localhost:3000/api/order", info)
    }
    getOrder(id) {
        return this.http.get("http://localhost:3000/api/order/" + id)
    }
    deleteOrder(id) {
        return this.http.delete("http://localhost:3000/api/order/" + id)
    }
    updateOrder(id, info) {
        return this.http.put("http://localhost:3000/api/order/" + id, info)
    }
}