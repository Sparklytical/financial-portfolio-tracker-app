/* eslint-disable react/prop-types */
/**
 *
 * TeamTags
 *
 */
import React from 'react';
import './TeamTags.scss';

export const Team = ({ name }) => {
  const arr = name.split(' ');
  let abbr = '';
  arr.forEach(element => {
    abbr = element.charAt(0);
  });
  return <div className="team-circle">{abbr}</div>;
};
