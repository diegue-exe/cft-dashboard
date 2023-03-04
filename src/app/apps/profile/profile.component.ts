import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formEditUserInfo: FormGroup;
  formChangePassword: FormGroup;
  user: User;

  constructor(formBuilder: FormBuilder, private dataService: DataService) {
    this.dataService.getUserData()
    .pipe(take(1))
    .subscribe(data => {
      this.user = data;
    }),
    this.formEditUserInfo = formBuilder.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    }),
    this.formChangePassword = formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  // TODO hacer la petición http y actualizar datos
  ngOnInit(): void {

  }

}
