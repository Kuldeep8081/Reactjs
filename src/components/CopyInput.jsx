import React, { useState } from 'react'
import PopupContent from './PopupContent';

const CopyInput = () => {

    const [inputValue, setInputValue]=useState('')

    const [copied, setCopied]=useState(false);

    const handelCopy=()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),2000);
        })
    }
  return (
    <div>
        <h1>CopyInput</h1>

        <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />

        <button onClick={handelCopy}>Copy</button>

        <PopupContent copied={copied}/>
    </div>
  )
}

export default CopyInput