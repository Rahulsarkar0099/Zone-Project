const loginclick = document.querySelector('.login-click');
const register = document.querySelector('.reg-click');

const profile = document.querySelector('.profile-img');
const loginform = document.querySelector('.login-form');
const regform = document.querySelector('.register-form');

const formclose = document.querySelector('.close');

 profile.addEventListener('click', ()=>{
   loginform.classList.remove('log-form');
 });
 
 register.addEventListener('click',()=>{
   regform.classList.remove('reg-form');
   loginform.classList.add('log-form');
 });
 
 loginclick.addEventListener('click',()=>{
   regform.classList.add('reg-form');
   loginform.classList.remove('log-form');
 });
 
 formclose.addEventListener('click',()=>{
   loginform.classList.add('log-form');
 });
formclose.addEventListener('click',()=>{
   regform.classList.add('reg-form');
 });
 
 // Menu.bar //
 
 const menuimg = document.querySelector('.menu-img');
 const menubar = document.querySelector('.menubar');
 const menuclose = document.querySelector('.menubar-close');
 
 menuimg.addEventListener('click', ()=>{
   menubar.classList.remove('menbar');
 })
 
menuclose.addEventListener('click',()=>{
  menubar.classList.add('menbar');
})

// menubar close// 



