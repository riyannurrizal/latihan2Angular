import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Buku } from '../buku.model';
import { BukusService } from '../bukus.service';

@Component({
  selector: 'app-buku-add',
  templateUrl: './buku-add.component.html',
  styleUrls: ['./buku-add.component.css'],
  providers: [BukusService]
})
export class BukuAddComponent implements OnInit {

  @ViewChild('inputQty') inputQty: ElementRef;

  @Output() bukuAdded: EventEmitter<Buku> = new EventEmitter<Buku>();

  @Input() bukuChild: Buku;

  inputInfo: Buku = new Buku();
  constructor(private bukuServis: BukusService) { }

  ngOnInit() {
  }

  tambahBuku(inputEmail: HTMLInputElement){
    this.bukuAdded.emit(this.bukuServis.convertBuku(this.inputInfo));
    this.inputInfo = new Buku();
  }
/** 
  tambahBuku(inputEmail: HTMLInputElement) {
    console.log(this.inputInfo);
    console.log(inputEmail.value);
    console.log(this.inputContact.nativeElement.value);

    this.bukuAdded.emit(this.inputInfo);
    this.inputInfo = new Buku();
  }
*/
}
