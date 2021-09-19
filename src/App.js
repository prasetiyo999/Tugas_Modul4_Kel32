import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Usestate from "./Usestate/State";
import Useeffect from "./Useeffect/Effect";
import Usecontext from "./Usecontext/Context";
import Usereduce from "./Usereducer/Reducer";

export default function App( ) {
    return (
        //Membuat Tombol Link Masing-masing hook
        <BrowserRouter>
        <header>
            <div className="title">
                <p>Kelompok 32</p>
            </div>
            <nav>
                <Link className="text" to="/">
                useState
                </Link>

                <Link className="text navtext2" to="/effect">
                useEffect
                </Link>

                <Link className="text" to="/context">
                useContext 
                </Link>

                <Link className="text navtext2" to="/reducer">
                useReducer
                </Link>
            </nav>
        </header>

        <Switch>
            <Route path="/" exact component={Usestate} />
            <Route path="/effect" component={Useeffect} />
            <Route path="/context" component={Usecontext} />
            <Route path="/reducer" component={Usereduce} />
        </Switch>
        </BrowserRouter>
    );
}