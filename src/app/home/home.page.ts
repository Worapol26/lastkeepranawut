import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { DataapiService } from '../dataapi.service'; // ลบออกหากไม่ต้องการใช้ API
// import { NavController } from '@ionic/angular'; // ลบออกถ้าไม่ใช้
// import { addIcons } from 'ionicons'; // ลบออกถ้าไม่ใช้
// import { bagHandleOutline } from 'ionicons/icons'; // ลบออกถ้าไม่ใช้

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  txtid_produucts: any;
  txtname: any;
  txtprice: any;

  // ลบตัวแปรที่เกี่ยวข้องกับ API หากไม่ใช้
  // id_produucts: any;
  // name: any;
  // price: any;

  constructor(public router: Router) { }

  ngOnInit() {
    // ถ้ามี code ที่ต้องการทำเมื่อ component ถูกโหลดสามารถใส่ได้ที่นี่
  }

  goToType() {
    this.router.navigate(['/praped1']);  // แก้จาก '/type' เป็น '/praped1'
  }

  insertProduct() {
    let data = {
      id_stu: this.txtid_produucts,
      name: this.txtname,
      nname: this.txtprice,
    };

    // หากคุณไม่ต้องการให้เรียก API ก็สามารถแค่แสดงข้อมูลใน console ได้
    console.log("ข้อมูลที่จะส่งไปยัง API:", data);

    // คอมเมนต์การเรียก API หรือสามารถแทนที่ด้วยการแสดงข้อความใน console
    // this.dataapi.insertProduct(data).subscribe({
    //   next: (res: any) => {
    //     console.log("ข้อมูลถูกเพิ่ม", res);
    //   },
    //   error: (error: any) => {
    //     console.log("ข้อมูลไม่ถูกเพิ่ม", error);
    //   }
    // });
    
    // คลีนฟอร์มหลังจากส่งข้อมูล
    this.clearForm();
  }

  clearForm() {
    this.txtid_produucts = "";
    this.txtname = "";
    this.txtprice = "";
  }
}
