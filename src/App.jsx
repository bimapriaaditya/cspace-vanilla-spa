import { render, h } from 'preact';
import { useState } from 'preact/hooks';
/** @jsx h */

const App = () => {
  const [input, setInput] = useState('BimaPria');
  
  const ChangeBima = (e) => {
    const new_val = e.target.value;
    setInput(new_val);

    console.log(new_val);
  };

  const CheckInput = (e) => {
    console.log(input);
  };

	return (
		<div>
			<p className='bg-danger' style={'color: red;'}>Bima Pria Aditya</p>
			<input value={input} onInput={ChangeBima} />
      <button type='button' onClick={CheckInput}>Click Me</button>
		</div>
	)
}

render(<App />, document.body);