import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/jajasuperholyshit/api/auth.php'; // 🔥 ใช้ API ของคุณ

  constructor(private http: HttpClient) {}

  // ✅ สมัครสมาชิก
  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { action: 'register', username, password });
  }

  // ✅ เข้าสู่ระบบ
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { action: 'login', username, password });
  }
}
