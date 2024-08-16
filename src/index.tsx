import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Testpage from "./Pages/Testpage";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate(); // 获取 navigate 函数

    return (
        <div>
            <div>Hello world!</div>
            <button onClick={() => navigate("/test")}>Go to Test Page</button>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,  // 使用 HomePage 组件作为根页面
    },
    {
        path: "/test",
        element: <Testpage />,  // Testpage 组件渲染在 /test 路径
    }
]);

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
