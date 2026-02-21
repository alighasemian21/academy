export interface Teacher {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'علی قاسمیان',
    title: 'مدیر و مدرس اصلی',
    bio: 'با بیش از 10 سال تجربه در مدیریت و آموزش، متخصص در زمینه کسب‌وکار و تکنولوژی',
    image: '/images/teachers/ali-ghasemian.png',
    specialties: ['مدیریت کسب‌وکار', 'برنامه‌نویسی', 'استراتژی'],
  },
  {
    id: '2',
    name: 'فاطمه احمدی',
    title: 'مدرس طراحی و UI/UX',
    bio: 'طراح با تجربه در زمینه طراحی رابط کاربری و تجربه کاربری',
    image: '/images/teachers/fateme-ahmadi.png',
    specialties: ['طراحی UI/UX', 'طراحی گرافیک', 'طراحی تجربه کاربری'],
  },
  {
    id: '3',
    name: 'محمد رضایی',
    title: 'مدرس بازاریابی دیجیتال',
    bio: 'متخصص بازاریابی دیجیتال و سئو با تجربه در پروژه‌های بزرگ',
    image: '/images/teachers/mohammad-rezaei.png',
    specialties: ['بازاریابی دیجیتال', 'سئو', 'تبلیغات آنلاین'],
  },
  {
    id: '4',
    name: 'داوود ملک',
    title: 'مدرس تصویربرداری',
    bio: 'مدرس دوره تصویربرداری در آکادمی 84',
    image: '/images/teachers/placeholder-teacher.svg',
    specialties: ['تصویربرداری', 'فیلمبرداری'],
  },
  {
    id: '5',
    name: 'رضا نصیری',
    title: 'مدرس تولید محتوا و موبایلگرافی',
    bio: 'مدرس دوره‌های تولید محتوا و موبایلگرافی در آکادمی 84',
    image: '/images/teachers/placeholder-teacher.svg',
    specialties: ['تولید محتوا', 'موبایلگرافی'],
  },
  {
    id: '6',
    name: 'حسین کاوند',
    title: 'مدرس برنامه نویسی وب',
    bio: 'مدرس دوره برنامه نویسی وب در آکادمی 84',
    image: '/images/teachers/placeholder-teacher.svg',
    specialties: ['برنامه نویسی وب'],
  },
  {
    id: '7',
    name: 'یوسف صادقی',
    title: 'مدرس طراحی و گرافیک',
    bio: 'مدرس دوره طراحی و گرافیک در آکادمی 84',
    image: '/images/teachers/placeholder-teacher.svg',
    specialties: ['طراحی گرافیک'],
  },
];

export function getAllTeachers(): Teacher[] {
  return teachers;
}

