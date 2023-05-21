import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: " #0CBF1E",
      },
      componentSize: {},
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
