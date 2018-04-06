import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';
declare let DatecsPrinter:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	win:any=window;
	thermal:any
  constructor(private printer: Printer, public navCtrl: NavController) {
  	this.thermal = this.win.DatecsPrinter;

  	let options: PrintOptions = {
	     name: 'MyDocument',
	     printerId: '192.168.1.85',
	     duplex: true,
	     landscape: true,
	     grayscale: true
	   };

	   // console.log( typeof this.printer.connectWifi )
	   /*this.printer.connectWifi('192.168.1.85', (res)=>{
	   	console.log(res)
	   })*/
	   console.log(this.thermal)
	   // let a = this.thermal.connect('192.168.1.85')
	   // console.log(a)

  }

}
