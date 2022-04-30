import First from "./charts/first";
import Second from "./charts/second";
import Third from "./charts/third"
import Forth from "./charts/forth";
import Five from "./charts/five";
import Sixth from "./charts/sixth"
import Seven from "./charts/seven"
import Eigth from "./charts/eigth"
import Nine from "./charts/Nine"

function App() {


  return (
    <div style = {{display:"flex",margin:"15px",maxWidth:"800px",alignItems:"center",flexWrap:"wrap"}}>

<First />
<Second  />
<Third />
<Forth />
<Five />
<Sixth />
<Seven />
<Eigth />
<Nine />
    </div>
 
  );
}

export default App;
