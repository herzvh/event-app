import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef,
    public toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  uploadDocument() {
    this.toastrService.success('Document uploadé', 'Succès');
    this.bsModalRef.hide();
  }
}
