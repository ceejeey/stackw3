import React from 'react';
import { useParams } from 'react-router';

import ModalContainer from '../components/ModalContainar/ModalContainer';

function Error() {
  const { template } = useParams();

  return (
    <>
      <ModalContainer template={template} modal="errorModal" />
    </>
  );
}

export default Error;
