import product from "./product";
import { Card } from "react-bootstrap";
function Description() {
    return (
    <div>
        <Card.Text>{product.description} </Card.Text>
    </div>
    );
  }
  
  export default Description;
  