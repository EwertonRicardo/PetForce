import{a as ae,b as me}from"./chunk-KWLC7VUE.js";import{b as X,d as f,e as J,f as Z,g as H,h as K,i as W,j as Y,k as $,l as ee,m as te,n as ie,o as oe,p as ne,q as re}from"./chunk-V7JE3Z4Q.js";import{a as V,b as P,c as q,g as j,h as B}from"./chunk-YLHJMQPW.js";import{F as L,H as D,I as G,K as Q,L as R}from"./chunk-SENW2RAY.js";import{l as O}from"./chunk-6G7C5ZLF.js";import{c as z}from"./chunk-LZ4UJJKU.js";import{d as T,e as N}from"./chunk-LIDOF6M5.js";import{$a as u,Ab as C,Ka as o,La as x,bb as a,fb as l,gb as i,hb as t,ib as p,kb as b,ma as F,mb as _,nb as E,rb as U,sb as M,tb as A,ua as h,ub as y,va as v,vb as n,xb as k,zb as I}from"./chunk-E4NF4TXV.js";var pe=["signUpNgForm"],de=()=>["/sign-in"],le=()=>["./"];function ce(e,r){if(e&1&&(i(0,"fuse-alert",8),n(1),t()),e&2){let w=E();a("appearance","outline")("showIcon",!1)("type",w.alert.type)("@shake",w.alert.type==="error"),o(),k(" ",w.alert.message," ")}}function ue(e,r){e&1&&(i(0,"mat-error"),n(1," Campo obrigat\xF3rio "),t())}function fe(e,r){e&1&&(i(0,"mat-error"),n(1," Por favor, insira um endere\xE7o de e-mail v\xE1lido "),t())}function ge(e,r){e&1&&(i(0,"mat-error"),n(1," Campo obrigat\xF3rio "),t())}function he(e,r){e&1&&(i(0,"mat-error"),n(1," Por favor, insira um CPF v\xE1lido "),t())}function ve(e,r){e&1&&p(0,"mat-icon",14),e&2&&a("svgIcon","heroicons_solid:eye")}function xe(e,r){e&1&&p(0,"mat-icon",14),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function _e(e,r){e&1&&p(0,"mat-icon",14),e&2&&a("svgIcon","heroicons_solid:eye")}function ye(e,r){e&1&&p(0,"mat-icon",14),e&2&&a("svgIcon","heroicons_solid:eye-slash")}function Ce(e,r){e&1&&(i(0,"span",18),n(1," Crie sua conta gratuita "),t())}function we(e,r){e&1&&p(0,"mat-progress-spinner",19),e&2&&a("diameter",24)("mode","indeterminate")}var se=(()=>{let r=class r{constructor(g,d,m){this._authService=g,this._formBuilder=d,this._router=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({email:["",[f.required,f.email]],cpf:["",f.required],password:["",f.required],confirmPassword:["",f.required],agreements:["",f.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(g=>{this._router.navigateByUrl("/confirmation-required")},g=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}};r.\u0275fac=function(d){return new(d||r)(x(z),x(Y),x(T))},r.\u0275cmp=F({type:r,selectors:[["auth-sign-up"]],viewQuery:function(d,m){if(d&1&&U(pe,5),d&2){let s;M(s=A())&&(m.signUpNgForm=s.first)}},standalone:!0,features:[I],decls:66,vars:26,consts:[["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center","md:p-8"],[1,"flex","overflow-hidden","sm:bg-card","sm:rounded-2xl","sm:shadow","md:w-full","md:max-w-6xl"],[1,"w-full","px-4","py-8","sm:w-auto","sm:p-12","md:p-16"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","items-baseline","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"-mb-4","mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"mt-1.5","inline-flex","w-full","items-end"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full",3,"click","color","disabled"],[1,"text-white"],[3,"diameter","mode"],[1,"relative","hidden","h-full","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["src","https://media.istockphoto.com/id/1142412866/es/foto/cachorro-de-perro-en-el-jard%C3%ADn.jpg?s=612x612&w=0&k=20&c=1EeiTDe6zawjRckpXM-P6LeXV2m1x7fZOGxOAdbevQ0=","alt","imagem de fundo",1,"absolute","top-0","h-full","w-full","object-cover"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-100"]],template:function(d,m){if(d&1){let s=b();i(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),n(5," Cadastre-se "),t(),i(6,"div",6)(7,"div"),n(8,"J\xE1 tem uma conta?"),t(),i(9,"a",7),n(10,"Entrar "),t()(),u(11,ce,2,5,"fuse-alert",8),i(12,"form",9)(13,"mat-form-field",10)(14,"mat-label"),n(15,"Email"),t(),p(16,"input",11),u(17,ue,2,0,"mat-error")(18,fe,2,0,"mat-error"),t(),i(19,"mat-form-field",10)(20,"mat-label"),n(21,"CPF"),t(),p(22,"input",11),u(23,ge,2,0,"mat-error")(24,he,2,0,"mat-error"),t(),i(25,"mat-form-field",10)(26,"mat-label"),n(27,"Senha"),t(),p(28,"input",12,0),i(30,"button",13),_("click",function(){h(s);let c=y(29);return v(c.type==="password"?c.type="text":c.type="password")}),u(31,ve,1,1,"mat-icon",14)(32,xe,1,1,"mat-icon",14),t(),i(33,"mat-error"),n(34," Campo obrigat\xF3rio "),t()(),i(35,"mat-form-field",10)(36,"mat-label"),n(37,"Confirme a senha"),t(),p(38,"input",12,0),i(40,"button",13),_("click",function(){h(s);let c=y(29);return v(c.type==="password"?c.type="text":c.type="password")}),u(41,_e,1,1,"mat-icon",14)(42,ye,1,1,"mat-icon",14),t(),i(43,"mat-error"),n(44," Campo obrigat\xF3rio "),t()(),i(45,"div",15)(46,"mat-checkbox",16)(47,"span"),n(48,"Concordo com os"),t(),i(49,"a",7),n(50,"Termos "),t(),i(51,"span"),n(52,"e"),t(),i(53,"a",7),n(54,"Pol\xEDtica de Privacidade "),t()()(),i(55,"button",17),_("click",function(){return h(s),v(m.signUp())}),u(56,Ce,2,0,"span",18)(57,we,1,2,"mat-progress-spinner",19),t()()()(),i(58,"div",20),p(59,"img",21),i(60,"div",22)(61,"div",23)(62,"div"),n(63,"Bem-vindo"),t()(),i(64,"div",24),n(65," Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iure odio expedita cupiditate. Possimus perspiciatis nisi delectus magni totam eius ipsa quaerat similique? Vel, aperiam iure molestiae reprehenderit ducimus porro! "),t()()()()()}if(d&2){let s=y(29);o(9),a("routerLink",C(23,de)),o(2),l(m.showAlert?11:-1),o(),a("formGroup",m.signUpForm),o(4),a("formControlName","email"),o(),l(m.signUpForm.get("email").hasError("required")?17:-1),o(),l(m.signUpForm.get("email").hasError("email")?18:-1),o(4),a("formControlName","cpf"),o(),l(m.signUpForm.get("cpf").hasError("required")?23:-1),o(),l(m.signUpForm.get("cpf").hasError("cpf")?24:-1),o(4),a("formControlName","password"),o(3),l(s.type==="password"?31:-1),o(),l(s.type==="text"?32:-1),o(6),a("formControlName","confirmPassword"),o(3),l(s.type==="password"?41:-1),o(),l(s.type==="text"?42:-1),o(4),a("color","primary")("formControlName","agreements"),o(3),a("routerLink",C(24,le)),o(4),a("routerLink",C(25,le)),o(2),a("color","primary")("disabled",m.signUpForm.disabled),o(),l(m.signUpForm.disabled?-1:56),o(),l(m.signUpForm.disabled?57:-1)}},dependencies:[N,re,$,H,X,J,Z,ee,K,W,B,j,V,P,q,ie,te,G,L,D,R,Q,me,ae,ne,oe],encapsulation:2,data:{animation:O}});let e=r;return e})();var Oe=[{path:"",component:se}];export{Oe as default};
