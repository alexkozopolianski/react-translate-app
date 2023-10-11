import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
    const language = useContext(LanguageContext);
    const color = useContext(ColorContext);

    const renderSubmit = (language) => {
        return language === 'english' ? 'Submit' : 'Подтвердить';
    }

    const renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                {renderSubmit(language)}
            </button>
        );
    }

    return (
        <ColorContext.Consumer>
            {(color) => renderButton(color)}
        </ColorContext.Consumer>
    );
}

export default Button;
