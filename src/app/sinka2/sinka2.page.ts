import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-sinka2',
  templateUrl: './sinka2.page.html',
  styleUrls: ['./sinka2.page.scss'],
})
export class Sinka2Page implements OnInit {

  constructor(private navCtrl: NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped() {
    this.navCtrl.navigateForward('/praped1')
  }
  goToTakra() {
    this.navCtrl.navigateForward('/takra')
  }

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
    },
  ]
  sinka4 = [
    {
      id: 2,
      name: 'ปาร์ตี้',
      price: 10,
      detail: 'Party',
      imageURL: '../../assets/party.png'
    }, {
      id: 4,
      name: 'โทโร่',
      price: 20,
      detail: 'Toro',
      imageURL: '../../assets/toro.png'
    }, {
      id: 6,
      name: 'สแน็คแจ็ค',
      price: 15,
      detail: 'SnackJack',
      imageURL: '../../assets/snackjak.png'
    }, {
      id: 7,
      name: 'โดโสะ',
      price: 20,
      detail: 'DOZO',
      imageURL: '../../assets/DOSO.png'
    },{
      id: 7,
      name: 'ทาโร่',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/TARO.png'
    },{
      id: 7,
      name: 'เบนโตะ',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/bento.png'
    },
    {
      id: 7,
      name: 'คาราด้า',
      price: 20,
      detail: 'TARO',
      imageURL: '../../assets/KARADA.png'
    },

  ]
}
