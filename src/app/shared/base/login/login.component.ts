import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { UnsetAuthors } from 'src/app/modules/authors/store/actions/authors.actions';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* class properties */
  public formLogin:FormGroup;
  public loadding:boolean = false;
  /* constructor of clase */
  constructor(
    /* dependenci inyection */
    private formBuilder:FormBuilder,
    private loginService:LoginService,
    private snackBar: MatSnackBar,
    private datePipe:DatePipe,
    private router:Router,
  ) {
    this.formLogin = this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required],
    });
  }

  ngOnInit(): void {

  }
  /* save Changes method */
  saveChanges(){
    /* start loadding */
    this.loadding = true;
    this.loginService.login(this.formLogin.value).subscribe(resp => {
      if (resp.token) {
        /* save data session in local storage */
        localStorage.setItem('token',resp.token);
        localStorage.setItem('expiracion',this.datePipe.transform(resp.expiracion,'YY/MM/yyyy hh:mm'));
        /* save type rol if have a rol */
        if (resp.rol.length == 1) {
          localStorage.setItem('rol', resp.rol[0].type);
        }
        /* stop loadding */
        this.loadding = false;
        /* open success message */
        this.snackBar.open('Te haz loggeado con éxito!', 'Aceptar', {
          horizontalPosition:'end',
          verticalPosition:'bottom',
        });
        /* redirect */
        this.router.navigate(['/home']);
      }else {
        /* stop loadding */
        this.loadding = false;
      }
    }, error => {
      console.log(error);
      /* stop loadding */
      this.loadding = false;
      /* open error message */
      this.snackBar.open('Error!, revise sus credenciales', 'Aceptar', {
        horizontalPosition:'end',
        verticalPosition:'bottom',
      });
    });
  }
}
