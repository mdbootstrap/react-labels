import React from 'react';
import { MDBRange } from 'mdb-react-ui-kit';

export default function Range() {
  return (
    <MDBRange
      defaultValue={50}
      id='customRange'
      label='Example range'
    />
  );
}