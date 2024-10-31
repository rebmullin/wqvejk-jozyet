import React from 'react';
import { SchedulerFormEditor } from '@progress/kendo-react-scheduler';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Form, Field } from '@progress/kendo-react-form';

const CustomEventDialog = ({ dataItem, onClose, onSave }) => {
  const handleSubmit = (data) => {
    onSave(data);
    onClose();
  };

  return (
    <Dialog title="Edit Event" onClose={onClose}>
      <Form initialValues={dataItem} onSubmit={handleSubmit}>
        {/* Default fields from SchedulerFormEditor */}
        <SchedulerFormEditor />
        {/* Custom field for location */}
        <Field name="location" component="input" label="Location" />

        <DialogActionsBar>
          <button type="submit">Save</button>
          <button onClick={onClose}>Cancel</button>
        </DialogActionsBar>
      </Form>
    </Dialog>
  );
};

export default CustomEventDialog;
