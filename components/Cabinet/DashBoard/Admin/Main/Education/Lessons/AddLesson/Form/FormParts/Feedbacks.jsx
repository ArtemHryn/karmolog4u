import { useFieldArray, useFormContext } from 'react-hook-form';

import styles from './FormParts.module.scss';
import { inter } from '@/app/[locale]/layout';

const fieldName = 'feedbacks';

const Feedbacks = ({ title }) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: fieldName,
    control,
  });

  return (
    <div className={styles.feedback_wrapper}>
      <p className={styles.description_title}>{title}</p>
      <div className={styles.feedback_textarea_wrapper}>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.feedback_textarea_field}>
            <textarea
              {...register(`${fieldName}.${index}.feedback`)}
              placeholder="Запитання"
              className={`${styles.feedback_textarea} ${inter.className}`}
            />
            {index > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className={styles.remove_feedback}
              >
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.41425 5.99976L11.7072 1.70676C12.0982 1.31576 12.0982 0.683762 11.7072 0.292762C11.3162 -0.0982383 10.6842 -0.0982383 10.2933 0.292762L6.00025 4.58576L1.70725 0.292762C1.31625 -0.0982383 0.68425 -0.0982383 0.29325 0.292762C-0.09775 0.683762 -0.09775 1.31576 0.29325 1.70676L4.58625 5.99976L0.29325 10.2928C-0.09775 10.6838 -0.09775 11.3158 0.29325 11.7068C0.48825 11.9018 0.74425 11.9998 1.00025 11.9998C1.25625 11.9998 1.51225 11.9018 1.70725 11.7068L6.00025 7.41376L10.2933 11.7068C10.4882 11.9018 10.7443 11.9998 11.0002 11.9998C11.2562 11.9998 11.5122 11.9018 11.7072 11.7068C12.0982 11.3158 12.0982 10.6838 11.7072 10.2928L7.41425 5.99976Z"
                    fill="#7e7e7e"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
        {fields.length < 5 && (
          <button type="button" onClick={() => append()} className={styles.add_feedback}>
            Додати
          </button>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
