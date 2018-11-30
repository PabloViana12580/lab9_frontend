import React from 'react';

import ChismeList from '../Chismes';
import ChismeForm from '../NewChisme';

const ChismeApp = () => (
  <div className="chismeApp">
    <h1>
      { 'Los Chismes' }
    </h1>
    <ChismeList />
    <ChismeForm />
  </div>
);

export default ChismeApp;