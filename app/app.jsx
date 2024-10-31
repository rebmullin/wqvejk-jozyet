import React, { useState } from 'react';
import {
  Scheduler,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
  AgendaView,
  WorkWeekView,
} from '@progress/kendo-react-scheduler';
import { FormWithCustomEditor } from './custom-form';
// import CustomEventDialog from './CustomEventDialog'; // Adjust path as necessary
import { tasks } from './shared-sc-events-utc';

import { sampleDataWithCustomSchema } from './data';

// export const customModelFields = {
//   id: 'sessionID',
//   description: 'Note',
//   start: 'Start',
//   end: 'End',
//   title: 'Title',
//   recurrenceRule: 'RecurrenceRule',
//   recurrenceId: 'RecurrenceID',
//   recurrenceExceptions: 'RecurrenceException',
// };

const MyScheduler = () => {
  const [taskList, setTaskList] = useState(tasks);
  const [editedTask, setEditedTask] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [data, setData] = React.useState(sampleDataWithCustomSchema);

  const handleDataChange = (event) => {
    console.log('REBB handle data change', event);
    const { created, updated, deleted } = event;

    let updatedTasks = [...taskList];
    if (created) {
      setEditedTask(created[0]); // Set new item for dialog
      setDialogOpen(true); // Open dialog for creation
    }
    if (updated) {
      setEditedTask(updated[0]); // Set updated item for dialog
      setDialogOpen(true); // Open dialog for editing
    }
    if (deleted) {
      updatedTasks = updatedTasks.filter((task) => task.id !== deleted[0].id);
      setTaskList(updatedTasks); // Update task list with deletion
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditedTask(null);
  };

  const handleSave = (updatedTask) => {
    const updatedTasks = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    handleCloseDialog();
  };

  return (
    <div>
      <Scheduler
        data={taskList}
        onDataChange={handleDataChange} // Handles create, update, delete
        defaultDate={new Date(2024, 10, 1)}
        defaultView="month"
        editable={{
          add: true,
          edit: true,
          remove: true,
        }}
        // modelFields={customModelFields}
        form={(props) => FormWithCustomEditor(props)}
        // data={data}
      >
        <TimelineView slotDuration={30} />
        <DayView slotDuration={30} />
        <WeekView slotDuration={30} />
        <WorkWeekView />
        <MonthView itemsPerSlot={5} />
        <AgendaView />
      </Scheduler>

      {/* Render custom editor dialog if open */}
      {/* {isDialogOpen && editedTask && (
        <CustomEventDialog
          dataItem={editedTask}
          onClose={handleCloseDialog}
          onSave={handleSave}
        />
      )} */}
    </div>
  );
};

export default MyScheduler;
