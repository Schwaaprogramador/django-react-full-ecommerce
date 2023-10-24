import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';

//Esta importacion fue de GPT al pasarle el error "children is missing in props validation"
import PropTypes from 'prop-types';
// Tener en cuenta la sintaxis a la hora de beguear esto => [{children}] en otro poryecto aparece destructuring de esta forma.

const Layout = (props) => {
  
  return (
    <div> 
        <Navbar/>
          <ToastContainer autoClose={5000}/>
          
          {props.children}
        <Footer/>
    </div>
  )
}

//Esta importacion fue de GPT al pasarle el error "children is missing in props validation"
Layout.propTypes = {
  children: PropTypes.node
};

export default Layout
