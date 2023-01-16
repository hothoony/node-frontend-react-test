import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Greeting = () => {

    const [ lang, setLang ] = useState('ko');
    
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const handleChange = e => {
        setLang(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div>
            <div>
                <select onChange={handleChange}>
                    <option value="ko">ko</option>
                    <option value="en">en</option>
                </select>
                <div>
                    현재 언어 : {lang}
                </div>
            </div>
            <div>
                <h1>{t('greeting')}</h1>
            </div>
        </div>
    );
}

export default Greeting;
