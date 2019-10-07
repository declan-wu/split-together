import React from 'react'

const BillHistoryDetailItem = ({ name, price }) => {
  return (
    <div className={'history__card__secondary'}>
      <p className={'history__card__secondary_text'}>{name}</p>
      <p className={'history__card__secondary_text'}>$ {price.toFixed(2)}</p>
    </div>
  );
}
 
export default BillHistoryDetailItem;