export interface LessonItems {
  name: string;
  moduleDay: number;
  modulePart: number;
  id: string;
  lessonTimeStart: Date;
  lessonTimeEnd: Date;
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

type PaymentMethod = 'telegram' | 'wayForPay' | 'requisites';

type AllowedPayments = Record<PaymentMethod, boolean>;

export interface AboutCourse {
  chat: string;
  id: string;
  type: string;
  purchaseInfo: { completed: boolean; paymentPlan: 'FULL' | 'INSTALLMENT'; practiceAmount: number };
  numberOfPractices: number;
  paymentTypes: { allowed: AllowedPayments; requisitesText?: string };
  name: string;
}

export interface AgreementBodyProps {
  user: {
    name?: string;
    lastName?: string;
    mobPhone?: string;
  };
}

export interface BonusLinkItem {
  link: string;
  name?: string;
  author?: string;
}
