export interface LessonItems {
  name: string;
  moduleDay: number;
  modulePart: number;
  id: string;
}

interface Access {
  dateStart: Date;
  dateEnd: Date;
}

export interface ModuleSectionProps {
  mod: {
    name: string;
    access: Access;
    lessonsList: LessonItems[];
    durationInDays: number;
  };
}

export interface AboutCourse {
  chat: string;
}
