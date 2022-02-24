import Typewriter from "typewriter-effect";

  
function Geeks( props) {
  return (
    <div className="Geeks">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(props.text)
         
       .pauseFor(1000)
       
       
       .pauseFor(1000)
       
       
       .start();
       }}
       />
    </div>
  );
}
  
export default Geeks;