type Props = {
  children: React.ReactNode;
  subTitle?: boolean;
};
const Title = ({ children, subTitle }: Props) => {
  return subTitle ? (
    <h2 className='text-6xl text-primary font-bold mb-3 mt-1'>{children}</h2>
  ) : (
    <h1 className='block text-6xl font-bold mb-1'>{children}</h1>
  );
};
export { Title };
