import { NavBarComponent } from "./footer/navbar/nav-bar.component";
import { HeaderComponent } from "./footer/header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        HeaderComponent,
        NavBarComponent,
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        NavBarComponent,
        FooterComponent
    ]
    
})

export class SharedModule{
    
}