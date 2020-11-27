import React, {Fragment,useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error';

function App() {

  const [busqueda,setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const {ciudad,pais} = busqueda

  const [consultar,setConsultar] = useState(false);

  const [respuestaAPI,setRespuestaAPI] = useState({});

  const [error,setError] = useState(false);

  useEffect(() => {
      const consultarAPI = async () => {

          if(consultar){
              const appId = "dfe771991f8d2c3ac8beabf06fdc9b65";
              const url = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+","+pais+"&appid="+appId;
              console.log(url);
              
              const respuesta = await fetch(url);
              const resultado = await respuesta.json()

              setRespuestaAPI(resultado);
              setConsultar(false);

              if(resultado.cod !== 200){
                setError(true);
              }else{
                setError(false);
              }

          }

      }
      consultarAPI();
  // eslint-disable-next-line
  },[consultar])

  return (
      <Fragment>

          <Header 
              titulo="Clima React"
          />

          <div className="contenedor-form">
              <div className="containaer">
                  <div className="row">
                      <div className="col m6 s12">
                          <Formulario
                              busqueda={busqueda}
                              setBusqueda={setBusqueda}
                              setConsultar={setConsultar}
                          />
                      </div>
                      <div className="col m6 s12">
                          {
                            error ?
                            <Error mensaje="No se ha encontrado la ciudad" />
                            :
                            <Clima respuestaAPI={respuestaAPI} />
                          }

                      </div>                      
                  </div>
              </div>
          </div>

      </Fragment>
  );
}

export default App;
