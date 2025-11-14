type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto w-full max-w-6xl px-6 sm:px-8">
      {children}
    </div>
  );
};

export default Container;
