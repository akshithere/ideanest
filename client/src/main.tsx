import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
// import { SocketProvider } from "../src/context/SocketProvider";
import { store } from "./hooks/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  // <SocketProvider>
    <Provider store={store}>
    <App />
    </Provider>
  /* </SocketProvider> */
);
