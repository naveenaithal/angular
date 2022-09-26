import { Component } from '@angular/core';
import { User } from './userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment';
  userDetails: User = { name: '', email: '', phoneNumber: '', address: '' }
  
users:User[]=[]



  ngOnInit() {
 
       this.users.push(...JSON.parse(localStorage.getItem('users') || '{}'));
     
    console.log(this.users)
}

  submitForm(form: any) {
    console.log(form.value)
    this.users.push(form.value)
    localStorage.setItem('users',JSON.stringify(this.users))
    form.resetForm({ name: '', email: '', phoneNumber: '', address: '' });

}

  
  
  
  
  DeleteCard(i: any) {
    console.log(i)
    this.users.splice(i, 1)
   localStorage.setItem('users',JSON.stringify(this.users))

    
  }
  
}
