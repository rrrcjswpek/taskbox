import{a as e,j as i,F as o}from"./jsx-runtime-03b4ddbf.js";import"./index-76fb7be0.js";import{P as r}from"./index-8d47fad6.js";import{B as l}from"./Button-651c4d71.js";const n=({user:a,onLogin:s,onLogout:d,onCreateAccount:t})=>e("header",{children:i("div",{className:"wrapper",children:[i("div",{children:[e("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:i("g",{fill:"none",fillRule:"evenodd",children:[e("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e("h1",{children:"Acme"})]}),e("div",{children:a?i(o,{children:[i("span",{className:"welcome",children:["Welcome, ",e("b",{children:a.name}),"!"]}),e(l,{size:"small",onClick:d,label:"Log out"})]}):i(o,{children:[e(l,{size:"small",onClick:s,label:"Log in"}),e(l,{primary:!0,size:"small",onClick:t,label:"Sign up"})]})})]})});n.propTypes={user:r.shape({name:r.string.isRequired}),onLogin:r.func.isRequired,onLogout:r.func.isRequired,onCreateAccount:r.func.isRequired};n.defaultProps={user:null};n.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1},onLogin:{description:"",type:{name:"func"},required:!0},onLogout:{description:"",type:{name:"func"},required:!0},onCreateAccount:{description:"",type:{name:"func"},required:!0}}};export{n as H};
