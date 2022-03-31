import React from 'react';
import { useState } from 'react';

// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

import './Editor.scss';

const Editor = ({ value }) => {
  const [editor] = useState(() => withReact(createEditor()))
  // initial value to be shown on page
  const [paragraph, setParagraph] = useState([
    {
      type: 'paragraph',
      children: [{
        text: value
      }],
    },
  ])

  return (
    <div className='editor'>
      <Slate
        editor={editor}
        value={paragraph}
        onChange={newValue => setParagraph(newValue)} // setting new value using useState
      >
        <Editable />
      </Slate>
    </div>
  )
}

export default Editor
