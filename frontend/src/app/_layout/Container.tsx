
type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <section>
      <div className="container px-4 px-lg-5 my-5">
        {children}
      </div>
    </section>
  );
}

export default Container;