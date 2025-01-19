import './App.css';
import Card from 'react-bootstrap/Card';
import Image from "./Image"
import Price from './Price';
import Name from './Name';
import Description from './Description';

function App() {
  const firstname='sanaa';
// style card
  const styleCard={
    width: '18rem',
    margin:'auto',
  }
//  style card.body
  const cardbodyStyl={ textAlign:'center',  borderRadius:'3%', backgroundColor:'rgb(239, 243, 243)'}
 

  return (
    <div className="App">
        <Card style={styleCard}>
          <Card.Body  style={cardbodyStyl}>
              <Image />
              <Name />
              <Description />
              <Price />
          </Card.Body>
         </Card>

        {/* Hellotext to print  */}
       
        <h5>
          {firstname ? `Hello, ${firstname}!` : "Hello, there!"}
        </h5>
        {firstname && (
          <img style={{width:'10%'}}
            src="/hello.jpg" // Replace with your image
            alt="hello image!"
          />)
        }

    </div>
  );
}

export default App;
