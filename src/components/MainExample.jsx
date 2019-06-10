// 官网例子https://react-router.docschina.org/web/example/route-config
// 总结，将所有路由统一到一张表中，实际的效果Link和route视图还是一一对应(Link和route视图一般放在一起)，就近原则（针对多个同层级的Link只针对一个route视图。例如首尾都有导航菜单，点击任一处，都是控制中间的一个route视图层）
// 选中的NavLink会被添加上active类名
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
const Main = () => <h2>Main</h2>;

const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li>
                <NavLink to="/tacos/bus">Bus</NavLink>
            </li>
            <li>
                <NavLink to="/tacos/cart">Cart</NavLink>
            </li>
        </ul>
        <div className="second-router-view-map">
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

// 路由表
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];
// 递归遍历路由表
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink to="/tacos">Tacos</NavLink>
                </li>
                <li>
                    <NavLink to="/sandwiches">Sandwiches</NavLink>
                </li>
            </ul>
            <div className="first-router-view-map">
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </div>
    </Router>
);

export default RouteConfigExample;
