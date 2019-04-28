import { Component } from "@angular/core"
import { CommonService } from "../common.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    errorMsg = false;
    constructor(private cs: CommonService, private http: HttpClient, private router: Router) {
        if (localStorage.getItem('name')) {
            this.router.navigate(['/'])
        }
    }

    email
    password
    alertFunc() {
        console.log(this.email, this.password)
       // this.cs.username = "Shubham Verma";
        // var url = "https://learningmeanwithashu.herokuapp.com/api/login";
        var url = "http://localhost:5000/login";
        this.http.post(url, { email: this.email, password: this.password })
            .subscribe((response) => {
                if (response["data"]) {
                    //navigate
                    this.cs.username = response["data"].name;
                    console.log("service : ",this.cs.username)
                    localStorage.setItem('email', response["data"].email)
                    localStorage.setItem('name', response["data"].name)
                    this.router.navigate(['/productListFromAPI'])
                }
                this.errorMsg = response["message"];
                console.log("response from api : ", response)
            }, (error) => {
                console.log("Error from api : ", error);
            });
    }
    header = "Login page"
}
