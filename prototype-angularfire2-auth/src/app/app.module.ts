import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Root
import { AppComponent } from './app.component';

// Feature Modules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Routes
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    DashboardModule,
    routes,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
