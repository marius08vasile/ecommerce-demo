
type Props = {
  title: string,
  description?: string,
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <header className="bg-primary-2 py-5">
      <div className="container px-4 px-lg-5 my-4">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">{title}</h1>
          {description &&
            <p className="lead fw-normal text-white-50 mb-0">{description}</p>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;