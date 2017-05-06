import React from 'react';
import './Flexgrid.css'

export const Column = ({ children }) => <div className="Flexgrid-col">{ children }</div>

export const Row = ({ children }) => <div className="Flexgrid-row">{ children }</div>
