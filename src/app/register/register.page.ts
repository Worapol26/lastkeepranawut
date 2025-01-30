import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController, 
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  async register() {
    if (!this.username || !this.password) {
      await this.showToast('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: async (res) => {
        console.log('📌 API Response:', res); // ✅ Debug API Response

        if (!res || typeof res !== 'object' || !('success' in res)) {
          await this.showToast('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์');
          return;
        }

        if (res.success) {
          await this.showToast('สมัครสมาชิกสำเร็จ!');
          this.navCtrl.navigateBack('/bossmap'); // ✅ กลับไปหน้า Login
        } else {
          await this.showToast(res.message);
        }
      },
      error: async (err) => {
        console.error('❌ API ERROR:', err);
        await this.showToast('เกิดข้อผิดพลาด กรุณาลองใหม่');
      },
    });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
