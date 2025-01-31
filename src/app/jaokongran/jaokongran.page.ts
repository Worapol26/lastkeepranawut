import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-jaokongran',
  templateUrl: './jaokongran.page.html',
  styleUrls: ['./jaokongran.page.scss'],
})
export class JaokongranPage implements OnInit {
  orders: any[] = []; // เก็บข้อมูลคิวทั้งหมด

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  ngOnInit() {
    this.loadOrders();
  }

  // ✅ โหลดข้อมูลคิวทั้งหมดจาก API
  loadOrders() {
    this.http.get('http://localhost/jajasuperholyshit/api/get_orders.php')
      .subscribe((res: any) => {
        this.orders = res;
      }, error => {
        console.error('❌ โหลดข้อมูลคิวล้มเหลว', error);
      });
  }

  // ✅ กดปุ่ม "ดูรายการอาหาร" → ไปหน้า orderlist
  goToOrderList(queueId: number) {
    this.navCtrl.navigateForward(['/orderlist', { queue_id: queueId }]);
  }

  // ✅ กดปุ่ม "เสร็จสิ้น" → ลบคิวออกจากระบบ
  completeOrder(queueId: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // ✅ กำหนด Header

    this.http.post('http://localhost/jajasuperholyshit/api/delete_queue.php', 
      JSON.stringify({ queue_id: queueId }), { headers }) // ✅ ส่ง JSON Format ที่ถูกต้อง
      .subscribe(() => {
        alert('คิวที่ ' + queueId + ' เสร็จสิ้นแล้ว');
        this.loadOrders(); // โหลดข้อมูลคิวใหม่
      }, error => {
        console.error('❌ ไม่สามารถลบคิวได้', error);
      });
  }

  // ✅ กลับไปหน้า home
  logout() {
    this.navCtrl.navigateRoot('/home');
  }
}
