import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

// สร้าง interface สำหรับสินค้าในตะกร้า
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageURL: string;
}

@Component({
  selector: 'app-takra',
  templateUrl: './takra.page.html',
  styleUrls: ['./takra.page.scss'],
})
export class TakraPage implements OnInit {
  cartItems: CartItem[] = [];
  customerName: string = '';
  customerPhone: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private cartService: CartService,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  // ✅ โหลดข้อมูลสินค้าจาก API
  loadCart() {
    this.cartService.getCartItems().subscribe({
      next: (res) => {
        this.cartItems = res;
        console.log('📌 สินค้าในตะกร้า:', this.cartItems);
      },
      error: (err) => {
        console.error('❌ เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', err);
      },
    });
  }

  // ✅ คำนวณยอดรวมของสินค้าที่อยู่ในตะกร้า
  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // ✅ ลบสินค้าออกจากตะกร้า
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId).subscribe({
      next: () => {
        this.cartItems = this.cartItems.filter((item) => item.id !== productId);
        console.log('✅ ลบสินค้าสำเร็จ');
      },
      error: (err) => {
        console.error('❌ เกิดข้อผิดพลาดในการลบสินค้า:', err);
      },
    });
  }

  // ✅ แสดง Alert กรอกชื่อ + เบอร์โทร
  async showConfirmAlert() {
    const alert = await this.alertCtrl.create({
      header: 'กรุณากรอกข้อมูล',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'ชื่อ-นามสกุล',
        },
        {
          name: 'phone',
          type: 'tel',
          placeholder: 'เบอร์โทรศัพท์',
          attributes: {
            maxlength: 10,
          },
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('❌ Alert canceled');
          },
        },
        {
          text: 'ยืนยัน',
          handler: (data) => {
            console.log('✅ Alert confirmed', data);
            this.customerName = data.name;
            this.customerPhone = data.phone;
            this.confirmQueue(); // ✅ บันทึกคิวหลังจากได้รับค่าจากฟอร์ม
          },
        },
      ],
    });

    await alert.present();
  }

  // ✅ ฟังก์ชันบันทึกคิวเมื่อกดยืนยัน
  confirmQueue() {
    if (!this.customerName || !this.customerPhone) {
      alert('กรุณากรอกชื่อและเบอร์โทร');
      return;
    }

    const data = {
      name: this.customerName,
      phone: this.customerPhone,
      cartItems: this.cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        imageURL: item.imageURL,
      })),
    };

    this.http.post('http://localhost/jajasuperholyshit/api/add_queue.php', data)
      .subscribe((res: any) => {
        alert('คิวที่ ' + res.queue_id + ' ถูกบันทึกแล้ว');
        this.router.navigate(['/booking-form', { queue_id: res.queue_id }]); // ✅ เปลี่ยนไปหน้า booking-form
      }, error => {
        alert('❌ เกิดข้อผิดพลาดในการบันทึกคิว');
      });
  }

  // ✅ นำทางไปยังหน้าสรุปการสั่งซื้อ
  goToCheckout() {
    if (this.cartItems.length > 0) {
      this.navCtrl.navigateForward('/praped1');
    } else {
      alert('ตะกร้าของคุณว่างเปล่า กรุณาเพิ่มสินค้าในตะกร้า');
    }
  }
}
