import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { UserList } from 'src/app/entity-metadata/entity-metadata';
import { UserDetailDataService } from '../../service/user-detail-data.service';
import { UserDetailService } from '../../service/user-detail.service';
import { UserService } from '../../service/user.service';
import { EntityCollectionServiceFactory } from '@ngrx/data';

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
  public loading$ = this.userService.loading$;
  public loaded$ = this.userService.loaded$;

  // constructor(private entityCollectionServiceFactory: EntityCollectionServiceFactory) {
  //   const entityCollectionService = this.entityCollectionServiceFactory.create<any>('Item').add({ id: Date.now(), name: 'Sample' });
  //   // this.items$ = entityCollectionService.entities$;
  // }


  ngOnInit() {
    this.userList$ = this.userService.entities$.pipe(
      switchMap((res) => (res.length ? of(res) : this.userService.getAll()))
    );
  }

  userLength: number = 10;
  addUser() {
    const data = {
      id: ++this.userLength,
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
    //     return (res.length && res[0]?.id === parseInt(id) ? of(res) : this.userDetailService.getWithQuery(id).pipe(
    //       tap((res) => {
    //         this.userDetailService.addAllToCache(res)
    //       })
    //     ));
    //   })
    // )

    // this.userDetail$ = this.userDetailService.getByKey(id);

    this.userDetail$ = this.userDetailService.entities$.pipe(
      switchMap((cachedData) => {
        const existingData = cachedData.find(item => item.id === parseInt(id, 10));
        if (existingData) {
          console.log('existingData :>> ', existingData);
          return of(existingData);
        }
        return this.userDetailService.getByKey(id).
          pipe(
            tap((newRes) => {
              console.log('newRes :>> ', newRes);
              this.userDetailService.addAllToCache([newRes]);
            })
          );
      })
    );

    // this.userDetailService.getWithQuery(id).subscribe(res => {
    //   this.userDetailService.addAllToCache(res);
    // });

    this.openModal();
  }

  openModal() {
    this.modalElement.nativeElement.showModal();
  }

  closeModal() {
    this.modalElement.nativeElement.close();
  }

  addFilter() {
    this.userService.setFilter({
      name: ['===', 'Leanne Graham'],
      // age: ['<', 30],
      // score: ['>', 80],
      username: ['===', 'Bret']
    });
    this.userList$ = this.userService.filteredEntities$;
  }

  clearFilter() {
    this.userService.setFilter(null);
    this.userList$ = this.userService.filteredEntities$;
  }
}
