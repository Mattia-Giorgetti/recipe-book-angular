import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { parseTemplate } from "@angular/compiler";

@NgModule({
  declarations:[
    AuthComponent
  ],
  imports: [
    FormsModule,
    SharedModule,

    // se si hanno poche rotte si possono importare direttamente qui senza file a parte
    RouterModule.forChild(
      [{ path: '', component: AuthComponent }]
    )
  ],
  exports: []
})
export class AuthModule {}
