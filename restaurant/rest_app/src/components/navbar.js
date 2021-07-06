import { Link} from "react-router-dom";

export default function Navbar(){
    return(
<ul>
   <Link to="/menu"> <li>menu</li></Link>
   <Link to="/order"> <li>order</li></Link>
   <Link to="/contact"> <li>contact</li></Link>
</ul>
    )
}