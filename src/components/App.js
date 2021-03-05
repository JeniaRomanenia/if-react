import React from 'react';

//components
import HomesGuestsLoves from "./HomesGuestsLoves";

//constants
import {hotels} from "../constants/content";

//styles
import '../styles/components/App.css';

function App() {
  return (
      <HomesGuestsLoves hotels={hotels}/>
  );
}

export default App;

