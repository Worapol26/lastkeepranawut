import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {
  queueNumber: string = ''; // หมายเลขคิวของลูกค้า

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.queueNumber = this.route.snapshot.paramMap.get('queue_id') || '';
    console.log('📌 queueNumber:', this.queueNumber); // ✅ Debug ดูค่า queue_id
  }

  completeBooking() {
    if (!this.queueNumber) {
      alert('❌ ไม่พบหมายเลขคิว');
      return;
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { queue_id: this.queueNumber };

    console.log('📤 ส่งค่าไป API:', body); // ✅ Debug ดูค่าที่ส่งไป API

    // ✅ ลบสินค้าของลูกค้าคนนี้ออกจากตะกร้า
    this.http.post('http://localhost/jajasuperholyshit/api/clear_cart.php', body, { headers })
      .subscribe(
        (res: any) => {
          console.log('✅ API Response:', res);
          
          if (res.message) {
            alert(res.message);
          } else {
            alert('❌ เกิดข้อผิดพลาดในการลบตะกร้า');
          }

          this.router.navigate(['/home']); // ✅ กลับไปหน้า Home หลังจากลบเสร็จ
        },
        (error) => {
          console.error('❌ ไม่สามารถลบตะกร้าได้', error);
          alert('❌ ไม่สามารถลบตะกร้าได้');
        }
      );
  }
}
