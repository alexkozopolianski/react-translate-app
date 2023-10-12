import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { onLanguageChange } = useContext(LanguageContext);

  return (
    <div>
      Select a language:
      <i className="flag us" onClick={() => onLanguageChange('english')} />
      <i className="flag ru" onClick={() => onLanguageChange('russian')} />
    </div>
  );
}

export default LanguageSelector;
