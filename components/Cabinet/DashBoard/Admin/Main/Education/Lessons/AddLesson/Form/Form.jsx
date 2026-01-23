import { useParams, usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Descriptions from './FormParts/Descriptions';
import Name from './FormParts/Name';
import ModulePeriod from './FormParts/ModulePeriod/ModulePeriod';
import Period from '../../../AddCourse/AddCourseForm/Form/FormParts/Type/Period';
import AdditionalLinks from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalLinks/AdditionalLinks';
import AdditionalFiles from '../../../AddCourse/AddCourseForm/Form/FormParts/AdditionalFiles';
import Feedbacks from './FormParts/Feedbacks';
import SubmitButtons from './FormParts/SubmitButtons';

import styles from './Form.module.scss';
import { base_url } from '@/helper/consts';

async function AddOrUpdateLesson({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/education/lessons/create`
      : `${base_url}/admin/education/lessons/edit/${id}`;

  const res = await fetch(url, {
    method: action === 'add' ? 'POST' : 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
}

const setDefaultFormValues = items => {
  if (!items) {
    return {
      lessonTimeStart: new Date(new Date().setHours(12, 0, 0, 0)),
      lessonTimeEnd: new Date(new Date().setHours(15, 0, 0, 0)),
      feedbacks: [{ feedback: '' }, { feedback: '' }],
      homeworkFiles: [],
      bonusFiles: [],
      dateStart: new Date(Date.now()),
    };
  }

  const { feedbacks, lessonTimeStart, lessonTimeEnd, additionalLinks, ...lesson } = items;

  return {
    ...lesson,
    feedbacks:
      feedbacks.length > 0
        ? feedbacks.map(f => ({ feedback: f }))
        : [{ feedback: '' }, { feedback: '' }],
    lessonTimeStart: new Date(new Date(lessonTimeStart)),
    lessonTimeEnd: new Date(new Date(lessonTimeEnd)),
    additional_links: additionalLinks,
    dateStart: new Date(lessonTimeStart || new Date()),
  };
};

const Form = ({ editLesson }) => {
  const params = useParams();
  const router = useRouter();
  const pathName = usePathname();

  const { data: token } = useSession();
  const methods = useForm({
    defaultValues: setDefaultFormValues(editLesson),
  });

  const moduleId = params.module_id;

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      AddOrUpdateLesson({
        data: info,
        token: token.accessToken,
        action: !!editLesson ? 'edit' : 'add',
        id: editLesson ? editLesson._id : '',
      }),
    onSuccess: () => {
      toast.success(!!editLesson ? 'Зміни успішно внесено' : 'Запис успішно додано!', {
        autoClose: 1000,
      });
      const depth = !!editLesson ? 2 : 1;
      setTimeout(() => router.push(`${pathName.split('/').slice(0, -depth).join('/')}`), 1500);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const onFormSubmit = data => {
    const {
      videoLinks,
      period,
      start_date,
      end_date,
      months,
      additional_links,
      feedbacks,
      lessonTimeStart,
      lessonTimeEnd,
      dateStart,
      moduleDay,
      modulePart,
      ...lessonInfo
    } = data;

    if (period === 'TO_DATE') {
      if (!start_date) {
        setFieldError('start_date', 'Введіть дату початку курсу');
        toast.error('Введіть дату початку курсу');
        return;
      }
      if (!end_date) {
        setFieldError('end_date', 'Введіть дату закінчення курсу');
        toast.error('Введіть дату закінчення курсу');
        return;
      }
    }

    if (period === 'FOR_PERIOD' && !months) {
      setFieldError('months', 'Введіть кількість місяців');
      toast.error('Введіть кількість місяців');
      return;
    }

    const isValidVideoLinks = () => {
      let isValid = true;
      if (videoLinks[0]?.link === '' || videoLinks[0].name === '') {
        return isValid;
      }
      const isValidYouTube = link =>
        typeof link === 'string' &&
        ((link.includes('youtube.com') && link.includes('v=')) || link.includes('youtu.be/'));
      videoLinks.forEach(video => {
        if (!isValidYouTube(video.link)) {
          isValid = false;
        }
      });
      return isValid;
    };

    if (!isValidVideoLinks()) {
      toast.error('Посилання не є дійсним YouTube посиланням');
      return;
    }

    const lessonData = {
      ...lessonInfo,
      videoLinks: videoLinks?.filter(link => link.name && link.link) || [],
      additionalLinks: additional_links?.filter(link => link.name && link.link) || [],
      targetModel: moduleId ? 'Module' : 'Course',
      feedbacks: (feedbacks || []).map(f => f.feedback),
      targetId: moduleId || params.course_id,
      ...(moduleId
        ? {
            lessonTimeStart: new Date(
              dateStart.getFullYear(),
              dateStart.getMonth(),
              dateStart.getDate(),
              lessonTimeStart.getHours(),
              lessonTimeStart.getMinutes()
            ),
            lessonTimeEnd,
            moduleDay: +moduleDay,
            modulePart: +modulePart,
          }
        : {
            access: {
              type: period,
              ...(period === 'TO_DATE' && { dateStart: start_date, dateEnd: end_date }),
              ...(period === 'FOR_PERIOD' && { months }),
            },
          }),
    };
    mutation.mutate({ info: lessonData });
  };

  const setStatusAndSubmit = status => {
    methods.setValue('status', status);
    methods.handleSubmit(onFormSubmit)();
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onFormSubmit)}>
        <div
          className={`${styles.additional_form_wrapper} ${
            moduleId ? styles.additional_form_wrapper_module : ''
          }`}
        >
          {' '}
          <Name title="1. Назва уроку:" placeholder="Введіть назву уроку" />
          <Descriptions
            name={'description'}
            placeholder={'Введіть основний опис уроку'}
            name2={'internalDescription'}
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
            name="recommendations"
            title={`${moduleId ? '6.' : '4.'}  Рекомендації до уроку`}
            placeholder="Додайте рекомендації"
          />
          <div className={styles.form_sizer}>
            <AdditionalLinks title={`${moduleId ? '7.' : '5.'} Додаткові посилання`} />
          </div>
          <div className={styles.form_sizer}>
            <AdditionalLinks
              title={`${moduleId ? '8.' : '6.'} Посилання на відео`}
              form_name={'videoLinks'}
            />
          </div>
          <Descriptions
            name="homework"
            title={`${moduleId ? '9.' : '7.'} Домашнє завдання`}
            placeholder="Опис ДЗ"
          />
          <div className={styles.form_sizer}>
            {' '}
            <AdditionalFiles
              title={`${moduleId ? '10.' : '8.'} Файли домашнього завдання`}
              form_name={'homeworkFiles'}
              editFiles={editLesson?.homeworkFiles}
            />
          </div>
          <div className={styles.form_sizer}>
            {' '}
            <AdditionalFiles
              title={`${moduleId ? '11.' : '9.'} Бонусні файли`}
              form_name={'bonusFiles'}
              editFiles={editLesson?.bonusFiles}
            />
          </div>
          <Feedbacks title={`${moduleId ? '12.' : '10.'} Зворотній зв’язок`} />
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
    </FormProvider>
  );
};

export default Form;
