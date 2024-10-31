import * as React from 'react';
import { FormElement, Field } from '@progress/kendo-react-form';
import { Label, Error } from '@progress/kendo-react-labels';
import { TextArea, Input } from '@progress/kendo-react-inputs';
import { DatePicker, DateTimePicker } from '@progress/kendo-react-dateinputs';
import { TitleEditor } from './editors';
import {
  AutoComplete,
  ComboBox,
  MultiColumnComboBox,
  DropDownList,
  MultiSelect,
  DropDownTree,
} from '@progress/kendo-react-dropdowns';
export const CustomFormEditor = (props) => {
  // console.log('REBB props here', props);
  return (
    <FormElement horizontal={true}>
      {React.Children.map(props.children, (child) => {
        // console.log('child', child.props);
        return React.cloneElement(child, {
          style: { ...child.props.style, opacity: 0.5 },
        });
      })}
      <div className="k-form-field">
        <Label>Favorite Snoopy Character</Label>
        <div className="k-form-field-wrap">
          <Field
            name="Snoopy"
            component={DropDownList}
            data={['Snoopy', 'Charlie Brown', 'Woodstock', 'Linus']}
          />
        </div>
      </div>
      <div className="k-form-field">
        <Label>Note</Label>
        <div className="k-form-field-wrap">
          <Field name={'Note'} component={TextArea} rows={1} />
        </div>
      </div>
    </FormElement>
  );
};
