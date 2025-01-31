import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {
  queueId: string = '';
  orderItems: any[] = []; // เก็บข้อมูลอาหาร
  totalPrice: number = 0; // เก็บราคาสุทธิ

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.queueId = this.route.snapshot.paramMap.get('queue_id') || '';
    this.loadOrderItems();
  }

  // ✅ โหลดรายการอาหารของคิวนั้นจาก API
  loadOrderItems() {
    this.http
      .get(`http://localhost/jajasuperholyshit/api/get_order_items.php?queue_id=${this.queueId}`)
      .subscribe(
        (res: any) => {
          this.orderItems = res;

          // ✅ แก้ไขการคำนวณราคารวมให้ถูกต้อง
          this.totalPrice = this.orderItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
          this.totalPrice = Number(this.totalPrice.toFixed(2)); // ปรับให้มีทศนิยม 2 ตำแหน่ง
        },
        (error) => {
          console.error('❌ โหลดรายการอาหารล้มเหลว', error);
        }
      );
  }

  // ✅ ย้อนกลับไปหน้า `jaokongran`
  goBackToJaokongran() {
    this.navCtrl.navigateBack('/jaokongran');
  }
}
