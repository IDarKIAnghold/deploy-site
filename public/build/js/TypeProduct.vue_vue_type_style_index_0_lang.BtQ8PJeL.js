import{o as t,c as a,F as u,q as h,a as e,b as n,w as d,u as r,i as l,d as g,t as c,r as p,Q as _,D as v,n as m,j as i}from"./app.BQx0zvW2.js";const $={class:"product-cards"},w={class:"type-card"},k={class:"type-thumb"},C=["src"],N={class:"type-caption"},b={class:"type-title"},O={__name:"TypeCard",setup(f){return(o,y)=>(t(),a("div",$,[(t(!0),a(u,null,h(o.$page.props.catalog,s=>(t(),a("div",w,[e("div",k,[n(r(l),{href:"/type/"+s.name},{default:d(()=>[e("img",{loading:"lazy",src:"/storage//src/row/type/"+s.name+".png",alt:""},null,8,C)]),_:2},1032,["href"])]),e("div",N,[e("div",b,[n(r(l),{href:"/type/"+s.name},{default:d(()=>[g(c(s.name__ru),1)]),_:2},1032,["href"])])])]))),256))]))}},x={key:0,class:"product-cards"},V=["onClick"],z={class:"card-thumb"},B=["src"],D={class:"card-caption"},T={class:"card-title"},j={class:"card-price"},F={key:0},S={key:1,class:"d-flex flex-row justify-content-between"},q=e("div",{class:"text-center w-100"},[e("h5",null,"Здесь ничего нет")],-1),E=[q],P={__name:"TypeProduct",setup(f){return p(_().props.page),p(_().props.pageCount),window.location.pathname.split("?")[0],(o,y)=>o.$page.props.catalog.length>0?(t(),a("div",x,[(t(!0),a(u,null,h(o.$page.props.catalog,s=>(t(),a("div",{class:"product-card",onClick:J=>r(v).visit("/product/"+s.slug)},[e("div",z,[n(r(l),{href:"/product/"+s.slug},{default:d(()=>[e("img",{loading:"lazy",src:s.img?"/storage/src/"+JSON.parse(s.img)[0]:"/storage/src/row/no-image.png"},null,8,B)]),_:2},1032,["href"])]),e("div",D,[e("div",T,[n(r(l),{href:"/product/"+s.slug},{default:d(()=>[g(c(s.name),1)]),_:2},1032,["href"])]),e("div",j,[e("span",{class:m(s.old_price>0?"discount":"")},c(s.price),3),s.old_price>0?(t(),a("del",F,c(s.old_price)+" руб. ",1)):i("",!0)])])],8,V))),256))])):o.$page.props.catalog.length<=0?(t(),a("div",S,E)):i("",!0)}};export{O as _,P as a};
