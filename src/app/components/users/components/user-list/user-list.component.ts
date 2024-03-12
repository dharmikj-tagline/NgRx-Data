import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { UserDataService } from '../../service/user-data.service';
import { EntityDataService } from '@ngrx/data';
import { EMPTY, Observable, catchError, combineLatest, concatMap, defaultIfEmpty, filter, first, map, mergeMap, of, startWith, switchMap, take, tap } from 'rxjs';
import { UserList } from 'src/app/entity-metadata/entity-metadata';
import { select } from '@ngrx/store';
import { UserDetailDataService } from '../../service/user-detail-data.service';
import { UserDetailService } from '../../service/user-detail.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  private userService = inject(UserService);
  private userDataService = inject(UserDetailDataService);
  private userDetailService = inject(UserDetailService);
  @ViewChild('modal') private modalElement!: ElementRef;
  public userList$!: Observable<any>;
  public userDetail$!: Observable<any>;

  ngOnInit() {
    // debugger;
    // this.userList$ = this.userService.entities$.pipe(
    //   mergeMap((res) => {
    //     if (!res.length) return this.userService.getAll();
    //     return of(res);
    //   })
    // );

    this.userList$ = this.userService.entities$.pipe(
      switchMap((res) => (res.length ? of(res) : this.userService.getAll()))
    );

    setTimeout(() => {
      this.delete();
    }, 5000);
  }

  addUser() {
    const data = {
      id: 0,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
    this.userService.add(data);
  }

  updateDetail(detail: UserList) {
    this.userService.update(detail);
  }

  deleteUser(id: number) {
    this.userService.delete(id);
  }

  viewDetail(id: any) {
    // this.userDetail$ = this.userDetailService.entities$.pipe(
    //   switchMap((res: any) => {
    //      return (res.length && res[0]?.id === parseInt(id) ? of(res) : this.userDetailService.getWithQuery(id));
    //   })
    // )

    // this.userDetail$ = this.userDetailService.entities$.pipe(
    //   switchMap((res: any) => {
    //     return (res.length && res[0]?.id === parseInt(id) ? of(res) : this.userDetailService.getWithQuery(id).pipe(
    //       tap((res) => {
    //         this.userDetailService.addAllToCache(res)
    //       })
    //     ));
    //   })
    // )

    this.userDetail$ = this.userDetailService.entities$.pipe(
      switchMap((cachedData) => {
        const existingData = cachedData.find(item => item.id === parseInt(id, 10));
        if (existingData) {
          return of(existingData);
        }
        return this.userDetailService.getWithQuery(id).pipe(
          tap((newRes) => {
            console.log('newRes :>> ', newRes);
            this.userDetailService.addAllToCache(newRes);
          })
        );
      })
    );

    // this.userDetailService.getWithQuery(id).pipe(
    //   tap((res) => this.userDetailService.addAllToCache(res))
    // );
    //   this.userDetailService.addAllToCache(res);



    // this.userDetailService.getWithQuery(id).subscribe(res => {
    //   this.userDetailService.addAllToCache(res);
    // });


    // this.userDetail$ = this.userDetailService.getWithQuery(id);

    this.openModal();
  }

  openModal() {
    this.modalElement.nativeElement.showModal();
  }

  closeModal() {
    this.modalElement.nativeElement.close();
  }

  delete() {
    // const removeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // this.userService.removeManyFromCache(removeIds);

    // this.userService.getByKey(1);
  }
}
