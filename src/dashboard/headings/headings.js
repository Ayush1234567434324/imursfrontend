
import './headings.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Tag_1 = (props) => {
    const location = useLocation();

    const handleGoBack = () => {
        window.history.back(); // Go back to the previous page
    };

    return (
        <div className="tag1">
            {location.pathname !== '/'?  (
       <div className='op' style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: window.innerWidth <= 800 ? '100px' : '500px' }}>
       <button onClick={handleGoBack}>Back</button>
       <div className="text-wrapper kami" style={{ flex: 1, textAlign: 'center', margin: 'auto' }}>
         Imurs
       </div>
     </div>
     
         
              
            ):<>
            <div className="text-wrapper">Hello {props.data.name.split(' ')[0]}</div>
            <div className="div">Adopt light, chic magazines for daily nostalgia</div>
            </>}

        </div>
    );
};


export const TagCredit = (props) => {
  return (
    <div className="tag-credit">
      <div className="sub-heading">Idyllic Credits left</div>
      <div className="heading">{props.data.credits} iCredits</div>
    </div>
  );
};

export const Tag_2 = () => {
    return (
        <div className="tag1">
            <div className="text-wrapper" style={{fontSize:'22px'}}>Hello Piyush</div>
            <div className="div">Welcome Back!</div>
        </div>
    );
};
