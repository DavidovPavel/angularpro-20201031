 

{ provide: UserService, useExisting: AdminService} 


{ provide: Validators, useClass: MySuperValidator1, multi: true} 
{ provide: Validators, useClass: MySuperValidator2, multi: true} 
{ provide: Validators, useClass: MySuperValidator3, multi: true} 


constructor(userService: UserService, Validators: Validators) {
    userService.deleteAll()

    Validators => [Validator1, Validator2 ....]
}