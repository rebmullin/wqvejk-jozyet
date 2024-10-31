import * as React from 'react';
import { SchedulerForm } from '@progress/kendo-react-scheduler';
import { CustomFormEditor } from './custom-form-editor';
import { CustomDialog } from './custom-dialog';
export const FormWithCustomEditor = (props) => {
  console.log('REBB props 2', props);
  // const requiredValidator = React.useCallback(
  //   (value) =>
  //     value === undefined || value === null || value === ''
  //       ? 'Field is required.'
  //       : undefined,
  //   []
  // );
  // const formValidator = (_dataItem, formValueGetter) => {
  //   let result = {};
  //   result.Patient = [requiredValidator(formValueGetter('Patient'))]
  //     .filter(Boolean)
  //     .reduce((current, acc) => current || acc, '');
  //   result.Treatment = [requiredValidator(formValueGetter('Treatment'))]
  //     .filter(Boolean)
  //     .reduce((current, acc) => current || acc, '');
  //   return result;
  // };
  return (
    <SchedulerForm
      {...props}
      editor={(props) => CustomFormEditor(props)}
      dialog={CustomDialog}
      onSubmit={(e) => {
        console.log('REBB submit changes here!!', e.value);
      }}
      // validator={formValidator}
    />
  );
};
