import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      Error: 404 Not Found
    </div>
  );
};

export default ErrorPage;
