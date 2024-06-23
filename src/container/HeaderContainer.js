import { connect } from 'react-redux';
import Header from '../main/Header';
import { addToCart, removeToCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
    data:state.cardItem.cardData
})
const mapDispatchToProps = (dispatch) => ({
    addToCardHanddler: data => dispatch(addToCart(data)),
    removeToCardHanddler: data => dispatch(removeToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
