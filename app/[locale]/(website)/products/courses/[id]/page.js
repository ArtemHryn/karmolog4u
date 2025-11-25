'use client';
import { useEffect, useState } from 'react';
import { useParams, usePathname, redirect } from 'next/navigation';

import Container from '@/components/Common/Container/Container';
import HeroNav from '@/components/Common/HeroNav/HeroNav';
import list from '@/helper/products/coursesList';
import MeditationsDescriptions from '@/components/Products/Meditations/MeditationDetails/MeditationsDescriptions';
import ProductionCanBeInterestingSlider from '@/components/Common/ProductionCanBeInterestingSlider/ProductionCanBeInterestingSlider';

const CoursesDetails = () => {
  const [course, setCourse] = useState(null);
  const [canBeInteresting, setCanBeInteresting] = useState([]);

  const params = useParams();
  const pathname = usePathname();

  if (+params.id === 3) redirect('health-map-details');

  useEffect(() => {
    const allCourses = [...list.webinars, ...list.intensives];
    const currentCourse = allCourses.find(el => `${el.id}` === params.id);

    const coursesCanBeInteresting = allCourses.filter(
      el => el.category === currentCourse.category && el.id !== currentCourse.id
    );
    setCourse(currentCourse);
    setCanBeInteresting(coursesCanBeInteresting);
  }, [params.id]);

  if (!course) return null;

  const links = [
    { href: '/products/courses', name: { uk: 'Навчальні курси', ru: 'Учебные курсы' } },
    { href: pathname, name: course.name },
  ];

  return (
    <Container>
      <HeroNav linkNames={links} />
      <MeditationsDescriptions meditation={course} />
      <ProductionCanBeInterestingSlider slides={canBeInteresting} />
    </Container>
  );
};

export default CoursesDetails;
