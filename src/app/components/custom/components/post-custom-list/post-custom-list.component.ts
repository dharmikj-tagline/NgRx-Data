import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Observable, Subject, map, take } from 'rxjs';
import { CustomService } from '../../service/custom.service';
import { EntityOp, MergeStrategy } from '@ngrx/data';

@Component({
  selector: 'app-post-custom-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-custom-list.component.html',
  styleUrls: ['./post-custom-list.component.scss']
})
export class PostCustomListComponent {

  private customService = inject(CustomService);
  @ViewChild('modal') private modalElement!: ElementRef;
  public postList$!: Observable<any[]>;
  public postDetail: any;
  private postData = [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      "socialMedia": "Instagram",
      "caption": "Stress less, enjoy the best."
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      "socialMedia": "Facebook",
      "caption": "Be kind and full of love."
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
      "socialMedia": "Watsapp",
      "caption": "Follow your heart in everything you do."
    },
    {
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
      "socialMedia": "Threads",
      "caption": "Go out there and dance in the rain."
    },
    {
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
      "socialMedia": "Instagram",
      "caption": "Sweeter than a cupcake."
    },
  ];

  ngOnInit() {
    this.customService.entities$.pipe(take(1)).subscribe(res => !res.length && this.customService.addAllToCache(this.postData));
    this.postList$ = this.customService.entities$;

    // this.customService.changeState$.subscribe((res) => {
    //   console.log('STATE CHANGGE ACTION :>> ', res);
    // })
  }

  updateDetail(post: any) {
    const postDetail = {
      ...post,
      title: post.title + ' ' + post.id + ' ' + post.socialMedia
    }
    this.customService.updateOneInCache(postDetail);
  }

  deleteUser(id: number) {
    this.customService.removeOneFromCache(id);
  }

  viewDetail(id: number) {
    this.customService.entities$
      .pipe(
        map((data) => data.find((item) => item.id === id))
      )
      .subscribe(res => {
        this.postDetail = res;
      });
    this.openModal();
  }

  private tempId: number = 5;
  addPost() {
    const post = {
      "id": ++this.tempId,
      "title": "provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque",
      "body": "reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae",
      "socialMedia": "Twitter",
      "caption": "Joyfull Days Back."
    }

    // this.customService.addOneToCache(post, {
    //   mergeStrategy: MergeStrategy.PreserveChanges,
    // });

    this.customService.createAndDispatch(EntityOp.ADD_ONE, post, { isOptimistic: true });
    setTimeout(() => {
      this.customService.createAndDispatch(EntityOp.COMMIT_ALL, undefined);
      setTimeout(() => {
        this.customService.createAndDispatch(EntityOp.UNDO_ALL, undefined);
      }, 2000);
    }, 3000);
  }

  removeAll() {
    this.customService.clearCache();
  }

  openModal() {
    console.log('OPEN MODAL');
    this.modalElement.nativeElement.showModal();
  }

  closeModal() {
    this.modalElement.nativeElement.close();
  }
}
