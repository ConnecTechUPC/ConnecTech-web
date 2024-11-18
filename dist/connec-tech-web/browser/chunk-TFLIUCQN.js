import{a as D}from"./chunk-GZLWIIBG.js";import{a as Oe,b as ke}from"./chunk-7JOZ7P5N.js";import{A as ue,B as ge,C as fe,D as N,E as ve,F as be,G as _e,Q as Ce,R as xe,S as he,T as Me,U as Ee,V as ye,W as Pe,X as Se,a as oe,o as ie,p as re,q as ae,r as le,s as ce,t as me,u as I,v as C,w as T,x as se,y as pe,z as de}from"./chunk-TEY72Y22.js";import{c as ee,d as te,e as M,f as F,i as ne}from"./chunk-4KZNRDSC.js";import"./chunk-Q64FFBLU.js";import{Ab as n,Bb as b,Cb as h,Db as Y,Ea as H,Eb as J,Fb as K,Ha as l,Hb as u,Ib as X,Jb as _,Ya as f,aa as g,ab as m,bb as G,ea as d,eb as Q,fb as t,gb as e,hb as s,ib as W,jb as $,kc as k,lb as U,lc as w,ma as S,mc as Z,na as O,ob as p,oc as v,qb as x}from"./chunk-IJGEZCRI.js";var V=class r{authService=g(oe);router=g(M);constructor(){}logout(){this.authService.logout(),this.router.navigate(["/auth/login"])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-navbar-customer"]],standalone:!0,features:[u],decls:27,vars:0,consts:[[1,"navbar","navbar-expand-lg"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarHome","aria-controls","navbarHome","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarHome",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","/","routerLinkActive","active",1,"nav-link"],[1,"navbar-nav","ms-auto"],["routerLink","/auth/login","routerLinkActive","active",1,"nav-link","btn","btn-outline-light","px-3","me-2"],["mat-button","","color","warn",1,"nav-link",3,"click"]],template:function(i,o){i&1&&(t(0,"nav",0)(1,"div",1)(2,"a",2),n(3,"ConnecTech"),e(),t(4,"button",3),s(5,"span",4),e(),t(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),n(10,"Inicio"),e()(),t(11,"li",7)(12,"a",8),n(13,"Mis Eventos"),e()(),t(14,"li",7)(15,"a",8),n(16,"Networking"),e()(),t(17,"li",7)(18,"a",8),n(19,"Recursos"),e()()(),t(20,"ul",9)(21,"li",7)(22,"a",10),n(23,"Mi perfil"),e()(),t(24,"li",7)(25,"button",11),p("click",function(){return o.logout()}),n(26,"Cerrar Sesion"),e()()()()()())},dependencies:[F],styles:[".navbar[_ngcontent-%COMP%]{background-color:#fc0;box-shadow:0 2px 10px #0000004d}.navbar-brand[_ngcontent-%COMP%]{font-weight:700;color:#000;font-size:1.5rem;letter-spacing:.05rem}.navbar-nav[_ngcontent-%COMP%]{display:flex}.nav-item[_ngcontent-%COMP%]{margin-right:1rem}.nav-link[_ngcontent-%COMP%]{font-size:1.1rem;color:#000;transition:color .3s ease,background-color .3s ease}.nav-link[_ngcontent-%COMP%]:hover{background-color:#0000001a}.btn-outline-light[_ngcontent-%COMP%]{border-color:#000;color:#000}.btn-outline-light[_ngcontent-%COMP%]:hover{background-color:#0000001a;color:#000}.btn-primary[_ngcontent-%COMP%]{background-color:#f97316;border:none;color:#f8f9fa}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#f97316bf}.navbar-toggler[_ngcontent-%COMP%]{border-color:#0000001a}.navbar-toggler-icon[_ngcontent-%COMP%]{background-color:#000}"]})};var z=class r{static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-customer-layout"]],standalone:!0,features:[u],decls:4,vars:0,consts:[[1,"container"]],template:function(i,o){i&1&&(s(0,"app-navbar-customer"),t(1,"div",0),s(2,"router-outlet"),e(),s(3,"app-footer"))},dependencies:[V,ne,te],styles:[".container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}"]})};var Fe=r=>["/customer/catalog/event/details",r];function Ie(r,a){if(r&1&&(W(0),t(1,"mat-card",3)(2,"mat-card-header")(3,"mat-card-title"),n(4),e(),t(5,"mat-card-subtitle"),n(6),e()(),t(7,"mat-card-content")(8,"p",4),n(9),e(),t(10,"p",5),n(11),e(),t(12,"p",6),n(13),e()(),t(14,"mat-card-actions")(15,"button",7),n(16,"Ver Detalles"),e()()(),$()),r&2){let i=a.$implicit;l(4),b(i.name),l(2),b(i.ponente),l(3),b(i.name),l(2),h("Hora: ",i.hour,""),l(2),h("Ponente: ",i.ponente,""),l(2),m("routerLink",_(6,Fe,i.id))}}function Te(r,a){r&1&&(t(0,"p"),n(1,"No hay eventos disponibles"),e())}var q=class r{events=[];static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-event-card"]],inputs:{events:"events"},standalone:!0,features:[u],decls:3,vars:2,consts:[[1,"event-card-container"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"event-card"],[1,"event-name"],[1,"event-hour"],[1,"event-ponente"],["mat-button","","color","primary",3,"routerLink"]],template:function(i,o){i&1&&(t(0,"div",0),f(1,Ie,17,8,"ng-container",1)(2,Te,2,0,"p",2),e()),i&2&&(l(),m("ngForOf",o.events),l(),m("ngIf",o.events.length===0))},dependencies:[v,k,w,Se,xe,ye,Me,Pe,Ee,he,F],styles:[".event-card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:24px;justify-content:center;padding:20px}.event-card[_ngcontent-%COMP%]{width:280px;margin:12px;box-shadow:0 4px 10px #0000001a;border-radius:12px;background-color:#fff;transition:transform .3s ease,box-shadow .3s ease,opacity .3s ease;overflow:hidden;padding:16px;opacity:.95}.event-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 6px 18px #0003;opacity:1}.event-card-header[_ngcontent-%COMP%]{margin-bottom:12px}.event-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;color:#333;margin-bottom:4px}.event-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:#666}.event-name[_ngcontent-%COMP%], .event-hour[_ngcontent-%COMP%], .event-ponente[_ngcontent-%COMP%]{color:#444;font-size:1rem;margin:6px 0}.event-hour[_ngcontent-%COMP%]{font-weight:700;color:#008cba}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-top:12px}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:20px;padding:8px 16px;background-color:#f1c232}button[mat-button].primary[_ngcontent-%COMP%]{background-color:#008cba;color:red;border:none;transition:background-color .3s ease}button[mat-button].primary[_ngcontent-%COMP%]:hover{background-color:#007b9a}button[mat-button].accent[_ngcontent-%COMP%]{background-color:#f1c232;color:#fff;border:none;transition:background-color .3s ease}button[mat-button].accent[_ngcontent-%COMP%]:hover{background-color:#e1b229}"]})};var L=class r{events=[];filteredEvents=[];searchQuery="";eventService=g(D);ngOnInit(){this.loadEvents()}loadEvents(){this.events=this.eventService.getEvents(),this.filteredEvents=[...this.events]}filterEvents(){this.filteredEvents=this.events.filter(a=>a.name.toLowerCase().includes(this.searchQuery.toLowerCase())||a.ponente.toLowerCase().includes(this.searchQuery.toLowerCase()))}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-event-catalog"]],standalone:!0,features:[u],decls:6,vars:2,consts:[[1,"event-catalog-container"],[1,"search-box"],["type","text","placeholder","Buscar por t\xEDtulo o categor\xEDa",3,"ngModelChange","input","ngModel"],[3,"events"]],template:function(i,o){i&1&&(t(0,"div",0)(1,"h2"),n(2,"Cat\xE1logo de Eventos"),e(),t(3,"div",1)(4,"input",2),K("ngModelChange",function(R){return J(o.searchQuery,R)||(o.searchQuery=R),R}),p("input",function(){return o.filterEvents()}),e()(),s(5,"app-event-card",3),e()),i&2&&(l(4),Y("ngModel",o.searchQuery),l(),m("events",o.filteredEvents))},dependencies:[v,N,I,T,pe,q],styles:[".event-catalog-container[_ngcontent-%COMP%]{max-width:1200px;margin:auto;padding:16px}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#333;font-size:2rem}body[_ngcontent-%COMP%]{background-color:#f0f0f0}.search-box[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:10px;font-size:1rem;border:2px solid #ddd;border-radius:25px;outline:none;transition:box-shadow .3s ease-in-out,border-color .3s ease}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:0 4px 8px #007bff33;border-color:#007bff}.event-card[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:8px;padding:16px;box-shadow:0 2px 8px #0000001a;transition:box-shadow .3s ease;margin-bottom:20px;text-align:center}.event-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #00000026}.event-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 12px;margin-top:10px;border-radius:20px;font-size:.9rem;border:none;cursor:pointer;transition:background-color .3s ease}.button-details[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.button-details[_ngcontent-%COMP%]:hover{background-color:#0056b3}.button-add-to-cart[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;margin-left:8px}.button-add-to-cart[_ngcontent-%COMP%]:hover{background-color:#218838}"]})};function De(r,a){if(r&1){let i=U();t(0,"div",0)(1,"h2"),n(2),e(),t(3,"p")(4,"strong"),n(5,"Ponente:"),e(),n(6),e(),t(7,"p")(8,"strong"),n(9,"Hora:"),e(),n(10),e(),t(11,"p")(12,"strong"),n(13,"Ubicaci\xF3n:"),e(),n(14),e(),t(15,"button",1),p("click",function(){S(i);let c=x();return O(c.goBack())}),n(16," Regresar al Cat\xE1logo "),e(),t(17,"button",2),p("click",function(){S(i);let c=x();return O(c.inscPagar())}),n(18," Inscribirse y Pagar. "),e(),t(19,"button",2),p("click",function(){S(i);let c=x();return O(c.votar())}),n(20," Votar por el evento "),e()()}if(r&2){let i=x();l(2),b(i.event.name),l(4),h(" ",i.event.ponente,""),l(4),h(" ",i.event.hour,""),l(4),h(" ",i.event.location,"")}}function Ve(r,a){r&1&&(t(0,"div",0)(1,"p"),n(2,"Seleccione un evento para ver los detalles"),e()())}var j=class r{event=null;route=g(ee);eventService=g(D);router=g(M);ngOnInit(){let a=Number(this.route.snapshot.paramMap.get("id"));a&&(this.event=this.eventService.getEventID(a))}goBack(){this.router.navigate(["/customer/catalog"])}inscPagar(){this.router.navigate(["/customer/inscribe-form"])}votar(){this.router.navigate(["/customer/voting"])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-event-detail"]],standalone:!0,features:[u],decls:2,vars:1,consts:[[1,"event-detail"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(i,o){i&1&&f(0,De,21,4,"div",0)(1,Ve,3,0,"div",0),i&2&&Q(o.event?0:1)},dependencies:[v],styles:[".event-detail[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:20px;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 8px #0000001a;text-align:left}h2[_ngcontent-%COMP%]{color:#333;margin-bottom:10px}p[_ngcontent-%COMP%]{margin:8px 0;font-size:1rem}.event-detail[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:16px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 8px #0000001a}.event-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:10px}.event-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;margin:8px 0}button[_ngcontent-%COMP%]{border-radius:20px;padding:8px 16px;background-color:#f1c232}"]})};function ze(r,a){r&1&&(t(0,"mat-error"),n(1,"El nombre es requerido"),e())}function qe(r,a){r&1&&(t(0,"mat-error"),n(1,"El n\xFAmero de tarjeta es requerido"),e())}function Le(r,a){r&1&&(t(0,"mat-error"),n(1,"N\xFAmero de tarjeta inv\xE1lido"),e())}function je(r,a){r&1&&(t(0,"mat-error"),n(1,"La fecha de vencimiento es requerida"),e())}function Ae(r,a){r&1&&(t(0,"mat-error"),n(1,"Formato de fecha inv\xE1lido"),e())}function Be(r,a){r&1&&(t(0,"mat-error"),n(1,"El CVV es requerido"),e())}function Re(r,a){r&1&&(t(0,"mat-error"),n(1,"CVV inv\xE1lido"),e())}var A=class r{inscribeForm;fb=g(fe);snackBar=g(Oe);router=g(M);constructor(){this.inscribeForm=this.fb.group({cardName:["",[C.required]],cardNumber:["",[C.required,C.pattern("^[0-9]{16}$")]],expiryDate:["",[C.required,C.pattern("^(0[1-9]|1[0-2])/?([0-9]{2})$")]],cvv:["",[C.required,C.pattern("^[0-9]{3,4}$")]]})}controlHasError(a,i){return this.inscribeForm.controls[a].hasError(i)&&this.inscribeForm.controls[a].touched}showSnackBar(a){this.snackBar.open(a,"Cerrar",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center"})}onSubmit(){this.inscribeForm.valid?(console.log("Payment Info:",this.inscribeForm.value),this.showSnackBar("Pago realizado con \xE9xito"),this.router.navigate(["/success"])):this.showSnackBar("Formulario inv\xE1lido, por favor revisa los campos")}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-inscribe-form"]],standalone:!0,features:[u],decls:36,vars:8,consts:[[1,"welcome-message"],[1,"payment-form",3,"ngSubmit","formGroup"],[1,"form-field"],["appearance","fill",1,"full-width"],["matInput","","id","cardName","formControlName","cardName","type","text"],[4,"ngIf"],["matInput","","id","cardNumber","formControlName","cardNumber","type","text"],["matInput","","id","expiryDate","formControlName","expiryDate","type","text","placeholder","MM/AA"],["matInput","","id","cvv","formControlName","cvv","type","text"],[1,"submit-button"],["mat-raised-button","","color","primary","type","submit"]],template:function(i,o){i&1&&(t(0,"div",0)(1,"h1"),n(2,"\xA1Bienvenido a la Inscripci\xF3n!"),e(),t(3,"p"),n(4,"Por favor, complete los datos a continuaci\xF3n para realizar el pago y asegurar su inscripci\xF3n al evento."),e()(),t(5,"form",1),p("ngSubmit",function(){return o.onSubmit()}),t(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),n(9,"Nombre del Titular"),e(),s(10,"input",4),f(11,ze,2,0,"mat-error",5),e()(),t(12,"div",2)(13,"mat-form-field",3)(14,"mat-label"),n(15,"N\xFAmero de Tarjeta"),e(),s(16,"input",6),f(17,qe,2,0,"mat-error",5)(18,Le,2,0,"mat-error",5),e()(),t(19,"div",2)(20,"mat-form-field",3)(21,"mat-label"),n(22,"Fecha de Vencimiento"),e(),s(23,"input",7),f(24,je,2,0,"mat-error",5)(25,Ae,2,0,"mat-error",5),e()(),t(26,"div",2)(27,"mat-form-field",3)(28,"mat-label"),n(29,"CVV"),e(),s(30,"input",8),f(31,Be,2,0,"mat-error",5)(32,Re,2,0,"mat-error",5),e()(),t(33,"div",9)(34,"button",10),n(35,"Pagar"),e()()()),i&2&&(l(5),m("formGroup",o.inscribeForm),l(6),m("ngIf",o.controlHasError("cardName","required")),l(6),m("ngIf",o.controlHasError("cardNumber","required")),l(),m("ngIf",o.controlHasError("cardNumber","pattern")),l(6),m("ngIf",o.controlHasError("expiryDate","required")),l(),m("ngIf",o.controlHasError("expiryDate","pattern")),l(6),m("ngIf",o.controlHasError("cvv","required")),l(),m("ngIf",o.controlHasError("cvv","pattern")))},dependencies:[v,w,ve,de,I,T,se,ue,ge,me,ce,ae,le,_e,be,re,ie,ke,Ce],styles:[".welcome-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#005dfd;font-size:2.5rem;margin-bottom:15px;font-weight:700;text-align:center}.welcome-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555;font-size:1.2rem;margin-bottom:20px;line-height:1.6;text-align:center}.payment-form[_ngcontent-%COMP%]{max-width:500px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 4px 10px #0000001a}.form-field[_ngcontent-%COMP%]{margin-bottom:16px}.full-width[_ngcontent-%COMP%]{width:100%}.submit-button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px}mat-form-field[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%]{border-radius:20px;padding:8px 16px;background-color:#f1c232}"]})};var P=r=>({color:r}),He=()=>[];function Ge(r,a){r&1&&(t(0,"span"),n(1,"\u2605"),e())}function Qe(r,a){if(r&1&&(t(0,"div",28)(1,"p"),n(2),e(),t(3,"div",29),n(4),e(),t(5,"div",30),f(6,Ge,2,0,"span",31),e()()),r&2){let i=a.$implicit,o=a.index,c=x();G("active",o===c.currentIndex),l(2),b(i.texto),l(2),b(i.autor),l(2),m("ngForOf",X(5,He).constructor(i.calificacion))}}var B=class r{calificacion=0;comentario="";currentIndex=0;testimonios=[{texto:"Excelente evento, aprend\xED mucho sobre desarrollo web.",autor:"Juan P\xE9rez",calificacion:5},{texto:"Muy buen taller, los ponentes fueron claros y atentos.",autor:"Mar\xEDa Gonz\xE1lez",calificacion:4},{texto:"Me gust\xF3 el taller, aunque hubiera preferido m\xE1s pr\xE1ctica.",autor:"Luis Mart\xEDnez",calificacion:3}];nextSlide(){this.currentIndex=(this.currentIndex+1)%this.testimonios.length}prevSlide(){this.currentIndex=(this.currentIndex-1+this.testimonios.length)%this.testimonios.length}cambiarColor(a){this.calificacion=a}seleccionarCalificacion(a){this.calificacion=a}enviarComentarios(){if(this.calificacion>0&&this.comentario){console.log("Calificaci\xF3n:",this.calificacion),console.log("Comentario:",this.comentario);let a=document.getElementById("mensaje");a&&(a.style.display="block"),this.comentario="",this.calificacion=0}else alert("Por favor, selecciona una calificaci\xF3n y escribe un comentario.")}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=d({type:r,selectors:[["app-voting"]],standalone:!0,features:[u],decls:68,vars:16,consts:[["href",H`https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap`,"rel","stylesheet"],[1,"container"],[1,"event-title"],[1,"event-description-container"],[1,"event-description"],["src","icons/taller.jpg","alt","Imagen del evento",1,"event-image"],[1,"speakers-container"],[1,"speaker"],["src","icons/ponente1.jpeg","alt","Ponente 1",1,"speaker-image"],[1,"speaker-name"],[1,"speaker-specialty"],["src","icons/ponente2.jpeg","alt","Ponente 2",1,"speaker-image"],[1,"agenda-list"],["id","calificacion",1,"estrellas"],["data-value","1",1,"estrella",3,"mouseover","mouseout","click","ngStyle"],["data-value","2",1,"estrella",3,"mouseover","mouseout","click","ngStyle"],["data-value","3",1,"estrella",3,"mouseover","mouseout","click","ngStyle"],["data-value","4",1,"estrella",3,"mouseover","mouseout","click","ngStyle"],["data-value","5",1,"estrella",3,"mouseover","mouseout","click","ngStyle"],[1,"comment-container"],["placeholder","Describa su experiencia en este evento, qu\xE9 cosas se pueden mejorar o qu\xE9 fue lo que m\xE1s le gust\xF3."],[3,"click"],["id","mensaje",2,"display","none"],[1,"testimonials-section"],[1,"testimonial-carousel"],[1,"prev-btn",3,"click"],["class","testimonial-slide",3,"active",4,"ngFor","ngForOf"],[1,"next-btn",3,"click"],[1,"testimonial-slide"],[1,"author"],[1,"rating"],[4,"ngFor","ngForOf"]],template:function(i,o){i&1&&(s(0,"link",0),t(1,"div",1)(2,"h1",2),n(3,"Taller Front-end Developer"),e(),t(4,"div",3)(5,"p",4),n(6," \xA1Descubre el poder del desarrollo web con nuestro Taller de Front-End! "),s(7,"br"),n(8," Lo que nos diferencia es nuestro enfoque pr\xE1ctico: no solo aprender\xE1s teor\xEDa, sino que pondr\xE1s manos a la obra con proyectos reales que te preparar\xE1n para el mundo laboral. Adem\xE1s, contar\xE1s con el apoyo de instructores expertos, siempre listos para guiarte y responder tus dudas. "),s(9,"br"),n(10," Al finalizar el taller, no solo habr\xE1s creado tu propio portafolio de proyectos, sino que tambi\xE9n tendr\xE1s la confianza y las habilidades para afrontar cualquier desaf\xEDo en el \xE1mbito del desarrollo web. "),s(11,"br"),n(12," \xA1No te pierdas esta oportunidad de impulsar tu carrera y convertirte en un desarrollador front-end altamente demandado!"),e(),s(13,"img",5),e(),t(14,"h2"),n(15,"Ponentes"),e(),t(16,"div",6)(17,"div",7),s(18,"img",8),t(19,"p",9),n(20,"Alejandra Chavez"),e(),t(21,"p",10),n(22,"Ingeieria de Sistemas"),e()(),t(23,"div",7),s(24,"img",11),t(25,"p",9),n(26,"Edgardo Alvarado"),e(),t(27,"p",10),n(28,"Ciencias de la Computacion"),e()()(),t(29,"h2"),n(30,"Agenda"),e(),t(31,"ul",12)(32,"li"),n(33,"10:00 - 11:00: Lorem ipsum dolor sit amet, consectetur."),e(),t(34,"li"),n(35,"11:00 - 12:00: Excepteur sint occaecat cupidatat non proident."),e(),t(36,"li"),n(37,"12:00 - 1:00: sunt in culpa qui officia deserunt mollit anim id."),e()(),t(38,"h2"),n(39,"Calificaci\xF3n"),e(),t(40,"div",13)(41,"span",14),p("mouseover",function(){return o.cambiarColor(1)})("mouseout",function(){return o.cambiarColor(o.calificacion)})("click",function(){return o.seleccionarCalificacion(1)}),n(42,"\u2605"),e(),t(43,"span",15),p("mouseover",function(){return o.cambiarColor(2)})("mouseout",function(){return o.cambiarColor(o.calificacion)})("click",function(){return o.seleccionarCalificacion(2)}),n(44,"\u2605"),e(),t(45,"span",16),p("mouseover",function(){return o.cambiarColor(3)})("mouseout",function(){return o.cambiarColor(o.calificacion)})("click",function(){return o.seleccionarCalificacion(3)}),n(46,"\u2605"),e(),t(47,"span",17),p("mouseover",function(){return o.cambiarColor(4)})("mouseout",function(){return o.cambiarColor(o.calificacion)})("click",function(){return o.seleccionarCalificacion(4)}),n(48,"\u2605"),e(),t(49,"span",18),p("mouseover",function(){return o.cambiarColor(5)})("mouseout",function(){return o.cambiarColor(o.calificacion)})("click",function(){return o.seleccionarCalificacion(5)}),n(50,"\u2605"),e()(),t(51,"div",19)(52,"h2"),n(53,"Comentarios"),e(),s(54,"textarea",20),t(55,"button",21),p("click",function(){return o.enviarComentarios()}),n(56,"Enviar"),e(),t(57,"div",22),n(58,"Enviado con \xE9xito"),e()(),t(59,"div",23)(60,"h2"),n(61,"Testimonios"),e(),t(62,"div",24)(63,"button",25),p("click",function(){return o.prevSlide()}),n(64,"\u276E"),e(),f(65,Qe,7,6,"div",26),t(66,"button",27),p("click",function(){return o.nextSlide()}),n(67,"\u276F"),e()()()()),i&2&&(l(41),m("ngStyle",_(6,P,o.calificacion>=1?"gold":"gray")),l(2),m("ngStyle",_(8,P,o.calificacion>=2?"gold":"gray")),l(2),m("ngStyle",_(10,P,o.calificacion>=3?"gold":"gray")),l(2),m("ngStyle",_(12,P,o.calificacion>=4?"gold":"gray")),l(2),m("ngStyle",_(14,P,o.calificacion>=5?"gold":"gray")),l(16),m("ngForOf",o.testimonios))},dependencies:[v,k,Z,N],styles:['h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:20px;margin-top:50px;font-family:Inter,sans-serif;font-weight:700}h2[_ngcontent-%COMP%]{font-size:1.8em;margin-bottom:25px;margin-top:25px;font-family:Inter,sans-serif;color:#007bff}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;width:100%}.event-description-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:20px 0}.event-description[_ngcontent-%COMP%]{max-width:50%;margin-right:20px}.event-image[_ngcontent-%COMP%]{width:400px;height:auto}.speakers-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:20px 0}.speaker[_ngcontent-%COMP%]{text-align:center;margin:0 100px}.speaker-image[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;object-fit:cover}.speaker-name[_ngcontent-%COMP%]{margin:10px;font-weight:700}.speaker-specialty[_ngcontent-%COMP%]{font-style:italic}.estrellas[_ngcontent-%COMP%]   .estrella[_ngcontent-%COMP%]{font-size:60px}.agenda-list[_ngcontent-%COMP%]{list-style:none;padding:0;text-align:left;width:60%;margin:0 auto;font-size:1em}.agenda-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;padding-left:20px;position:relative}.agenda-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";color:#007bff;font-weight:700;display:inline-block;width:1em;margin-left:-1em}.comment-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:20px;width:100%}.comment-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8em;color:#007bff;margin-bottom:10px}.comment-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:90%;max-width:600px;min-height:150px;padding:10px;border:1px solid #ddd;border-radius:8px;font-size:1em;color:#666;resize:none;margin-bottom:20px}.comment-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;font-size:1.1em;padding:10px 40px;border:none;border-radius:25px;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:background-color .3s ease;margin-bottom:30px}.comment-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.testimonials-section[_ngcontent-%COMP%]{text-align:center;padding:20px;margin-top:20px;background-color:#f9f9f9;border-radius:10px;width:120%;box-sizing:border-box}.testimonial-carousel[_ngcontent-%COMP%]{display:flex;position:relative;width:60%;margin:0 auto}.testimonial-slide[_ngcontent-%COMP%]{flex:0 0 100%;display:none;min-width:100%;opacity:0;transition:opacity .5s ease;padding:10px}.testimonial-slide.active[_ngcontent-%COMP%]{display:block;opacity:1}.author[_ngcontent-%COMP%]{font-weight:700;color:#333}.rating[_ngcontent-%COMP%]{color:gold;font-size:18px}.prev-btn[_ngcontent-%COMP%], .next-btn[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px;border-radius:50%;cursor:pointer;font-size:18px;position:absolute;top:50%;transform:translateY(-50%);transition:background-color .3s}.prev-btn[_ngcontent-%COMP%]:hover, .next-btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}.prev-btn[_ngcontent-%COMP%]{left:-50px}.next-btn[_ngcontent-%COMP%]{right:-50px}']})};var Wt=[{path:"",component:z,children:[{path:"catalog",component:L},{path:"catalog/event/details/:id",component:j},{path:"inscribe-form",component:A},{path:"voting",component:B}]}];export{Wt as customerRoutes};