import Container from "../Container/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 py-10">
      <Container>
        <p className="text-center text-white">
          All rights reserved &copy; ApplyHere {currentYear}.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
