'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import LessonTitle from './LessonDetailsParts/LessonTitle/LessonTitle';
import { base_url } from '@helper/consts';
import styles from './LessonsDetails.module.scss';
import LessonDescription from './LessonDetailsParts/LessonDescription/LessonDescription';
import LessonVideos from './LessonDetailsParts/LessonVideos/LessonVideos';
import LessonBonusFiles from './LessonDetailsParts/LessonBonusFiles/LessonBonusFiles';
import Recommendations from './LessonDetailsParts/Recommendations/Recommendations';
import Homework from './LessonDetailsParts/Homework/Homework';
import AdditionalLinks from './LessonDetailsParts/AdditionalLinks/AdditionalLinks';
import Feedbacks from './LessonDetailsParts/Feedbacks/Feedbacks';

interface LessonProps {
  token: string;
  id: string;
}

const fetchLesson = async (token: string, id: string) => {
  const res = await fetch(`${base_url}/user/education/lesson/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження уроку');
  }
  return res.json();
};

const LessonsDetails = ({ token, id }: LessonProps) => {
  const { data: lesson } = useSuspenseQuery({
    queryKey: ['lesson', id],
    queryFn: async () => fetchLesson(token, id),
  });

  console.log(lesson);

  return (
    <div className={styles.wrapper}>
      <LessonTitle title={lesson.name} />
      {lesson.description && <LessonDescription description={lesson.description} />}
      {lesson.videoLinks.length > 0 && <LessonVideos videoLinks={lesson.videoLinks} />}
      {lesson.bonusFiles.length > 0 && <LessonBonusFiles files={lesson.bonusFiles} />}
      {lesson.recommendations && <Recommendations rec={lesson.recommendations} />}
      {(lesson.homework || lesson.homeWorkFiles?.length > 0) && (
        <Homework homework={lesson.homework} homeworkFiles={lesson.homeworkFiles} />
      )}
      {lesson.additionalLinks.length > 0 && <AdditionalLinks list={lesson.additionalLinks} />}
      <Feedbacks feedbacks={lesson.feedbacks} />
    </div>
  );
};

export default LessonsDetails;
