import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coaches : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {

  }

  ionViewDidLoad(){
    /*this.httpprovider.getCategory().subscribe(
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
    );*/

    this.httpprovider.getCoachApi().then((data) => {
          this.coaches = data;
    }, (err) => {
        console.log("not allowed");
    });

  }

  itemTapped(){
  	this.navCtrl.push(DetailPage)
  }


}