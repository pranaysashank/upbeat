/**
 * Created by Pranay Sashank on 9/2/2016.
 */
import '../rxjs-extensions';

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {AuthService} from "../login/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    /* getUser() {
     return {
     "_id": "15261a05a2",
     "type": "student",
     "Department": "ece",
     "Section": 2,
     "Admission Year": "2015-2019",
     "Current Year": 2,
     "Personal Details": {
     "Name": "Pisupati Venkata Pranay Sashank",
     "Fathers Name": "Pisupati Badari Bhavani Prasad",
     "Mothers Name": "Remani Syamala Kumari",
     "Occupation of Father": "Office Assistant",
     "Annual Income": "Above 400000",
     "Date of Birth": "3rd september 1998",
     "Place of Birth": "Hyderabad",
     "Area of Candidate": "Hyderabad",
     "Mode of Admission": "B category Merit",
     "Mother Tongue": "Telugu",
     "Gender": "Male",
     "Marital Status": "Unmarried",
     "Admission Number": "15261a05a2",
     "Date of Admission": "4th August 2016",
     "Scholarship Eligibility": "No",
     "Blood Group": "A+",
     "Address": {
     "Address Line": "F no 401, Anjanaadri Apts, Road no 15, Venkateshwara Colony, Saroornagar",
     "City": "Hyderabad",
     "District": "Hyderabad",
     "Pincode": 500035,
     "State": "Telangana",
     "Country": "India"
     },
     "Contact Details": {
     "Mobile No": 9550919982,
     "Email Id": "pranaysashank@gmail.com"
     }
     },
     "Attendance": "70%",
     "Courses": {
     "Basic Electrical Engineering": {
     "Faculty": "N. Swetha",
     "Attendance": "30/47",
     "Marks": {
     "Internal 1": 18
     }
     },
     "Data Structures": {
     "Faculty": "P. Satya Sekhar Varma",
     "Attendance": "33/52",
     "Marks": {
     "Internal 1": 23
     }
     },
     "Digital Logic Design": {
     "Faculty": "M. Mamatha",
     "Attendance": "33/43",
     "Marks": {
     "Internal 1": 20
     }
     },
     "Electronic Devices and Circuits": {
     "Faculty": "K. Raghu",
     "Attendance": "27/41",
     "Marks": {
     "Internal 1": 20
     }
     },
     "Mathematical Foundations of Computer Science": {
     "Faculty": "P. Poornima",
     "Attendance": "25/42",
     "Marks": {
     "Internal 1": 23
     }
     },
     "Probability & Statistics": {
     "Faculty": "G. Shantha",
     "Attendance": "44/53",
     "Marks": {
     "Internal 1": 20
     }
     },
     "Data Structures Lab": {
     "Faculty": "P. Satya Sekhar Varma",
     "Attendance": "21/30"
     },
     "Electrical and Electronics Lab": {
     "Faculty": "N. Swetha",
     "Attendance": "21/33"
     }
     },
     "Attendance_Dates": {
     "24/08/2016": {
     "BEE lab 1": false,
     "BEE lab 2": false,
     "BEE lab 3": false,
     "DLD 4": false,
     "BEE 5": false,
     "BEE 6": false,
     "P&S 7": false
     },
     "23/08/2016": {
     "EDC 1": true,
     "DS 2": true,
     "DS 3": true,
     "DLD 4": true,
     "P&S 5": true,
     "EDC 6": true
     }
     }

     };
     }*/

    private user;
    // private observable: Observable;

    constructor(private http: Http, private authService: AuthService) {
    }

    getUser() {/*
     console.log(1);
     if (this.user) {
     console.log(' 2 here');
     return Observable.of(this.user);
     }
     else if (this.observable) {
     return this.observable;
     }
     else {
     let authToken = localStorage.getItem('auth_token');

     this.observable = this.http
     .get(`http://127.0.0.1:4567/user.php?auth_token=${authToken}`)
     .map((res) => {
     this.observable = null;
     this.user = res.json();
     return this.user;
     });
     return this.observable;
     }*/
        let authToken = localStorage.getItem('auth_token');
        return this.http
            .get(`http://127.0.0.1:4567/user.php?auth_token=${authToken}`)
            .map((res) => res.json());
    }

}