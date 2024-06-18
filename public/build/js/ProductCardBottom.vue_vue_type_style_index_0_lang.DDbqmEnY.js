import{r as m,Q as w,m as V,x as f,o as e,c as o,a as s,t as c,F as _,q as b,j as v,d as k,b as j,w as S,u as C,i as T,n as u,f as I,e as D,v as F,D as O}from"./app.BQx0zvW2.js";const R={class:"product-card-title"},z={class:"row product-card-top-full"},J={class:"product-card-top-right"},L={class:"product-images-gallery__images"},M={key:0,style:{display:"grid","grid-template-columns":"1f"}},P=["src"],q={class:"product-card-top__images"},A=["src"],E={class:"product-card-top-left"},Q={class:"product-card-top__specs"},Y={class:"product-card-top__specs__content"},x=s("div",{class:"product-card-top__specs__manufacturer"},[s("img",{src:"",alt:""})],-1),G={class:"product-card-top__stat"},H=s("span",{class:"ui-checkbox"},[s("span",{class:"ui-checkbox__box"}),s("span",null,"Сравнить"),s("input",{type:"checkbox",name:"",id:"",class:"ui-checkbox__input"})],-1),K={class:"star-rating"},U={class:"product-card-top__buy"},W={key:0,class:"product-buy product-buy_one-line"},X={class:"product-buy__price-wrap"},Z={class:"product-buy__price"},ss={key:0,class:"product-buy__prev"},ts={key:1,class:"button-ui buy-btn btn"},es={key:1,class:"product-buy product-buy_one-line product-buy_one-line__load"},os=s("div",null,null,-1),Gs={__name:"ProductCardTop",setup(N){const r=m(!1),h=m(!1),n=m(!1),y=w().props.product.reviews_avg_grade,l=new FormData;l.append("product_id",w().props.product.id);const a=t=>{$(".product-images-slider__img").attr("src",t.target.src)},p=()=>{f.post(route("addToCart"),l).then(function(t){h.value=!0})},i=()=>{n.value==!0?f.post(route("removeFromFavorite"),l).then(function(t){n.value=!1}):f.post(route("addToFavorite"),l).then(function(t){n.value=!0})};return V(()=>{let t=f.post(route("checkCart"),l).then(function(d){d.data.message=="isset"&&(h.value=!0)});f.post(route("checkFavorite"),l).then(function(d){d.data.message=="isset"&&(n.value=!0)})&&t&&(r.value=!0)}),(t,g)=>(e(),o(_,null,[s("h1",R,c(t.$page.props.product.name),1),s("div",z,[s("div",J,[s("div",L,[t.$page.props.product.img?(e(),o("ul",M,[(e(!0),o(_,null,b(JSON.parse(t.$page.props.product.img),(d,B)=>(e(),o("li",{class:"product-images-gallery__pic mb-2",key:B,onClick:a},[s("img",{loading:"lazy",src:"/storage/src/"+d,class:"product-images-gallery__img",alt:""},null,8,P)]))),128))])):v("",!0)]),s("div",q,[s("img",{loading:"lazy",src:t.$page.props.product.img?"/storage/src/"+JSON.parse(t.$page.props.product.img)[0]:"/storage/src/row/no-image.png",class:"product-images-slider__img",alt:""},null,8,A)])]),s("div",E,[s("div",Q,[s("div",Y,[k(c(t.$page.props.product.content)+" ",1),j(C(T),{href:"/product/"+t.$page.props.product.slug+"/Characteristic"},{default:S(()=>[k("Подробнее")]),_:1},8,["href"])]),x]),s("div",G,[H,s("div",K,[(e(),o(_,null,b(5,d=>s("span",{key:d,class:u({filled:d<=C(y)})},"★",2)),64))])]),s("div",U,[r.value?(e(),o("div",W,[s("div",X,[s("div",Z,[s("span",{class:u(t.$page.props.product.discount>0?"discount":"")},c((1-t.$page.props.product.discount/100)*t.$page.props.product.price),3),t.$page.props.product.discount>0?(e(),o("span",ss,c(t.$page.props.product.price),1)):v("",!0)])]),s("button",{class:"button-ui wishlist-btn",onClick:g[0]||(g[0]=d=>i())},[s("i",{class:u([n.value?"fa-solid":"fa-regular","fa-heart"])},null,2)]),t.$page.props.product.count>0?(e(),o(_,{key:0},[h.value?(e(),I(C(T),{key:0,href:t.route("cart"),class:"button-ui buy-btn btn",style:{}},{default:S(()=>[k(" В корзину ")]),_:1},8,["href"])):(e(),o("button",{key:1,onClick:p,class:"button-ui buy-btn btn btn-primary"}," Купить "))],64)):(e(),o("button",ts," Уведомить "))])):(e(),o("div",es))]),os])])],64))}},is={class:"product-card-tabs__list"},as={class:"product-card-tabs__contents"},cs={class:"product-card-description",id:"Description"},rs=s("h3",{class:"product-card-description__title"}," Описание ",-1),ns={class:"product-card-characteristic",id:"Characteristic"},ds=s("h3",{class:"product-card-characteristic__title"}," Характеристика ",-1),ls=s("span",null," Тип ",-1),ps=s("span",null," Производитель ",-1),_s={key:0},us={class:"product-card-reviews",id:"Reviews"},hs={class:"d-flex justify-content-between mb-3 pb-2 ow-opinions__item"},vs=s("div",null,[s("h3",{class:"product-card-reviews__title"}," Отзывы ")],-1),gs={class:"ow-opinion ow-opinions__item"},fs={class:"ow-opinion__header"},ms={class:"ow-opinion__header-top"},bs={class:"ow-opinion__header-left"},ws={class:"profile-info"},$s={class:"profile-info__user"},ys={class:"profile-info__avatar-wrapper"},ks={class:"profile-info__avatar-wrapper"},Cs={class:"profile-info__avatar"},Ds=["src"],Fs={class:"profile-info__user-data"},Ss={class:"profile-info__name"},Ts={class:"profile-info__activity"},Ns={class:"ow-opinion__date-site"},Bs={class:"ow-opinion__header-right"},Vs={class:"ow-opinion__date-site"},js={class:"star-rating"},Is={class:"ow-opinion__texts"},Os=s("div",{class:"ow-opinion__text-title"},"Достоинства",-1),Rs={class:"ow-opinion__text-desc"},zs={class:"ow-opinion__texts"},Js=s("div",{class:"ow-opinion__text-title"},"Недостатки",-1),Ls={class:"ow-opinion__text-desc"},Ms={key:0,class:"ow-opinion__texts"},Ps=s("div",{class:"ow-opinion__text-title"},"Комментарий",-1),qs={class:"ow-opinion__text-desc"},As={key:1},Es=s("h5",null,"Отзывы отсутствуют",-1),Qs=[Es],Ys=s("p",null,null,-1),Hs={__name:"ProductCardBottom",setup(N){const r=m(w().props.states),h=m(null),n=a=>{const p=a.currentTarget.getAttribute("id");r.value=p};switch(w().props.states.toLowerCase()){case"description":case"reviews":case"characteristic":setTimeout(()=>{h.value.scrollIntoView({behavior:"smooth"})},100);break;default:r.value="Description";break}const y=()=>{O.visit("/reviews/"+route().params.slug)},l=function(a){const p=new Date(a),i=p.getDate().toString().padStart(2,"0"),t=(p.getMonth()+1).toString().padStart(2,"0"),g=p.getFullYear();return`${i}.${t}.${g}`};return(a,p)=>(e(),o("div",{class:"row product-card-bottom-full",ref_key:"descriptionSection",ref:h},[s("ul",is,[s("li",{onClick:n,id:"Description",class:u({active:r.value=="Description"})}," Описание ",2),s("li",{onClick:n,id:"Characteristic",class:u({active:r.value=="Characteristic"})}," Характеристика ",2),s("li",{onClick:n,id:"Reviews",class:u({active:r.value=="Reviews"})}," Отзывы ",2)]),s("div",as,[D(s("div",cs,[rs,s("div",null,c(a.$page.props.product.description),1)],512),[[F,r.value=="Description"]]),D(s("div",ns,[ds,s("div",null,[ls,s("span",null,c(a.$page.props.product.type.name__ru),1)]),s("div",null,[ps,s("span",null,c(a.$page.props.product.manufacturer.name),1)]),(e(!0),o(_,null,b(a.$page.props.product.product_attributes,i=>(e(),o(_,null,[i.value?(e(),o("div",_s,[s("span",null,c(i.attributes.name),1),s("span",null,c(i.value),1)])):v("",!0)],64))),256))],512),[[F,r.value=="Characteristic"]]),D(s("div",us,[s("div",hs,[vs,s("div",null,[a.$page.props.user?(e(),o("button",{key:0,class:"btn btn-primary",onClick:y}," Оставить отзыв ")):v("",!0)])]),Object.keys(a.$page.props.product.reviews).length>0?(e(!0),o(_,{key:0},b(a.$page.props.product.reviews,i=>(e(),o("div",gs,[s("div",fs,[s("div",ms,[s("div",bs,[s("div",ws,[s("div",$s,[s("div",ys,[s("div",ks,[s("div",Cs,[s("img",{alt:"",class:"loaded",src:"/storage/src/profile/"+i.user.img},null,8,Ds)])])]),s("div",Fs,[s("div",Ss,c(i.user.nickname?i.user.nickname:i.user.first_name+" "+i.user.last_name),1)])])]),s("div",Ts,[s("div",Ns,[s("span",null,c(l(i.created_at)),1)])])]),s("div",Bs,[s("div",Vs,[s("div",js,[(e(),o(_,null,b(5,t=>s("span",{key:t,class:u({filled:t<=i.grade})},"★",2)),64))])])])])]),s("div",Is,[Os,s("div",Rs,[s("p",null,c(i.plus),1)])]),s("div",zs,[Js,s("div",Ls,[s("p",null,c(i.minus),1)])]),i.comment?(e(),o("div",Ms,[Ps,s("div",qs,[s("p",null,c(i.comment),1)])])):v("",!0)]))),256)):Object.keys(a.$page.props.product.reviews).length<=0?(e(),o("div",As,Qs)):v("",!0)],512),[[F,r.value=="Reviews"]])]),Ys],512))}};export{Gs as _,Hs as a};
