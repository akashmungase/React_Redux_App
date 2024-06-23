import { connect } from 'react-redux';
import Home from '../main/Home';
import { addToCart, removeToCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
    cartData: state.cardItem.cardData,
})

const mapDispatchToProps = (dispatch) => ({
    addToCardHanddler: data => dispatch(addToCart(data)),
    removeToCardHanddler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);