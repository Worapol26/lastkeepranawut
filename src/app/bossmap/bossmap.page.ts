import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bossmap',
  templateUrl: './bossmap.page.html',
  styleUrls: ['./bossmap.page.scss'],
})
export class BossmapPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  // ✅ ฟังก์ชันเข้าสู่ระบบ
  login() {
    if (!this.username || !this.password) {
      this.showToast('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    const data = {
      action: 'login', // ✅ ใส่ action ชัดเจน
      username: this.username,
      password: this.password,
    };

    console.log("📌 ส่งข้อมูลไป API:", JSON.stringify(data)); // ✅ Debugging

    this.http.post('http://localhost/jajasuperholyshit/api/auth.php', data).subscribe(
      async (res: any) => {
        console.log("✅ API Response:", res); // ✅ Debugging response

        // ป้องกันกรณี API ส่งข้อมูลผิดพลาด
        if (!res || typeof res !== 'object' || !('success' in res)) {
          console.error("❌ API ส่งค่าผิดพลาด:", res);
          await this.showToast('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์');
          return;
        }

        if (res.success) {
          await this.showToast('เข้าสู่ระบบสำเร็จ!');
          sessionStorage.setItem('user_id', res.user_id); // ✅ เก็บ user_id
          this.navCtrl.navigateForward('/jaokongran'); // ✅ เปลี่ยนหน้า
        } else {
          await this.showToast(res.message || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
      },
      async (error) => {
        console.error("❌ API ERROR:", error);
        await this.showToast('เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      }
    );
  }

  // ✅ ฟังก์ชันไปหน้าลงทะเบียน
  register() {
    this.navCtrl.navigateForward('/register');
  }

  // ✅ แสดง Toast แจ้งเตือน
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
