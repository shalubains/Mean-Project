import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  email
  name
  password
  image
  signUpSubmit() {
    console.log(this.email, this.name, this.password);
    //var url = "https://learningmeanwithashu.herokuapp.com/api/register";
    var url = "http://localhost:5000/signup"
    this.http.post(url, { email: this.email,name: this.name, password: this.password, image:this.image })
      .subscribe((response) => {
          alert(response["message"])
        console.log("Response from api : ", response)
        this.router.navigate['/login']
      }, (error) => {
        console.log("Error from api : ", error)
      })

  }

  ngOnInit() {
  }

}
