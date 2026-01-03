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
    image: '/images/teachers/ali-ghasemian.jpg',
    specialties: ['مدیریت کسب‌وکار', 'برنامه‌نویسی', 'استراتژی'],
  },
  {
    id: '2',
    name: 'فاطمه احمدی',
    title: 'مدرس طراحی و UI/UX',
    bio: 'طراح با تجربه در زمینه طراحی رابط کاربری و تجربه کاربری',
    image: '/images/teachers/fateme-ahmadi.jpg',
    specialties: ['طراحی UI/UX', 'طراحی گرافیک', 'طراحی تجربه کاربری'],
  },
  {
    id: '3',
    name: 'محمد رضایی',
    title: 'مدرس بازاریابی دیجیتال',
    bio: 'متخصص بازاریابی دیجیتال و سئو با تجربه در پروژه‌های بزرگ',
    image: '/images/teachers/mohammad-rezaei.jpg',
    specialties: ['بازاریابی دیجیتال', 'سئو', 'تبلیغات آنلاین'],
  },
];

export function getAllTeachers(): Teacher[] {
  return teachers;
}

