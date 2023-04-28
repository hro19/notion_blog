import { useState } from 'react';

const API_KEY = '68fddf2a-cbfe-a9a0-87bf-0269b2ebbf29:fx';
const API_URL = 'https://api-free.deepl.com/v2/translate';

const Honyaku = () => {
  const [inputText, setInputText] = useState(''); // inputText ステートを宣言する
  const [translatedText, setTranslatedText] = useState(''); // translatedText ステートを宣言する

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslate = () => {
    let deeplInput = inputText;
    let isJapanese = false;
    let sourceLang = '';

    for (var i = 0; i < deeplInput.length; i++) {
      //言語判別
      if (deeplInput.charCodeAt(i) >= 256) {
        isJapanese = true;
        break;
      }
    }

    switch (isJapanese) {
      case true:
        sourceLang = '&source_lang=JA&target_lang=EN';
        break;
      case false:
        sourceLang = '&source_lang=EN&target_lang=JA';
        break;
      default:
        alert('言語の判別に失敗しました');
    }

    let content = encodeURI(
      'auth_key=' + API_KEY + '&text=' + deeplInput + sourceLang
    );
    let url = API_URL + '?' + content;

    fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Could not reach the API: ' + response.statusText);
        }
      })
      .then((data) => {
        setTranslatedText(data.translations[0].text);
      })
      .catch((error) => {
        alert('翻訳失敗');
      });
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>翻訳ページ</h1>
      <textarea
        id='deepl-input'
        value={inputText}
        onChange={handleInputChange}
        className='p-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full h-48'
      />
      <button
        onClick={handleTranslate}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4'
      >
        Translate
      </button>
      <div
        id='deepl-output'
        className='p-2 rounded-md border border-gray-300 shadow-sm mt-4 h-24'
      >
        {translatedText}
      </div>
    </div>
  );
};

export default Honyaku;
