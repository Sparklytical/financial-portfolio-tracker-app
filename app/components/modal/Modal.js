/* eslint-disable react/prop-types */
import React from 'react';
import Classes from './Modal.module.css';

export const Modal = ({ children }) => (
  <div className={Classes.modalContainer}>
    <div className={Classes.modal}>{children}</div>
  </div>
);
