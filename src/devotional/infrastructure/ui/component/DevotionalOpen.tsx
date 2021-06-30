import React from 'react';
import { Devotional } from '../../../domain/Devotional';

type DevotionalOpenProps = {
  devotional: Devotional,
}

export const DevotionalOpen: React.FC<DevotionalOpenProps> = ({ devotional }) => {
  
  return (
    <div className={`devotional `}>
      <div className="pt10"/>
      <div className="title">
        {devotional.title}
      </div>
      <div className="pt10"/>
      <div className="passage">
        <div className="text">
          {devotional.passage.text}
        </div>
        <div className="reference">
          {devotional.passage.reference}
        </div>
      </div>
      <div className="content">
      {devotional.content.split('\n\n').map((item, key) => {
        return <p key={key}>{item}</p>
      })}
      </div>
    </div>
  );
}
