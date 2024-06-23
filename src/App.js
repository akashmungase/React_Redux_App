import './App.css';
import FuctionComponent from './FuctionComponent';
import ClassComponent from './ClassComponent';
import User from './User';
import StateComponent from './StateComponent';
import ClassState from './ClassState';
import GetInputValue from './GetInputValue';
import HideAndShow from './HideAndShow';
import Toggle from './Toggle';
import HandleForm from './HandleForm';
import Profile from './Profile';
import Login from './Login';
import PassFunctionInProps from './PassFunctionInProps';
import ConstructorLifecycle from './ConstructorLifecycle';
import LifecycleMethods from './LifecycleMethods';
import ParentComponent from './ParentComponent';
import Hooks from './Hooks';
import UseStateHooks from './UseStateHooks';
import UseEffectHook from './UseEffectHook';
import StyleType from './StyleType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from 'react-bootstrap';
import ArrayListingAndMap from './ArrayListingAndMap';
import NestedListArray from './NestedListArray';
import Student from './Student';
import PureComponentExample from './PureComponentExample';
import UseMemoHook from './UseMemoHook';
import RefClassComponent from './RefClassComponent';
import UseRef from './UseRef';
import ForwordRef from './ForwordRef';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import HOC from './HOC';
import Routing from './Routing'
import GetAPI from './Components/GetAPI';
import PostAPI from './Components/PostAPI';
import DeleteAPI from './Components/DeleteAPI';
import PreviousState from './Components/PreviousState';
import StateWithObject from './Components/StateWithObject';
import HomeContainer from './container/HomeContainer'
import HeaderContainer from './container/HeaderContainer'

function App() {
  // function getData() {
  //   alert("alert from App Component")
  // }
  return (
    <div className="App">
      {/* <div>App Component</div> */}
      {/* <Button onClick={()=>alert("Bootstrap Button")}>Primary</Button>
      <Alert variant='success'>Alert Primary</Alert> */}
      {/* <FuctionComponent />*/}
      {/*<StateComponent /> */}
      {/* <ClassState/> */}
      {/* <ClassComponent userDetails={"jhon"} /> */}
      {/* <User name={"Peter"}/> */}
      {/* <GetInputValue/> */}
      {/* <HideAndShow/> */}
      {/* <Toggle/> */}
      {/* <HandleForm /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      {/* <PassFunctionInProps data={getData}/> */}
      {/* <ConstructorLifecycle/> */}
      {/* <LifecycleMethods/> */}
      {/* <ParentComponent/> */}
      {/* <Hooks/> */}
      {/* <UseStateHooks/> */}
      {/* <UseEffectHook/> */}
      {/* <StyleType/> */}
      {/* <ArrayListingAndMap/> */}
      {/* <NestedListArray /> */}
      {/* <Student/> */}
      {/* <PureComponentExample /> */}
      {/* <UseMemoHook /> */}
      {/* <RefClassComponent/> */}
      {/* <UseRef/> */}
      {/* <ForwordRef/> */}
      {/* <ControlledComponent/> */}
      {/* <UnControlledComponent/> */}
      {/* <HOC/> */}
      {/* <Routing/> */}
      {/* <GetAPI/> */}
      {/* <PostAPI/> */}
      {/* <DeleteAPI/> */}
      {/* <PreviousState /> */}
      {/* <StateWithObject/> */}
      <HeaderContainer/>
      <HomeContainer/>
    </div>

  );
}

export default App;
