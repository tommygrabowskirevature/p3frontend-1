// Imported modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// User created components
import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { EditDetailsComponent } from './components/profile/edit-details/edit-details.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditPhotoComponent } from './components/profile/edit-photo/edit-photo.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';
// Pipes
import { FilterPipe } from './components/search-bar/services/filter.pipe';
// Services
import { ProfileService } from './components/profile/services/profile.service';
import { SearchBarService } from './components/search-bar/services/search-bar.service';
import { FollowerService } from './components/follow-button/services/follower.service';

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    ProfileComponent,
    EditDetailsComponent,
    EditPhotoComponent,
    SearchBarComponent,
    FollowButtonComponent,
    FilterPipe,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProfileService,
    SearchBarService,
    FollowerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
