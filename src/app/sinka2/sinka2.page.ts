import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController, ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service'; // ✅ เพิ่ม CartService

@Component({
  selector: 'app-sinka2',
  templateUrl: './sinka2.page.html',
  styleUrls: ['./sinka2.page.scss'],
})
export class Sinka2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private cartService: CartService // ✅ เพิ่ม CartService
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
  sinka3 = [
    {
      id: 1,
      name: 'สาหร่ายมาชิตะ',
      price: 15,
      detail: 'Machita',
      imageURL: '../../assets/machita.webp'
    },
    {
      id: 3,
      name: 'เลย์รสออริจินอล',
      price: 20,
      detail: 'Lays',
      imageURL: '../../assets/lays-original_75g.webp'
    },
    {
      id: 5,
      name: 'โดริโทส',
      price: 15,
      detail: 'Doritos',
      imageURL: '../../assets/doritos.png'
    }
  ]; // ✅ ปิด array `sinka3` อย่างถูกต้อง

  sinka4 = [
    {
      id: 2,
      name: 'ปาร์ตี้',
      price: 10,
      detail: 'Party',
      imageURL: '../../assets/party.png'
    }, 
    {
      id: 4,
      name: 'โทโร่',
      price: 20,
      detail: 'Toro',
      imageURL: '../../assets/toro.png'
    },
    {
      id: 6,
      name: 'สแน็คแจ็ค',
      price: 15,
      detail: 'SnackJack',
      imageURL: '../../assets/snackjak.png'
    },
    {
      id: 7,
      name: 'โดโสะ',
      price: 20,
      detail: 'DOZO',
      imageURL: '../../assets/DOSO.png'
    },
    {
      id: 8,
      name: 'ทาโร่',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/TARO.png'
    },
    {
      id: 9,
      name: 'เบนโตะ',
      price: 20,
      detail: 'Bento',
      imageURL: '../../assets/bento.png'
    },
    {
      id: 10,
      name: 'คาราด้า',
      price: 20,
      detail: 'KARADA',
      imageURL: '../../assets/KARADA.png'
    }
  ]; // ✅ ปิด array `sinka4` อย่างถูกต้อง
} // ✅ ปิด `class Sinka2Page` อย่างถูกต้อง
