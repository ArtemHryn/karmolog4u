import Container from "@components/Common/Container/Container";
import NavLinks from "./NavLinks";
import InternalNavTitle from "@components/Common/InternalNavTitle/InternalNavTitle";

const links = [{ href: "/offline-meetings", name: "Офлайн зустрічі" }];

const Navigation = () => {
  return (
    <Container>
      <InternalNavTitle links={links} title={"ОФЛАЙН-ЗУСТРІЧІ"} />
      <NavLinks />
    </Container>
  );
};

export default Navigation;
