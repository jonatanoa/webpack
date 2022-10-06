import'../css/componentes.css';
// import webpacklogo from  '../assets/img/webpack-logo.png'

export const saludar =(nombre = 'Sin nombre')=>{
    console.log('ejecutando h1');
    const h1 = document.createElement('h1');
    h1.innerText= `Hola ${nombre}`
    document.body.append(h1)

};