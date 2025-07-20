import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ARCHIVE, base_url } from '../helper/consts';

const moveToArchive = async ({ token, id }) => {
  const res = await fetch(`${base_url}/admin/education/lessons/status/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ status: `${ARCHIVE}` }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка зміни статусу';
    throw new Error(message);
  }

  return res.json();
};

const deleteLesson = async ({ token, arrayOfIds }) => {
  const res = await fetch(`${base_url}/admin/education/lessons/delete`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ lessonIds: arrayOfIds }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка видалення';
    throw new Error(message);
  }
};

const changeModuleForLesson = async ({ token, lessonId, targetModule }) => {
  if (!targetModule) {
    throw new Error('Не вказано цільовий модуль');
  }
  if (!lessonId) {
    throw new Error('Не вказано ідентифікатор уроку');
  }
  const res = await fetch(`${base_url}/admin/education/lessons/change_module/${lessonId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ moduleId: targetModule }),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    const message = errorBody?.message || 'Помилка зміни уроку';
    throw new Error(message);
  }
  return res.json();
};

export const useLessonMutation = ({ token, queryKey, onSuccessCallback }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, action, targetModule }) => {
      if (action === 'archive') return moveToArchive({ token, id });
      if (action === 'delete') return deleteLesson({ token, arrayOfIds: id });
      if (action === 'move') return changeModuleForLesson({ token, targetModule, lessonId: id });
    },
    onSuccess: () => {
      toast.success('Успішно');
      queryClient.invalidateQueries({ queryKey });
      onSuccessCallback?.();
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });
};
