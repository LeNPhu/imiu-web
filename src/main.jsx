import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#0CBF1E",
        colorTextPlaceholder: "rgba(28, 28, 28, 0.5)",
        colorBorder: "#1C1C1C",
      },
      componentSize: {},
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
