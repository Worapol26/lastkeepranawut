import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage {

  name: string = '';   // กำหนดค่าเริ่มต้นเป็นสตริงว่าง
  phone: string = '';  // กำหนดค่าเริ่มต้นเป็นสตริงว่าง

  constructor(private router: Router) {}

  cancel() {
    // กลับไปหน้าหลักเมื่อกดปุ่มยกเลิก
    this.router.navigate(['/home']);
  }

  submitForm() {
    // โค้ดสำหรับการส่งฟอร์ม (เช่น การบันทึกข้อมูล หรือการแสดงข้อความยืนยัน)
    console.log('Name:', this.name);
    console.log('Phone:', this.phone);
    // กลับไปหน้าหลักหลังจากยืนยัน
    this.router.navigate(['/home']);
  }

}
