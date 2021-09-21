import type { Component } from "solid-js";
import { titleScreenContainer } from "../styles/styledElements";

const TitleScreen: Component = () => {
  return (      
    <div style={{
        display: 'flex',
        background: 'gold',        
        "align-items": 'center',
        "justify-content": 'center',
        "flex-direction": 'column',
        maxWidth: '100%',
        width: '100vw',
        height: '100vh',
    }}>

       <div style={{width: 100, height: 100}}>
        Bootcamp simulator    
       </div> 
        
    </div>
  );
};

export default TitleScreen;



