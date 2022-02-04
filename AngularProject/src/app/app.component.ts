import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'AngularProject';


  ngOnInit(): void {
    this.printMessage();
  }

  private async printMessage(): Promise<void> {
    const result = await this.message$().toPromise();    

    const hello = await this.sayHello$().toPromise();
    console.log(`result : ${result}`);
    console.log(`sayHello : ${hello}`);
  }

  private message$(): Observable<string> {
    return new Observable<string>(ob => {
      ob.next('Hello');
      ob.complete();
    });
  }

  private sayHello$(): Observable<string> {
    return of('Hello User');
  }

}
