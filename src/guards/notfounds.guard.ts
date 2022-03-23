import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { RoutesService } from "src/services/static/Routes.service";

export class NotFoundsGuard implements CanActivate, CanDeactivate<void> {

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		
		RoutesService.addNotFound();
		return true;
	}

	canDeactivate(
		component:void,
	currentRoute: ActivatedRouteSnapshot,
	currentState: RouterStateSnapshot,
	nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
	  RoutesService.reset()
	  return true;
  }
}