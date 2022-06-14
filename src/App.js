import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
// import Inicio from './paginas/Inicio';
// import Lentes from './paginas/Lentes';
// import Contactos from './paginas/Contactos';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemCount from './components/ItemCount';



function App() {
  // const onAdd =(count) =>{
  //   alert(`Agregaste ${count} productos a tu carrito`);
  // }
  return (
      <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a mi pagina'}/>
      {/* <ItemCount initial={1} max={5} onAdd={onAdd}/> */}
      {/* <Inicio/>
      <Lentes/>
      <Contactos/> */}
      
      <ItemDetailContainer/>
      </>
  );
}

export default App;
