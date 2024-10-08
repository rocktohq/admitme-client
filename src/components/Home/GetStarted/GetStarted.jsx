import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";
import Title from "../../shared/Title/Title";
import Container from "../../shared/Container/Container";

const GetStarted = ({ user }) => {
  return (
    <Container>
      <div className="text-center flex flex-col justify-center items-center">
        <Title heading={"Get Started with ApplyHere Today"} centered />
        <p className="text-neutral-600">
          <span className="border-b-2 border-primary">Free</span> forever.
          Upgrade when you need to.
        </p>
        <Link className="mt-10" to={user?.email ? "/dashboard" : "/signin"}>
          <Button primary text={"Get Started"} />
        </Link>
      </div>
    </Container>
  );
};

export default GetStarted;
