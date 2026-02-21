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
    title: 'مدیر و موسس اصلی',
    bio: 'مدیر و مؤسس آکادمی هشتاد و چهار',
    image: '/images/teachers/ali-ghasemian.png',
    specialties: [],
  },
  {
    id: '2',
    name: 'داوود ملک',
    title: 'مدرس تصویربرداری',
    bio: 'مدرس دوره تصویربرداری در آکادمی 84',
    image: '/images/teachers/داوود%20ملک.jpg',
    specialties: ['تصویربرداری', 'فیلمبرداری'],
  },
  {
    id: '3',
    name: 'رضا نصیری',
    title: 'مدرس تولید محتوا و موبایلگرافی',
    bio: 'مدرس دوره‌های تولید محتوا و موبایلگرافی در آکادمی 84',
    image: '/images/teachers/رضا-نصیری.jpg',
    specialties: ['تولید محتوا', 'موبایلگرافی'],
  },
  {
    id: '4',
    name: 'حسین کاوند',
    title: 'مدرس برنامه نویسی وب',
    bio: 'مدرس دوره برنامه نویسی وب در آکادمی 84',
    image: '/images/teachers/حسین%20کاوند.jpg',
    specialties: ['برنامه نویسی وب'],
  },
  {
    id: '5',
    name: 'یوسف صادقی',
    title: 'مدرس طراحی و گرافیک',
    bio: 'مدرس دوره طراحی و گرافیک در آکادمی 84',
    image: '/images/teachers/یوسف%20صادقی.jpg',
    specialties: ['طراحی گرافیک'],
  },
];

export function getAllTeachers(): Teacher[] {
  return teachers;
}

