'use client';

import { FormProvider, useForm } from 'react-hook-form';
import Name from './FormParts/Name';
import Calenders from './FormParts/Calendars/Calenders';

import styles from './EventsForm.module.scss';
import TimeFrames from './FormParts/TimeFrames/TimeFrames';
import EventsLink from './FormParts/EventsLink/EventsLink';
import Cover from './FormParts/Cover/Cover';
import { base_url, DRAFT } from '@/helper/consts';
import SubmitButtons from './FormParts/SubmitButtons/SubmitButtons';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { EditEventType } from '@/types/events';

interface defaultEventValues {
  status: string;
  cover: string;
  eventLink: string;
  name: string;
  id: string;
}

interface EventFormattedValues extends defaultEventValues {
  dateStart: string;
  dateEnd: string;
}

interface FormValues extends defaultEventValues {
  eventTimeStart: Date;
  eventTimeEnd: Date;
  dateStart: Date;
  dateEnd: Date;
}

const eventFetch = async (data: EventFormattedValues, token: string, isEdit: boolean) => {
  const url = isEdit ? `update/${data.id}` : 'create';
  const response = await fetch(`${base_url}/admin/events/${url}`, {
    method: isEdit ? 'PUT' : 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Помилка при створенні події');
  }
  return true;
};

const setDefaultValues = (event?: EditEventType) => {
  const currentDate = new Date();
  if (!event) {
    const defaultValues = {
      eventTimeStart: currentDate,
      eventTimeEnd: currentDate,
      status: DRAFT,
      cover: '',
    };
    return defaultValues;
  }
  const defaultValues = {
    ...event,
    eventTimeStart: new Date(event.dateStart),
    eventTimeEnd: new Date(event.dateEnd),
    dateStart: new Date(event.dateStart),
    dateEnd: new Date(event.dateEnd),
  };
  return defaultValues;
};

const EventsForm = ({ event }: { event?: EditEventType }) => {
  const methods = useForm<FormValues>({ defaultValues: setDefaultValues(event) });
  const route = useRouter();
  const { data: session } = useSession();

  const mutation = useMutation({
    mutationFn: (data: EventFormattedValues) =>
      eventFetch(data, session?.accessToken || '', !!event),
    onSuccess: () => {
      toast.success('Подія успішно створена!');
      setTimeout(() => route.push('/cabinet/dashboard/admin/events'), 1500);
    },
    onError: (error: Error) => {
      toast.error(`Помилка: ${error.message}`);
    },
  });

  const setStatusAndSubmit = (status: string) => {
    methods.setValue('status', status);
    methods.handleSubmit(onFormSubmit)();
  };

  const onFormSubmit = (data: FormValues) => {
    const { dateStart, dateEnd, eventTimeStart, eventTimeEnd, ...rest } = data;
    if (dateEnd < dateStart) {
      toast.error('Дата закінчення не може бути раніше дати початку');
      return;
    }
    const eventStart = new Date(dateStart);
    eventStart.setHours(eventTimeStart.getHours(), eventTimeStart.getMinutes(), 0, 0);

    const eventEnd = new Date(dateEnd);
    eventEnd.setHours(eventTimeEnd.getHours(), eventTimeEnd.getMinutes(), 0, 0);

    const formattedData = {
      ...rest,
      dateStart: eventStart.toISOString(),
      dateEnd: eventEnd.toISOString(),
    };

    mutation.mutate(formattedData);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form}>
        <div className={styles.form_inputs_wrapper}>
          <div className={styles.form_column1}>
            <Name />
            <Calenders />
            <TimeFrames />
            <EventsLink name="4. Посилання на подію:" formName="eventLink" />
          </div>
          <Cover />
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
    </FormProvider>
  );
};

export default EventsForm;
