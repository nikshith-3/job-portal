import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.username === 'user' && this.password === 'user123') {
      this.router.navigate(['/user-dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }

//   loginform:FormGroup=new FormGroup({})
//   constructor(private fb:FormBuilder,private service:ServiceService,private router:Router){
//     this.loginform=fb.group({
//       username:['',Validators.required],
//       password:['',Validators.required],
//     })
//   }
//   res:any;
//   checklogin(){
//     this.service.login(this.loginform.value).subscribe((data)=>{
//       this.res=data;
//       if(this.res.jwttoken==undefined || this.res.jwttoken==null){
//         alert(this.res.result)
//         }
//         else{
//           alert("login success");
//           sessionStorage.setItem("loggedin",JSON.stringify({Token:this.res.jwttoken,id:this.res.response._id}))
//         }
//         if(this.res.response.role=="user"){
//           this.router.navigateByUrl("/user-dashboard")
//         }
//         else if(this.res.response.role=="admin"){
//           this.router.navigateByUrl("/admin-dashboard");
//         }
// })
// }

}
