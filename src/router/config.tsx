
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const HistoryPage = lazy(() => import('../pages/history/page'));
const MissionVisionPage = lazy(() => import('../pages/mission-vision/page'));
const DirectorMessagePage = lazy(() => import('../pages/director-message/page'));
const OurStrengthPage = lazy(() => import('../pages/our-strength/page'));
const QualityPolicyPage = lazy(() => import('../pages/quality-policy/page'));
const CoreValuesPage = lazy(() => import('../pages/core-values/page'));
const WhyAviyuktPage = lazy(() => import('../pages/why-aviyukt/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  { path: '/contact', element: <ContactPage /> },
  {
    path: '/about',
    element: <AboutPage />
  },
  { path: '/history', element: <HistoryPage /> },
  { path: '/mission-vision', element: <MissionVisionPage /> },
  { path: '/director-message', element: <DirectorMessagePage /> },
  { path: '/our-strength', element: <OurStrengthPage /> },
  { path: '/quality-policy', element: <QualityPolicyPage /> },
  { path: '/core-values', element: <CoreValuesPage /> },
  { path: '/why-aviyukt', element: <WhyAviyuktPage /> },
];

export default routes;
