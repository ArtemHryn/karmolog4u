import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import styles from './FormParts.module.scss';
import { base_url } from '@/helper/consts';
import 'react-toastify/dist/ReactToastify.css';

const uploadFile = async ({ files, token }) => {
  const formData = new FormData();
  for (const file of files) {
    formData.append('files', file);
  }

  const res = await fetch(`${base_url}/uploadFiles`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Не вдалося завантажити файл(и)');
  }

  return res.json();
};

const MAX_FILES = 10;
const fieldName = 'optionalFiles';

const AdditionalFiles = () => {
  const [files, setFiles] = useState([]);
  const { register, setValue, setError } = useFormContext();
  const { data: token } = useSession();

  const mutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: data => {
      const allFiles = [...files, ...data.uploaded];
      setFiles(allFiles);
      setValue(fieldName, allFiles, { shouldValidate: true });
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const handleFileChange = e => {
    const newFiles = Array.from(e.target.files);
    if (newFiles.length + files.length > MAX_FILES) {
      setError(fieldName, { message: 'Максимум 10 файлів' });
      return;
    }

    mutation.mutate({ files: newFiles, token: token.accessToken });
  };

  const handleFileRemove = (e, i) => {
    e.stopPropagation();
    e.preventDefault();
    const afterRemoving = files.filter((file, index) => i !== index);
    setFiles(afterRemoving);
    setValue(fieldName, afterRemoving, { shouldValidate: true });
  };

  return (
    <div className={styles.label}>
      <p>6. Додаткові файли курсу</p>
      <label className={styles.file_label} onClick={e => e.stopPropagation()}>
        {files.length > 0 && (
          <ul className={styles.files_list}>
            {files.map((fileUrl, index) => {
              const fileName = fileUrl.split('/').pop();
              return (
                <li
                  key={index}
                  className={styles.files_item}
                  onClick={e => {
                    handleFileRemove(e, index);
                  }}
                >
                  <p className={styles.file_name}>{fileName}</p>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.delete_icon}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.94283 8.00017L11.8048 5.13817C12.0655 4.8775 12.0655 4.45617 11.8048 4.1955C11.5442 3.93483 11.1228 3.93483 10.8622 4.1955L8.00017 7.0575L5.13817 4.1955C4.8775 3.93483 4.45617 3.93483 4.1955 4.1955C3.93483 4.45617 3.93483 4.8775 4.1955 5.13817L7.0575 8.00017L4.1955 10.8622C3.93483 11.1228 3.93483 11.5442 4.1955 11.8048C4.3255 11.9348 4.49617 12.0002 4.66683 12.0002C4.8375 12.0002 5.00817 11.9348 5.13817 11.8048L8.00017 8.94283L10.8622 11.8048C10.9922 11.9348 11.1628 12.0002 11.3335 12.0002C11.5042 12.0002 11.6748 11.9348 11.8048 11.8048C12.0655 11.5442 12.0655 11.1228 11.8048 10.8622L8.94283 8.00017Z"
                      fill="#6C6C6C"
                    />
                  </svg>
                </li>
              );
            })}
          </ul>
        )}
        <input
          type="file"
          multiple
          className={styles.file_input}
          {...register(fieldName, {
            onChange: handleFileChange,
          })}
          max={MAX_FILES - files.length}
        />
        <svg
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.file_icon}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.33377 1.33475C1.86387 0.804645 2.58285 0.506836 3.33253 0.506836C4.08221 0.506836 4.80118 0.804645 5.33128 1.33475C5.86138 1.86485 6.15919 2.58382 6.15919 3.3335V10.3335C6.15919 10.818 5.96674 11.2826 5.62418 11.6252C5.28161 11.9677 4.81699 12.1602 4.33253 12.1602C3.84806 12.1602 3.38344 11.9677 3.04088 11.6252C2.69831 11.2826 2.50586 10.818 2.50586 10.3335V3.84017H3.82586V10.3335C3.82586 10.4679 3.87924 10.5968 3.97426 10.6918C4.06928 10.7868 4.19815 10.8402 4.33253 10.8402C4.4669 10.8402 4.59578 10.7868 4.69079 10.6918C4.78581 10.5968 4.83919 10.4679 4.83919 10.3335V3.3335C4.83919 2.93391 4.68046 2.55068 4.3979 2.26813C4.11535 1.98557 3.73212 1.82684 3.33253 1.82684C2.93293 1.82684 2.54971 1.98557 2.26715 2.26813C1.9846 2.55068 1.82586 2.93391 1.82586 3.3335V11.6668C1.82586 12.3316 2.08995 12.9692 2.56005 13.4393C3.03014 13.9094 3.66772 14.1735 4.33253 14.1735C4.99734 14.1735 5.63492 13.9094 6.10501 13.4393C6.5751 12.9692 6.83919 12.3316 6.83919 11.6668V3.84017H8.15919V11.6668C8.15919 12.6817 7.75603 13.6551 7.03839 14.3727C6.32075 15.0903 5.34742 15.4935 4.33253 15.4935C3.31763 15.4935 2.3443 15.0903 1.62666 14.3727C0.909025 13.6551 0.505859 12.6817 0.505859 11.6668V3.3335C0.505859 2.58382 0.803668 1.86485 1.33377 1.33475ZM3.33253 0.826836C2.66772 0.826836 2.03014 1.09093 1.56005 1.56102C1.08995 2.03111 0.825859 2.66869 0.825859 3.3335V11.6668C0.825859 12.5969 1.19531 13.4888 1.85294 14.1464C2.51057 14.8041 3.4025 15.1735 4.33253 15.1735C5.26255 15.1735 6.15449 14.8041 6.81212 14.1464C7.46974 13.4888 7.83919 12.5969 7.83919 11.6668V4.16017H7.15919V11.6668C7.15919 12.4165 6.86139 13.1355 6.33128 13.6656C5.80118 14.1957 5.08221 14.4935 4.33253 14.4935C3.58285 14.4935 2.86387 14.1957 2.33377 13.6656C1.80367 13.1355 1.50586 12.4165 1.50586 11.6668V3.3335C1.50586 2.84904 1.69831 2.38442 2.04088 2.04185C2.38344 1.69929 2.84806 1.50684 3.33253 1.50684C3.81699 1.50684 4.28161 1.69929 4.62418 2.04185C4.96674 2.38442 5.15919 2.84904 5.15919 3.3335V10.3335C5.15919 10.5528 5.0721 10.763 4.91707 10.918C4.76204 11.0731 4.55177 11.1602 4.33253 11.1602C4.11328 11.1602 3.90302 11.0731 3.74799 10.918C3.59296 10.763 3.50586 10.5528 3.50586 10.3335V4.16017H2.82586V10.3335C2.82586 10.7331 2.9846 11.1163 3.26715 11.3989C3.54971 11.6814 3.93293 11.8402 4.33253 11.8402C4.73212 11.8402 5.11535 11.6814 5.3979 11.3989C5.68046 11.1163 5.83919 10.7331 5.83919 10.3335V3.3335C5.83919 2.66869 5.5751 2.03111 5.10501 1.56102C4.63492 1.09093 3.99734 0.826836 3.33253 0.826836Z"
            fill="#6C6C6C"
          />
        </svg>
      </label>
    </div>
  );
};

export default AdditionalFiles;
