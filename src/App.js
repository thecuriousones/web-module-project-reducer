import React, { useReducer } from 'react';
import { initialState } from './reducers/index';
import { addOne, applyNumber, changeOperation, clearDisplay, memoryPlus, memoryRecall, memoryClear } from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer from './reducers/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = () => {
  //   dispatch(addOne());
  // }

  const handleAnyNumber = number => {
    dispatch(applyNumber(number));
  }

  const handleChangeOperation = operation => {
    dispatch(changeOperation(operation));
  }

  const handleClearButton = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryPlus = () => {
    dispatch(memoryPlus());
  }

  const handleMemoryRecall = () => {
    dispatch(memoryRecall());
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryPlus}/>
              <CalcButton value={"MR"} onClick={handleMemoryRecall}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAnyNumber(1)}/>
              <CalcButton value={2} onClick={() => handleAnyNumber(2)}/>
              <CalcButton value={3} onClick={() => handleAnyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAnyNumber(4)}/>
              <CalcButton value={5} onClick={() => handleAnyNumber(5)}/>
              <CalcButton value={6} onClick={() => handleAnyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAnyNumber(7)}/>
              <CalcButton value={8} onClick={() => handleAnyNumber(8)}/>
              <CalcButton value={9} onClick={() => handleAnyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOperation('+')}/>
              <CalcButton value={"*"} onClick={() => handleChangeOperation('*')}/>
              <CalcButton value={"-"} onClick={() => handleChangeOperation('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearButton}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
