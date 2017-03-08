import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  public loginForm: FormGroup;
  public submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private loginComponent: AuthenticationService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.loginForm = this.fb.group({
      username: this.fb.control('', [<any>Validators.required, <any>Validators.minLength(8)]),
      password: this.fb.control('', [<any>Validators.required, <any>Validators.minLength(8)])
    });
  }

  save(model: any, isValid: boolean) {
    this.submitted = true;
// ---
localStorage.setItem('currentUser', "{a:a, b:b}");
// ---
    this.router.navigate([this.returnUrl]);
    console.log(model, isValid);
  }
}
