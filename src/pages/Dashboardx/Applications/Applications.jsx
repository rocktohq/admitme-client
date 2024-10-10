import BreadCrumbs from "../../../components/Dashboard/BreadCrumbs";
import PageTitle from "../../../components/PageTitle";

const Applications = () => {
  return (
    <div>
      <PageTitle title={"Applications"} />
      <BreadCrumbs
        links={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Applications", to: "/dashboard/applications" },
        ]}
      />
    </div>
  );
};

export default Applications;
