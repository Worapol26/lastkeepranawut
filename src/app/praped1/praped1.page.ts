import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-praped1',
  templateUrl: './praped1.page.html',
  styleUrls: ['./praped1.page.scss'],
})
export class Praped1Page {

  constructor(private navCtrl: NavController) { }

  goToSinka() {
    this.navCtrl.navigateForward('/sinka');
  }

  goToSink2() {
    this.navCtrl.navigateForward('/sinka2');
  }

  goToSink3() {
    this.navCtrl.navigateForward('/sinka3');
  }

  goBack() {
    this.navCtrl.navigateBack('/home'); // หรือหน้าอื่นที่คุณต้องการ
  }
}
