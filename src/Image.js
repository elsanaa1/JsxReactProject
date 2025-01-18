import product from "./product";
import { Card } from "react-bootstrap";
function Image() {
    return (
      <Card.Img  variant="top"  style={{height:300}} src={product.path} />
    );
  }
  
  export default Image;
  