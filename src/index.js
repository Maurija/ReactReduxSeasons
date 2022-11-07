import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component{

    // Método para iniciar variables, estados, etc
    // NO utilizar este método para cargar datos, llamadas a API's, etc.
   /* constructor(props){
        super(props);
        
        // THIS IS THE ONLY TIME we do direct assignment 
        // to this.state
        this.state = {lat: null, errorMessage: ''};

        // No usar el método constructor() para setear 'state'
    }*/

    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(            
            // llamo a setState para actualizar el estado de la clase App para que se auto renderice nuevamente
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState( { errorMessage: err.message } )           
        );
    }
/*    componentDidUpdate(){
        console.log("My component was just updated - it rerendered!");
    }*/

    renderContent(){
             /* return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Error: {this.state.errorMessage}
            </div>
        );*/

        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay  lat={this.state.lat} />;
        }

        return <Spinner message="Please, accept location request" />;

    }

    // React says we have to define render!!
    render() {
        
      return <div className="border red">{this.renderContent()}</div>;
         
    }

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);