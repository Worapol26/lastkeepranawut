import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bossmap',
  templateUrl: './bossmap.page.html',
  styleUrls: ['./bossmap.page.scss'],
})
export class BossmapPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  goToJao() {
    this.navCtrl.navigateForward('/jaokongran')
  }

}
