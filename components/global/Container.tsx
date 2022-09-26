type ContainerProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div className="w-full max-w-[1440px] mr-auto ml-auto z-[1]">{children}</div>
);
export default Container;
