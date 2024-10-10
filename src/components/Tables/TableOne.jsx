import BrandOne from "../../images/brand/brand-01.svg";
import BrandTwo from "../../images/brand/brand-02.svg";
import BrandThree from "../../images/brand/brand-03.svg";
import BrandFour from "../../images/brand/brand-04.svg";
import BrandFive from "../../images/brand/brand-05.svg";

const brandData = [
  {
    logo: BrandOne,
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const applicationData = [
  {
    user: {
      name: "Alice Johnson",
      photo: "https://example.com/photos/alice.jpg",
    },
    university: {
      name: "Harvard University",
      logo: "https://example.com/logos/harvard.png",
    },
    level: "Undergraduate",
    course: "Computer Science",
  },
  {
    user: {
      name: "Bob Smith",
      photo: "https://example.com/photos/bob.jpg",
    },
    university: {
      name: "Stanford University",
      logo: "https://example.com/logos/stanford.png",
    },
    level: "Graduate",
    course: "Data Science",
  },
  {
    user: {
      name: "Claire Lee",
      photo: "https://example.com/photos/claire.jpg",
    },
    university: {
      name: "MIT",
      logo: "https://example.com/logos/mit.png",
    },
    level: "Postgraduate",
    course: "Artificial Intelligence",
  },
  {
    user: {
      name: "Bob Smith",
      photo: "https://example.com/photos/bob.jpg",
    },
    university: {
      name: "Stanford University",
      logo: "https://example.com/logos/stanford.png",
    },
    level: "Graduate",
    course: "Data Science",
  },
  {
    user: {
      name: "Claire Lee",
      photo: "https://example.com/photos/claire.jpg",
    },
    university: {
      name: "MIT",
      logo: "https://example.com/logos/mit.png",
    },
    level: "Postgraduate",
    course: "Artificial Intelligence",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Recent Applications
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              User
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              University
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Level
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Course
            </h5>
          </div>
        </div>

        {applicationData.map((application, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className=" gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {application?.user?.name}
              </p>
            </div>

            <div className="p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {application?.university?.name}
              </p>
            </div>

            <div className="p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{application.level}</p>
            </div>

            <div className="hidden p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{application.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
