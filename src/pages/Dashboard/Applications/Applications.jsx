import BreadCrumbs from "../../../components/Dashboard/BreadCrumbs";

const Applications = () => {
  return (
    <div>
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
