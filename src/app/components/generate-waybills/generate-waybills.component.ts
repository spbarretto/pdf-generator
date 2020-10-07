import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf'
import html2canvas from "html2canvas";
import { concatMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-generate-waybills',
  templateUrl: './generate-waybills.component.html',
  styleUrls: ['./generate-waybills.component.css']
})
export class GenerateWaybillsComponent implements OnInit {
  barcodeValue = '412441234asd1';
  qrValue = 'Techiediaries';
  elementType = 'url';
  orders = [
    { shipper: "Shipper 1", customer: "Customer 1", id: 123456789 },
    { shipper: "Shipper 2", customer: "Customer 2", id: 123456790 },
  ];

  @ViewChild('pdfContent') pdfContent: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  public convertToPDF() {
    var doc = new jsPDF();

    from(this.orders).pipe(
      concatMap((arrayElem) => {
        console.log(arrayElem.id);
        let pdfContent = document.getElementById(arrayElem.id.toString());
        return from(html2canvas(pdfContent).then(function (canvas) {
          let generatedImage = canvas.toDataURL("image/png");
          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();
          doc.addImage(generatedImage, 'JPEG', 0, 0, width, height/3);
          return `${arrayElem.id}`;
        }));
      })
    ).subscribe((pdfName) => {
      doc.save(pdfName + '.pdf')
      console.log("PDF downloaded", pdfName);
    })
  }
}
