import {Alert,Badge}from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Hader.css'


const Hader = () => {
    return ( 

        <div className='Hader'>
        <p className="bg-dark p-4 mb-1 text-light">
        <p style={{fontSize:10}}> by morteza roozbehi  </p>
        <Alert variant="info">
            
          <Alert.Heading>*سلام * يادداشت خود را وارد كنيد</Alert.Heading>
          <hr />
          <p className="mb-0">
            يادداشت شما در <Badge variant="secondary p-2">ديتابيس</Badge> ذخيره
            ميشود
          </p>
        </Alert>
        <p> : تكنولوژِي هاي استفاده شده </p>
        <a href="https://www.mongodb.com/">
          <Badge variant="danger mr-2 p-2">mongodb</Badge>
        </a>
        <a href="https://expressjs.com/">
          <Badge variant="success mr-2 p-2">express.js</Badge>
        </a>
        <a href="https://reactjs.org/">
          <Badge variant="primary mr-2 p-2">react.js</Badge>
        </a>
        <a href="https://www.mongodb.com/">
          <Badge variant="info mr-2 p-2">node.js</Badge></a>   

        <a href="https://www.mongodb.com/">
          <Badge variant="warning mr-2 p-2">Bootstrap</Badge></a>
        
      </p>

     
        </div>
     );
}
 
export default Hader ;