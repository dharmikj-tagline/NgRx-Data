import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { first, tap } from 'rxjs';
import { UserService } from '../service/user.service';

export const usersResolver: ResolveFn<boolean> = (route, state) => {
  const userService = inject(UserService);
  return userService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        userService.getAll();
      }
    }),
    first()
  );
};


// export class PostsResolver implements Resolve<boolean> {
//   constructor(private PostService: PostService) { }
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Observable<boolean> | Promise<boolean> {
//     return this.PostService.loaded$.pipe(
//       tap((loaded) => {
//         if (!loaded) {
//           this.PostService.getAll();
//         }
//       }),
//       first()
//     );
//   }
// }