class App extends React.Component {
    //devuelve una descripcion de lo que queremos ver en pantalla
    //esto ya es jsx combinacion entre js y xml
    render() {
        return <h1>Hello React World!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));