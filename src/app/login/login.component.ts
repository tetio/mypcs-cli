import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

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

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private loginService: AuthenticationService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
    this.loginForm = this.fb.group({
      username: this.fb.control('', [<any>Validators.required, <any>Validators.minLength(5)]),
      password: this.fb.control('', [<any>Validators.required, <any>Validators.minLength(5)])
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

  login() {
    // TODO start spinner
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(ok => {
          if (ok) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        error => {
          // TODO server error
          this.router.navigate(['/login']);
        },
        () => {
          // TODO stop spinner
        });
  }


  add() {
    console.log("Clicked button Add");
  }
}
