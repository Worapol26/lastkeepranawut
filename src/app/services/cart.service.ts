import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost/jajasuperholyshit/api/cart.php'; // URL ของ API

  constructor(private http: HttpClient) {}

  // ✅ (ข้อ 5) GET: ดึงสินค้าทั้งหมดในตะกร้า
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ POST: เพิ่มสินค้าไปยังตะกร้า
  addToCart(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // ✅ (ข้อ 4) DELETE: ลบสินค้าออกจากตะกร้า
  removeFromCart(productId: number): Observable<any> {
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id: productId } });
  }

  // ✅ (ข้อ 5) PUT: อัปเดตจำนวนสินค้าในตะกร้า
  updateCartQuantity(productId: number, quantity: number): Observable<any> {
    return this.http.put<any>(this.apiUrl, { id: productId, quantity });
  }

  
}
