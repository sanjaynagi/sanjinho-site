import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';

const ContactIcons = () => (
  <ul className="icons" style={{ listStyleType:"none", display:"flex",  gap:"20px",  margin:"5px" }} >
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
