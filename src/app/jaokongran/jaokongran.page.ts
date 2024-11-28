import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // นำเข้า NavController เพื่อใช้งานการนำทาง

@Component({
  selector: 'app-jaokongran',
  templateUrl: './jaokongran.page.html',
  styleUrls: ['./jaokongran.page.scss'],
})
export class JaokongranPage implements OnInit {

  constructor(private navCtrl: NavController) { } // เพิ่ม NavController เข้ามาใน constructor

  ngOnInit() {
  }

   // ฟังก์ชันสำหรับนำทางไปยังหน้า orderlist
   goToOrderList() {
    this.navCtrl.navigateForward('/orderlist'); // นำทางไปยังหน้าที่ชื่อว่า /orderlist
  }

  logout() {
    this.navCtrl.navigateRoot('/home'); // นำทางกลับไปยังหน้า home
  }
}
