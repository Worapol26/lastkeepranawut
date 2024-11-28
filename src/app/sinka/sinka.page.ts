import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor(private navCtrl : NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped(){
    this.navCtrl.navigateForward('/praped1')
  }
  goToTakra(){
    this.navCtrl.navigateForward('/takra')
  }

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
  ]
  sinka2 = [
    {
      id: 2,
      name: 'โออิชิ ชากูซ่า',
      price: 15,
      detail: 'Oishi',
      imageURL: '../../assets/OISHI.png'
    }, {
      id: 4,
      name: 'โออิชิ องุ่นเคียวโฮ',
      price: 20,
      detail: 'OISHI GRAPE',
      imageURL: '../../assets/KYOHO.png'
    },{
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
    }, {
      id: 10,
      name: 'กาแฟเบอร์ดี้',
      price: 20,
      detail: 'Pepsi',
      imageURL: '../../assets/latte-1.png'
    },{
      id: 12,
      name: 'กาแฟเอสเปรสโซ่',
      price: 15,
      detail: 'Liptin',
      imageURL: '../../assets/espresso-1.png'
    },
  ]
 
    
  

}
