export enum CourseInfoHeaderWithChatType {
  SSK_WITH_CURATOR = 'SSK_WITH_CURATOR',
  SSK_WITH_SERGIY = 'SSK_WITH_SERGIY',
  SSK_INDEPENDENT = 'SSK_INDEPENDENT',
}

export interface CourseInfoHeaderWithChatProps {
  type: CourseInfoHeaderWithChatType;
  completed?: boolean;
  chat?: string;
}

export interface SSKLessonListItem {
  id: number;
  name: string;
  internalDescription: string;
  isAvailable: boolean;
}

export interface CourseInfoHeaderProps {
  token: string;
  id: string;
}

export interface LessonDetailsProps {
  params: { lesson_id: string; course_id: string };
}

export interface LessonVideosProps {
  name: string;
  link: string;
}

export interface BonusFileProps {
  id: string;
  originalName: string;
  savedName: string;
}
