import { useRouter } from 'next/router';

export const toTitleCase = (string: string) =>
  string.replace('-', ' ').replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

const useGenerateBreadcrumbs = () => {
  const { asPath } = useRouter();

  const breadcrumbs =
    asPath &&
    asPath
      .substring(1)
      .split('#')[0]
      .split('/')
      .reduce((acc, cur) => {
        const id = cur;
        const label = toTitleCase(cur);
        const link = [...acc.map(crumbs => crumbs.link), cur].join('/');

        return [...acc, { id, label, link }];
      }, []);

  return breadcrumbs;
};

export default useGenerateBreadcrumbs;
