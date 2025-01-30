import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service'; // ✅ เพิ่ม CartService

@Component({
  selector: 'app-sinka3',
  templateUrl: './sinka3.page.html',
  styleUrls: ['./sinka3.page.scss'],
})
export class Sinka3Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private cartService: CartService // ✅ ใช้ CartService เพื่อส่งสินค้าไปยัง API
  ) { 
    addIcons({ bagHandleOutline });
  }

  ngOnInit() {}

  goToPraped() {
    this.navCtrl.navigateForward('/praped1');
  }

  goToTakra() {
    this.navCtrl.navigateForward('/takra');
  }

  // ✅ ฟังก์ชันเพิ่มสินค้าลงตะกร้า และส่งไปยัง API
  async addToCart(product: any) {
    const productWithQuantity = {
      ...product,
      quantity: 1, // ✅ กำหนดจำนวนเริ่มต้นเป็น 1
      imageURL: product.imageURL // ✅ เพิ่ม imageURL
    };

    console.log('🚀 กำลังเพิ่มสินค้า:', productWithQuantity);

    this.cartService.addToCart(productWithQuantity).subscribe({
      next: async (res) => {
        console.log('✅ API Response:', res);
        const toast = await this.toastController.create({
          message: `${product.name} ถูกเพิ่มไปยังตะกร้าแล้ว!`,
          duration: 2000,
          position: 'bottom',
          cssClass: 'custom-toast'
        });
        toast.present();
      },
      error: async (err) => {
        console.error('❌ เกิดข้อผิดพลาดจาก API:', err);
        const toast = await this.toastController.create({
          message: 'เกิดข้อผิดพลาดในการเพิ่มสินค้า',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      }
    });
  }

  // ✅ ข้อมูลสินค้า
  sinka5 = [
    {
      id: 1,
      name: 'ชินรามยอน',
      price: 27,
      detail: 'Chinramyon',
      imageURL: '../../assets/ramyoung.webp'
    },
    {
      id: 3,
      name: 'มาม่าต้มยำกุ้งน้ำค้น',
      price: 8,
      detail: 'Mama Shrimp Tom Yum Flavor',
      imageURL: '../../assets/mamakung.webp'
    },
    {
      id: 5,
      name: 'คนอร์คัพโจ๊ก รสปลา',
      price: 15,
      detail: 'Knorr Cup Joke Fish Flavor',
      imageURL: '../../assets/JOKECUP.png'
    }
  ];

  sinka6 = [
    {
      id: 2,
      name: 'โจ๊กคัพ รสไข่เค็ม',
      price: 16,
      detail: 'Joke Cup Salted Egg Flavor',
      imageURL: '../../assets/JOKEKAI.png'
    },
    {
      id: 4,
      name: 'มาม่ารสแกงเขียวหวาน',
      price: 7,
      detail: 'Mama Green Curry Flavor',
      imageURL: '../../assets/whan.png'
    },
    {
      id: 6,
      name: 'มาม่ารสหมูสับ',
      price: 15,
      detail: 'Mama Minced Pork Flavor',
      imageURL: '../../assets/MAMAMUSUP.png'
    },
    {
      id: 7,
      name: 'มาม่ารสต้มยำกุ้ง',
      price: 15,
      detail: 'Mama Tom Yum Flavor',
      imageURL: '../../assets/MAMAKUNGs.png'
    },
    {
      id: 8,
      name: 'OK มาม่ารสไข่เค็ม',
      price: 15,
      detail: 'Mama Salted Egg Flavor',
      imageURL: '../../assets/OKMAMA.png'
    },
    {
      id: 9,
      name: 'ซัมยัง มาม่าเผ็ดเกาหลี',
      price: 15,
      detail: 'Samyang Korean Spicy',
      imageURL: '../../assets/KOREA1.png'
    },
    {
      id: 10,
      name: 'ซัมยัง มาม่าเผ็ดเกาหลีชีส',
      price: 15,
      detail: 'Samyang Korean Spicy Cheese',
      imageURL: '../../assets/KOREA2.png'
    }
  ];
}
