import { HashRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { routes } from "./routes";
import { SignUp } from "./Login/SignUp";
import { Todo } from "./pages/Todo";
import { TodoSuccess } from "./pages/TodoSuccess";
import { PageNotFound } from "./components/PagenotFound";
import { Header } from "./components/Header";
import { Copyright } from "./components/Copyright";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.todo} element={<Todo />} />
        <Route path={routes.todos} element={<TodoSuccess />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Copyright />
    </HashRouter>
  );
};
export default Router;
