import {BrowserRouter, Route, Switch} from "react-router-dom"
import AboutAs from "../containers/AboutUs/AboutUS";
import CreateGlosario from "../containers/CreateGlosario/CreateGlosario";
import CreateRecipe from "../containers/CreateRecipe/CreateRecipe";
import Glosario from "../containers/Glosario/Glosario";
import Home from "../containers/Home/Home";
import Layout from "../containers/Layout/Layout";
import PageNotFound from "../containers/PageNotFound/PageNotFound";
import Recipe from "../containers/Recipe/Recipe";
import LastChages from "../containers/LastChanges/LastChanges"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route exact path= "/createRecipe" component={CreateRecipe}/>
          <Route exact path= "/edit/:id" component={CreateRecipe}/>
          <Route exact path= "/receta/:id" component={Recipe}/>
          <Route exact path= "/glosario" component={Glosario}/>
          <Route exact path= "/crearGlosario" component={CreateGlosario}/>
          <Route exact path= "/editarGlosario/:id" component={CreateGlosario}/>
          <Route exact path= "/aboutus" component={AboutAs}/>
          <Route exact  path=  "/lastchanges" component={LastChages}/>
          <Route component={PageNotFound}/>
        </Switch>     
      </Layout>
    </BrowserRouter>

  );
}

export default App;
