import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

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
  cartItems: CartItem[] = []; // ตัวแปรเก็บสินค้าที่ดึงจากฐานข้อมูล

  constructor(private navCtrl: NavController, private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.loadCart(); // โหลดข้อมูลสินค้าตอนเปิดหน้า
  }

  // ✅ โหลดข้อมูลสินค้าจาก API
  loadCart() {
    this.cartService.getCartItems().subscribe({
      next: (res) => {
        this.cartItems = res; // เก็บข้อมูลสินค้าในตัวแปร
        console.log('📌 สินค้าในตะกร้า:', this.cartItems);
      },
      error: (err) => {
        console.error('❌ เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', err);
      },
    });
  }

  // ✅ คำนวณยอดรวม
  get totalPrice() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // ✅ ฟังก์ชันลบสินค้าออกจากตะกร้า
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

  // ✅ นำทางไปยังหน้าสรุปการสั่งซื้อ
  goToCheckout() {
    if (this.cartItems.length > 0) {
      this.navCtrl.navigateForward('/praped1');
    } else {
      alert('ตะกร้าของคุณว่างเปล่า กรุณาเพิ่มสินค้าในตะกร้า');
    }
  }

  public alertButtons = [
    {
      text: 'ยกเลิก',
      role: 'cancel',
      handler: () => {
        console.log('❌ Alert canceled');
      },
    },
    {
      text: 'ยืนยัน',
      role: 'confirm',
      handler: () => {
        console.log('✅ Alert confirmed');
        this.router.navigate(['../../booking-form']);
      },
    },
  ];

  public alertInputs = [
    {
      placeholder: 'ชื่อ-นามสกุล',
    },
    {
      placeholder: 'เบอร์โทรศัพท์',
      attributes: {
        maxlength: 10,
      },
    },
  ];
}
