import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SwiperModule} from "swiper/angular";
import { StartViewComponent } from './start-view/start-view.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'start',
	},
	{
		path: 'start',
		component: StartViewComponent,
	},
	{
		path:'locatedHotels',
		component: HotelViewComponent,
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes), SwiperModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
