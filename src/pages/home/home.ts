import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  category : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {

  }

  ionViewDidLoad(){
    this.httpprovider.getCategory().subscribe(
      data => {
        console.log(data)
        this.category = data;
        console.log(this.category)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('everything is ok!')
    }
    );
  }

  itemTapped(){
  	this.navCtrl.push(DetailPage)
  }


}