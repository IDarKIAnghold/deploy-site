import{y as a,o as i,c as d,a as t,w as n,u as s,d as e,t as r,F as p,Q as l,Z as f,j as m,k as g}from"./app.CqJCRoH7.js";const y={__name:"Errors",setup(h){const o=a(()=>({503:"503: Service Unavailable",500:"500: Server Error",404:"404: Page Not Found",403:"403: Forbidden"})[l().props.status]),u=a(()=>({503:"Sorry, we are doing some maintenance. Please check back soon.",500:"Whoops, something went wrong on our servers.",404:"Sorry, the page you are looking for could not be found.",403:"Sorry, you are forbidden from accessing this page."})[l().props.status]);return(c,v)=>(i(),d(p,null,[t(s(f),null,{default:n(()=>[e("title",null,"Ошибка "+r(o.value),1)]),_:1}),e("div",null,[e("h1",null,r(o.value),1),e("div",null,r(u.value),1),t(s(g),{href:c.route("index")},{default:n(()=>[m("Вернуться назад")]),_:1},8,["href"])])],64))}};export{y as default};