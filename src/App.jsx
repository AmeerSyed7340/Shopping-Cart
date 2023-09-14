import Homepage from './components/Homepage'
import {Link} from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Hello from the main page: </h1>
      <Link to="homepage">Homepage</Link>
    </div>
  )
}

export default App
