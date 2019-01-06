import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconModule, MatBadgeModule, MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Routing for the current module
import { AppRoutingModule } from './app-routing.module';

// Components of the current Module
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';

// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor.service';

@NgModule({
	declarations: [ AppComponent, LoginComponent, RegisterComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		SweetAlert2Module.forRoot({}),
		JwtModule.forRoot({
			config: {
				tokenGetter: () => {
					return localStorage.getItem('currentUser');
				}
			}
		}),

		BrowserAnimationsModule,
		MatInputModule,
		MatBadgeModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatCardModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
