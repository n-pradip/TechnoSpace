import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {BlogpostProvider} from "./context/BlogpostProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <BlogpostProvider>
          <App />
        </BlogpostProvider>
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
