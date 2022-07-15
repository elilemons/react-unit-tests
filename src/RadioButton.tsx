import { SyntheticEvent, useState } from 'react';

import './RadioButton.css';

interface RadioButtonParams {
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLabel3: string;
}
export function RadioButton({
  buttonLabel1,
  buttonLabel2,
  buttonLabel3,
}: RadioButtonParams) {
  const [active, setActive] = useState('');

  const onButtonClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className='radio-button-container'>
      <button
        className={active === '1' ? 'active' : ''}
        onClick={() => onButtonClick('1')}
      >
        {buttonLabel1}
      </button>
      <button
        data-testid='button'
        className={active === '2' ? 'active' : ''}
        onClick={() => onButtonClick('2')}
      >
        {buttonLabel2}
      </button>
      <button
        data-testid='button'
        className={active === '3' ? 'active' : ''}
        onClick={() => onButtonClick('3')}
      >
        {buttonLabel3}
      </button>
    </div>
  );
}
