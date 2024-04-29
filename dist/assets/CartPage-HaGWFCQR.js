import{_ as m,o as _,a as p,b as e,t as l,p as $,j as C,l as S,u as f,f as o,d as c,w as r,e as u,m as k,n as B,h as Q,F as y,r as w,g as h,q as x,i as N,T as D,s as M,v as q,k as I,B as T}from"./index-kUs9pPU6.js";import{_ as V}from"./ShopLayout-7Ed2SCTz.js";const H=t=>($("data-v-eb4ad7c6"),t=t(),C(),t),O={class:"cart__item"},j=["href"],F=["src"],P={class:"item__info"},E=["href"],L={class:"item__price"},W={class:"item__count"},z=H(()=>e("img",{alt:"",src:S},null,-1)),A=[z],G={__name:"CartItem",props:{product:{type:Object,required:!0}},emits:["deleteItem","incrementQuantity","decrementQuantity"],setup(t){return(s,n)=>(_(),p("div",O,[e("a",{href:`/shop/item/${t.product.id}`},[e("img",{src:t.product.images[0],alt:"",class:"item__img"},null,8,F)],8,j),e("div",P,[e("a",{href:`/shop/item/${t.product.id}`,class:"item__title"},l(t.product.name),9,E),e("span",L,l(t.product.price)+" ₽",1),e("div",W,[e("button",{class:"decrement",onClick:n[0]||(n[0]=a=>s.$emit("decrementQuantity",t.product.id))}," - "),e("span",null,l(t.product.quantity),1),e("button",{class:"increment",onClick:n[1]||(n[1]=a=>s.$emit("incrementQuantity",t.product.id))}," + ")])]),e("button",{class:"item__delete",onClick:n[2]||(n[2]=a=>s.$emit("deleteItem",t.product.id))},A)]))}},J=m(G,[["__scopeId","data-v-eb4ad7c6"]]),g=t=>($("data-v-a936aaf5"),t=t(),C(),t),K={class:"cart__summary"},R={class:"info"},U=g(()=>e("span",{class:"summ"},[u(" Итоги: "),e("br")],-1)),X={class:"price"},Y=g(()=>e("input",{class:"phone",name:"phone",placeholder:"Телефон или любой удобный мессенджер",type:"text"},null,-1)),Z=g(()=>e("span",{class:"disclaimer"}," *Цена указана без учёта доставки. Наиболее удобный способ доставки будет обсуждаться с покупателем. ",-1)),tt={__name:"CartSummary",setup(t){const s=f();return(n,a)=>(_(),p("div",K,[e("div",R,[e("div",null,[U,e("span",X,l(o(s).cart.reduce((i,d)=>i+d.price*d.quantity,0))+" ₽ ",1)]),Y]),c(B,{"base-state":"gradient",onClick:k(o(s).sendShopContacts,["prevent"])},{default:r(()=>[u(" Оформить заказ ")]),_:1},8,["onClick"]),Z]))}},et=m(tt,[["__scopeId","data-v-a936aaf5"]]),st={class:"cart__wrapper"},at={class:"cart__list"},nt={__name:"CartContent",setup(t){const s=f(),n=a=>{const i=["товар","товара","товаров"];a=Math.abs(a)%100;const d=a%10;return a>10&&a<20?i[2]:d>1&&d<5?i[1]:d===1?i[0]:i[2]};return(a,i)=>{const d=Q("SectionHeader");return _(),p(y,null,[c(d,null,{default:r(()=>[u(l(o(s).cart.length)+" "+l(n(o(s).cart.length)),1)]),_:1}),e("div",st,[e("div",at,[(_(!0),p(y,null,w(o(s).cart,v=>(_(),h(J,{onDeleteItem:o(s).deleteCartItem,onDecrementQuantity:o(s).decrementQuantity,onIncrementQuantity:o(s).incrementQuantity,product:v,key:v.id},null,8,["onDeleteItem","onDecrementQuantity","onIncrementQuantity","product"]))),128))]),c(et)])],64)}}},ot=m(nt,[["__scopeId","data-v-471c30fd"]]),b=t=>($("data-v-8dce4b2e"),t=t(),C(),t),ct=b(()=>e("span",{class:"modal__header"},"Спасибо за Ваш заказ!",-1)),rt=b(()=>e("br",null,null,-1)),it={__name:"ShopNotificationModal",setup(t){const s=f();return(n,a)=>(_(),h(M,{to:"#app"},[c(D,{name:"modal"},{default:r(()=>[o(s).shopNotificationOpen?(_(),h(x,{key:0,"background-image":"/svg/shop-notification.svg","modal-offset":"margin-top: -150px",onClose:a[0]||(a[0]=i=>o(s).shopNotificationOpen=!1)},{"modal-header":r(()=>[ct]),"modal-content":r(()=>[u(" В ближайшее время с Вами "),rt,u(" свяжутся наши специалисты ")]),_:1},8,["background-image"])):N("",!0)]),_:1})]))}},dt=m(it,[["__scopeId","data-v-8dce4b2e"]]),_t={__name:"CartPage",setup(t){f();const s=[];return s.push({name:"Магазин",url:"/shop"}),s.push({name:"Корзина",url:"/shop/cart"}),(n,a)=>(_(),h(V,null,{default:r(()=>[c(I,null,{default:r(()=>[c(q,{links:s,class:"Breadcrumbs"})]),_:1}),c(T,{fullBright:""},{default:r(()=>[u("Корзина")]),_:1}),c(I,null,{default:r(()=>[c(ot),c(dt)]),_:1})]),_:1}))}},mt=m(_t,[["__scopeId","data-v-771cabec"]]);export{mt as default};
