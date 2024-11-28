import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // นำเข้า NavController

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
})
export class OrderlistPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  // ฟังก์ชันสำหรับย้อนกลับไปยังหน้า Jaokongran
  goBackToJaokongran() {
    this.navCtrl.navigateBack('/jaokongran'); // ย้อนกลับไปยังหน้า jaokongran
  }
}
