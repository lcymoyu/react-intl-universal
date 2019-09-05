import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import intl from 'react-intl-universal';
import EN from './locale/en.json';
import CH from './locale/zh.json'; 

function App() {

  const [lang, setLang] = useState('zh_CN');

  const locales = {
    en_US: EN,
    zh_CN: CH
  };
  
  intl
    .init({
      warningHandler: (msg, detail) => { //注意该函数开发环境有，打包后就没有了
        console.log(`${msg} ${detail}`);
      },
      currentLocale: lang, 
      locales
    })

   const handleSite = (key) => {
     const language = lang == 'zh_CN'?'en_US':'zh_CN'
      setLang(language)
    }

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <select className="select" onChange={handleSite}>
            <option value="zh_CN">中文</option>
            <option value="en_US">English</option>
          </select>
          <button className="bt bt1">{intl.get('t1').d('查看')}</button>
          <button className="bt bt2">{intl.get('t2').d('修改')}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
