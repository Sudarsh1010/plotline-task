// JSX file for Box1 component
import React from 'react';

import { images } from '../../constants/index';
import Editor from '../Editor/Editor';
import './Box.scss'

const Box = () => {
  // Box editable default paragraph that's going to exported as props to editor component
  const speaker1Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.`;

  const speaker2Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.`;

  const speaker3Paragraph = `There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa believable. If you are going to don’t look even slightly believable. If you are going to use a passage.`;

  return (
    <div className='box-container'>
      <section className="box">
        <h3>Box 1</h3>

        <div className='speaker'> {/* Speaker 1 */}
          <div className="speaker-info">
            <img src={images.speaker1} alt="Speaker 1" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker1Paragraph} />

            <button className='btn-1'>Lot of Calls in the beg...</button>

          </div>
        </div>

        <div className='speaker'> {/* Speaker 2 */}
          <div className="speaker-info">
            <img src={images.speaker2} alt="Speaker 2" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker2Paragraph} />

            <button className='btn-2'>Frequency of use ins...</button>
          </div>
        </div>

        <div className='speaker'> {/* Speaker 3 */}
          <div className="speaker-info">
            <img src={images.speaker3} alt="Speaker 3" />

            <h4>Speaker 1</h4>

            <p>09:45</p>
          </div>

          <div className="editable">
            <Editor value={speaker3Paragraph} />

            <button className='btn-3'>Lot of Calls in the beg...</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Box