'use client';

import { FormProvider, useForm } from 'react-hook-form';
import Name from './FormParts/Name';
import Calenders from './FormParts/Calendars/Calenders';

import styles from './EventsForm.module.scss';
import TimeFrames from './FormParts/TimeFrames/TimeFrames';
import EventsLink from './FormParts/EventsLink/EventsLink';
import Cover from './FormParts/Cover/Cover';
import { DRAFT } from '@/helper/consts';
import SubmitButtons from './FormParts/SubmitButtons/SubmitButtons';

const setDefaultValues = () => {
  const currentDate = new Date();
  const defaultValues = {
    eventTimeStart: currentDate,
    eventTimeEnd: currentDate,
    status: DRAFT,
    cover: '',
  };
  return defaultValues;
};

const EventsForm = () => {
  const methods = useForm({ defaultValues: setDefaultValues() });

  const setStatusAndSubmit = (status: string) => {
    methods.setValue('status', status);
    methods.handleSubmit(onFormSubmit)();
  };

  const onFormSubmit = (data: any) => {
    console.log('Form Data:', data);
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
            <EventsLink name="5. Посилання на оплату:" formName="paymentLink" />
          </div>
          <Cover />
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
    </FormProvider>
  );
};

export default EventsForm;
