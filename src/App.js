import React, { useState } from 'react';
import './App.css';
import { Form, FormGroup, Input, Label } from 'reactstrap';

function App() {
  const [state, setState] = useState( {
    checkAll: false,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  const onChange = (event) => {
    event.preventDefault();
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }

  const checkAll = () => {
    if(state.checkAll || state.checkAll === false) {
      setState({
        checkAll: state.checkAll,
        check1: !state.check1,
        check2: !state.check2,
        check3: !state.check3,
        check4: !state.check4,
      });
    }
  }

  const check = () => {
    if (state.check1 && state.check2  && state.check3 && state.check4) {
      setState({
        checkAll: true,
        check1: state.check1,
        check2: state.check2,
        check3: state.check3,
        check4: state.check4,
      })
    } else {
      setState({
        checkAll: false,
        check1: state.check1,
        check2: state.check2,
        check3: state.check3,
        check4: state.check4,
      })
    }
  }

  return (
    <div className="App">
      <h1>Checkbox</h1>
      <div className="form">
        <Form>
          <FormGroup>
            <Label check>
              <Input type="checkbox" name="checkAll" onClick={checkAll} onChange={onChange} checked={state.checkAll}/>
              Select/Unselect All
            </Label>

            <Label check>
              <Input type="checkbox" name="check1" onClick={check} onChange={onChange} checked={state.check1}/>
              Item 1
            </Label>
            <Label check>
              <Input type="checkbox" name="check2" onClick={check} onChange={onChange} checked={state.check2}/>
              Item 2
            </Label>
            <Label check>
              <Input type="checkbox" name="check3" onClick={check} onChange={onChange} checked={state.check3}/>
              Item 3
            </Label>
            <Label check>
              <Input type="checkbox" name="check4" onClick={check} onChange={onChange} checked={state.check4}/>
              Item 4
            </Label>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default App;
