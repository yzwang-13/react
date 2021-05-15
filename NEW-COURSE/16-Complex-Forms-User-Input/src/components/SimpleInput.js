import {useRef, useState} from 'react';


const SimpleInput = (props) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(inputRef.current.value);
    }

    const inputChangeHandler = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={inputValue} onChange={inputChangeHandler} ref={inputRef} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
