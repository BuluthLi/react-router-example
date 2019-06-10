import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Topics from "./components/Topics";
import About from "./components/About";
import Demo from "./guanwangDemo/index";
// 官网例子
import MainExample from './components/MainExample';
class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Footer></Footer>
        {/*  */}
        <hr></hr>
        <hr></hr>
        <hr></hr>
        {/* 这种render渲染方式，应放在要被渲染的tag里面，例如路由视图tag，即<route />就是一个需要被渲染的tag,并且绝大多数情况这种写法很少，仅有可能写在路由表遍历生成路由视图上 */}
        {/* <div render={(props) => <div>我是官网一个例子，并且加了修改，证明了路由视图是一块一块的，两块不同的层级路由视图给了不同背景色</div>} /> */}
        <p>
          我是官网一个例子，并且加了修改，证明了路由视图是一块一块的，两块不同的层级路由视图给了不同背景色
        </p>
        <MainExample></MainExample>
        <div>---------------------------------------------------------------分割线------------------------------------------------------------------</div>
        <Demo></Demo>
        <div onClick={() => {
          this.props.history.push('/demo/one');
        }}>嗨啊hi阿hi</div>
      </div>
    );
  }
}

export default withRouter(App);
// 官网例子https://react-router.docschina.org/web/example/route-config
// 总结，将所有路由统一到一张表中，实际的效果link和route视图还是一一对应(link和route视图一般放在一起)，就近原则（针对多个同层级的link只针对一个route视图。例如首尾都有导航菜单，点击任一处，都是控制中间的一个route视图层）
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;

// const Tacos = ({ routes }) => (
//   <div>
//     <h2>Tacos</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

// const Bus = () => <h3>Bus</h3>;
// const Cart = () => <h3>Cart</h3>;

// // 路由表
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];
// 递归遍历路由表
// const RouteWithSubRoutes = route => (
//   <Route
//     path={route.path}
//     render={props => (
//       <route.component {...props} routes={route.routes} />
//     )}
//   />
// );

// const RouteConfigExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );

// export default RouteConfigExample;
