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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specialties: ['مدیریت کسب‌وکار', 'برنامه‌نویسی', 'استراتژی'],
  },
  {
    id: '2',
    name: 'فاطمه احمدی',
    title: 'مدرس طراحی و UI/UX',
    bio: 'طراح با تجربه در زمینه طراحی رابط کاربری و تجربه کاربری',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specialties: ['طراحی UI/UX', 'طراحی گرافیک', 'طراحی تجربه کاربری'],
  },
  {
    id: '3',
    name: 'محمد رضایی',
    title: 'مدرس بازاریابی دیجیتال',
    bio: 'متخصص بازاریابی دیجیتال و سئو با تجربه در پروژه‌های بزرگ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specialties: ['بازاریابی دیجیتال', 'سئو', 'تبلیغات آنلاین'],
  },
];

export function getAllTeachers(): Teacher[] {
  return teachers;
}

