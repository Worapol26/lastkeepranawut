import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service'; // นำเข้า CartService

@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private cartService: CartService // เพิ่ม CartService สำหรับเชื่อม API
  ) { 
    addIcons({ bagHandleOutline });
  }

  ngOnInit() {}

  // ฟังก์ชันไปยังหน้า praped1
  goToPraped() {
    this.navCtrl.navigateForward('/praped1');
  }

  // ฟังก์ชันไปยังหน้าตระกร้า
  goToTakra() {
    this.navCtrl.navigateForward('/takra');
  }

  // ฟังก์ชันสำหรับเพิ่มสินค้าลงตะกร้า
  async addToCart(product: any) {
    const productWithQuantity = {
      ...product,
      quantity: 1, // เพิ่มค่า quantity เริ่มต้น
      imageURL: product.imageURL, // ส่ง imageURL ไปด้วย
    };

    console.log('🚀 กำลังเพิ่มสินค้า:', productWithQuantity); // Log ข้อมูลสินค้าเพื่อ Debug

    this.cartService.addToCart(productWithQuantity).subscribe({
      next: async (res) => {
        console.log('✅ API Response:', res); // Log การตอบกลับจาก API

        // แสดง Toast เมื่อเพิ่มสินค้า
        const toast = await this.toastController.create({
          message: `${product.name} ถูกเพิ่มไปยังตะกร้าแล้ว!`,
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      },
      error: async (err) => {
        console.error('❌ เกิดข้อผิดพลาดจาก API:', err); // Log ข้อผิดพลาดจาก API

        // แสดงข้อความเมื่อเกิดข้อผิดพลาด
        const toast = await this.toastController.create({
          message: 'เกิดข้อผิดพลาดในการเพิ่มสินค้า',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      }
    });
  }

  // ข้อมูลสินค้า (หมวดหมู่ที่ 1)
  sinka = [
    {
      id: 1,
      name: 'โค้ก',
      price: 15,
      detail: 'Coke',
      imageURL: '../../assets/coke-full-red-325-ml-hires.png'
    },
    {
      id: 3,
      name: 'น้ำเปล่า',
      price: 7,
      detail: 'Water',
      imageURL: '../../assets/mongfer.png'
    },
    {
      id: 5,
      name: 'สปอนเซอร์',
      price: 15,
      detail: 'Sponser',
      imageURL: '../../assets/sponsor-1.png'
    },
    {
      id: 7,
      name: 'โค้ก ซีโร่',
      price: 15,
      detail: 'Coke',
      imageURL: '../../assets/COKEZERO.png'
    },
    {
      id: 9,
      name: 'เย็นเย็น',
      price: 7,
      detail: 'YenYen',
      imageURL: '../../assets/yenyen_400ml_mixedHerbsCooling.png'
    },
    {
      id: 11,
      name: 'เพียวริขุ',
      price: 12,
      detail: 'Sponser',
      imageURL: '../../assets/puriku-1.png'
    },
  ];

  // ข้อมูลสินค้า (หมวดหมู่ที่ 2)
  sinka2 = [
    {
      id: 2,
      name: 'โออิชิ ชากูซ่า',
      price: 15,
      detail: 'Oishi',
      imageURL: '../../assets/OISHI.png'
    }, 
    {
      id: 4,
      name: 'โออิชิ องุ่นเคียวโฮ',
      price: 20,
      detail: 'OISHI GRAPE',
      imageURL: '../../assets/KYOHO.png'
    },
    {
      id: 6,
      name: 'เอ็ม 150',
      price: 15,
      detail: 'M150',
      imageURL: '../../assets/M150.webp'
    },
    {
      id: 8,
      name: 'คาราบาว',
      price: 15,
      detail: 'Pepsi',
      imageURL: '../../assets/CARAMUJO.png'
    },
    {
      id: 10,
      name: 'กาแฟเบอร์ดี้',
      price: 20,
      detail: 'Pepsi',
      imageURL: '../../assets/latte-1.png'
    },
    {
      id: 12,
      name: 'กาแฟเอสเปรสโซ่',
      price: 15,
      detail: 'Liptin',
      imageURL: '../../assets/espresso-1.png'
    },
  ];
}
