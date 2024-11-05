<img src="cobaReact.png" alt="cobaReact" />
<h1>Coba React</h1>
<p>Lorem ipsum dolor sit amet.</p>

<!-- challange -->

<!-- case 1 -->

<div>
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      ...
    </ul>
  </div>

>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
/>

<!-- case 2 -->

>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
/>

<!-- case 3 -->\

<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>

export default function Bio() {  
  return (  
    <div>  
      <div className="intro">  
        <h1>Welcome to my website!</h1>  
      </div>  
      <p className="summary">  
        You can find my thoughts here.  
        <br />  
        <br />  
        <b>And <i>pictures</i></b> of scientists!  
      </p>  
    </div>  
  );  
}  