import ChartTree from '@components/Common/Icons/ConsultationsIcons/ChartTree';
import Comments from '@components/Common/Icons/ConsultationsIcons/Comments';
import Crown from '@components/Common/Icons/ConsultationsIcons/Crown';
import Football from '@components/Common/Icons/ConsultationsIcons/Football';
import HourGlass from '@components/Common/Icons/ConsultationsIcons/HourGlass';
import Octogram from '@components/Common/Icons/ConsultationsIcons/Octogram';
import SadSmile from '@components/Common/Icons/ConsultationsIcons/SadSmile';
import Stethoscope from '@components/Common/Icons/ConsultationsIcons/Stethoscope';

const reasons = [
  {
    icon: SadSmile,
    text: {
      uk: 'Ви не вірите у свої сили та успіх. Вам заважає нерішучість, критичність та комплекси',
      ru: 'Вы не верите в свои силы и успех. Вам мешает нерешительность, критичность и комплексы',
    },
  },
  {
    icon: Comments,
    text: {
      uk: 'У вас є недовіра й закритість до оточення та світу',
      ru: 'У вас есть недоверие и закрытость к окружающим и миру',
    },
  },
  {
    icon: HourGlass,
    text: {
      uk: 'Ви проявляєте авторитарність, контроль та не бажання розуміти точку зору інших',
      ru: 'Вы проявляете авторитарность, контроль и нежелание понимать точку зрения других',
    },
  },
  {
    icon: Crown,
    text: {
      uk: 'Часто виявляєте гордість, осуд, агресію та сумніви',
      ru: 'Часто проявляете гордость, осуждение, агрессию и сомнения',
    },
  },
  {
    icon: Football,
    text: {
      uk: 'Відчуваєте невпевненість в собі та залежні від думок інших людей, акцент тільки на зовнішності',
      ru: 'Чувствуете неуверенность в себе и зависимы от мнения других людей, фокусируетесь только на внешности',
    },
  },
  {
    icon: ChartTree,
    text: {
      uk: 'Не розумієте причинно-наслідковий зв’язок, часто винуватите інших у своїх проблемах',
      ru: 'Не понимаете причинно-следственную связь, часто вините других в своих проблемах',
    },
  },
  {
    icon: Stethoscope,
    text: {
      uk: 'Проявляєте нелюбов до себе та інших, байдужість до здоров’я та зовнішнього вигляду',
      ru: 'Проявляете нелюбовь к себе и другим, равнодушие к здоровью и внешнему виду',
    },
  },
  {
    icon: Octogram,
    text: {
      uk: 'У вас присутні пасивність, наївність, відсутність цілей в житті та страх зробити перший крок',
      ru: 'У вас присутствуют пассивность, наивность, отсутствие целей в жизни и страх сделать первый шаг',
    },
  },
];

export default reasons;
