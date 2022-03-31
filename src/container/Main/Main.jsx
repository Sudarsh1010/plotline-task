// Main Page
import React from 'react';
import { useState } from 'react';

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

import NavBar from '../../components/NavBar/NavBar';
import Box from '../../components/Box/Box';

import './Main.scss'

const Main = () => {
  const [editor] = useState(() => withReact(createEditor()))
  // initial value to be shown on page
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{
        text: `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randomised wowhich don't look even slightly believable. If you are going to use a passage. There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassages of Lorem Ipsum available, but the majority have salteration in some form, by injected humour, or randowowhich don't look even slightly believable. If you are going to use a passage.`
      }],
    },
  ])

  return (
    <>
      <NavBar />
      <div className='main-content'>
        <h1>John Doe Interview</h1>
        <div className="main-paragraph">
          <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)} // setting new value using useState
          >
            <Editable />
          </Slate>
        </div>

        <Box />
      </div>
    </>
  )
}

export default Main