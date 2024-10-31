import * as React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
// import { patients, treatments, rooms, therapists } from './data';
export const TitleEditor = (props) => {
  const handleChange = (event) => {
    console.log('REBB change');
    if (props.onChange) {
      props.onChange.call(undefined, {
        value: event.value.id,
      });
    }
  };
  return (
    <DropDownList
      onChange={handleChange}
      data={['stuff1']}
      dataItemKey={'id'}
      textField={'name'}
    />
  );
};
