import { useParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import Descriptions from './FormParts/Descriptions';
import Name from './FormParts/Name';
import ModulePeriod from './FormParts/ModulePeriod/ModulePeriod';
import Period from '../../../AddCourse/AddCourseForm/Form/FormParts/Type/Period';

import styles from './Form.module.scss';
import AdditionalLinks from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/AdditionalLinks';
import AdditionalFiles from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalFiles';
import Feedbacks from './FormParts/Feedbacks';
import SubmitButtons from './FormParts/SubmitButtons';

const setDefaultFormValues = items => {
  if (!items) {
    return {
      lesson_time_start: new Date(new Date().setHours(12, 0, 0, 0)),
      lesson_time_end: new Date(new Date().setHours(15, 0, 0, 0)),
      feedbacks: [{ feedback: '' }, { feedback: '' }],
    };
  }
  return {};
};

const Form = () => {
  const params = useParams();
  const methods = useForm({
    defaultValues: setDefaultFormValues(),
  });

  const moduleId = params.module_id;

  const onFormSubmit = data => {
    console.log(data);
  };

  const setStatusAndSubmit = status => {
    methods.setValue('status', status);
    methods.handleSubmit(onFormSubmit)();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onFormSubmit)}>
        <div className={styles.additional_form_wrapper}>
          {' '}
          <Name title="1. Назва уроку:" placeholder="Введіть назву уроку" />
          <Descriptions
            name={'description'}
            placeholder={'Введіть основний опис уроку'}
            name2={'internal_description'}
            placeholder2={'Введіть другий опис уроку'}
            title="2. Опис уроку:"
          />
          {moduleId ? (
            <ModulePeriod />
          ) : (
            <div className={styles.form_sizer}>
              <Period title={'3. Доступ до уроку:'} />
            </div>
          )}
          <Descriptions
            name="recommendation"
            title={`${moduleId ? '6.' : '4.'}  Рекомендації до уроку`}
            placeholder="Додайте рекомендації"
          />
          <div className={styles.form_sizer}>
            <AdditionalLinks title={`${moduleId ? '7.' : '5.'} Додаткові посилання`} />
          </div>
          <Descriptions
            name="homework_description"
            title={`${moduleId ? '8.' : '6.'} Домашнє завдання`}
            placeholder="Опис ДЗ"
          />
          <div className={styles.form_sizer}>
            {' '}
            <AdditionalFiles
              title={`${moduleId ? '9.' : '7.'} Файли домашнього завдання`}
              form_name={'homework_files'}
            />
          </div>
          <div className={styles.form_sizer}>
            {' '}
            <AdditionalFiles
              title={`${moduleId ? '10.' : '8.'} Бонусні файли`}
              form_name={'bonus_files'}
            />
          </div>
          <Feedbacks title={`${moduleId ? '11.' : '9.'} Зворотній зв’язок`} />
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
    </FormProvider>
  );
};

export default Form;
