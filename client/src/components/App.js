import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Error404 from "./Error404";
import Header from "./Header";
const Dashboard = () => <h2> Dashboard </h2>;
const SurveyNew = () => <h2> SurvayNew </h2>;
const Landing = () => <h2> Landing </h2>;

function App() {
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/" component={Error404} />
          </div>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
