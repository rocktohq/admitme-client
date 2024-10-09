import { Helmet } from "react-helmet-async";
import BreadCrumbs from "../../../components/Dashboard/BreadCrumbs";
import { Link } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { MdUpdate } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../../../components/shared/NotFound";
import Modal from "../../../components/shared/Modal/Modal";

const Universities = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleModalOpen = () => {
    document.getElementById("addUniversity").showModal();
  };
  const {
    data: universities = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["universities", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/universities?page=${currentPage}&size=${itemsPerPage}`
      );
      setCount(res.data.universityCount);
      return res.data.universities;
    },
  });

  // Pagination
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Universities | Dashboard</title>
      </Helmet>
      <BreadCrumbs
        links={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Universities", to: "/dashboard/universities" },
        ]}
      />
      <div className="mt-5">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-lg font-medium">University List</h2>
          <button onClick={handleModalOpen} className="btn btn-primary rounded">
            Add University
          </button>
          <Modal />
        </div>
        {universities.length === 0 ? (
          <NotFound message={"No university found!"} />
        ) : (
          <div>
            <div className="overflow-x-auto mt-10">
              <table className="table table-auto">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="hidden md:table-cell">Logo</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th className="hidden md:table-cell">Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {universities.length > 0 &&
                    universities.map((university, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                          <div className="avatar hidden sm:table-cell">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={university?.photo}
                                alt={university?.name}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap capitalize">
                          {university?.name}
                        </td>
                        <td className="whitespace-nowrap capitalize">
                          {university?.country}
                        </td>
                        <td className="whitespace-nowrap capitalize">
                          {university?.address}
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <button className="font-bold text-2xl text-error">
                              <FiDelete />
                            </button>
                            <button className="font-bold text-2xl text-black">
                              <MdUpdate />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="p-2 shadow w-fit rounded mt-10 mx-auto">
              <p className="mb-3">
                Current Page:{" "}
                <span className="font-semibold">{currentPage + 1}</span>{" "}
              </p>
              <div className="space-x-3">
                <button onClick={handlePrevPage}>&larr; Prev</button>
                {pages.map((page) => (
                  <button
                    className={`${
                      currentPage === page
                        ? "btn-primary btn-outline"
                        : "btn-primary"
                    } btn btn-sm rounded`}
                    onClick={() => setCurrentPage(page)}
                    key={page}
                  >
                    {page + 1}
                  </button>
                ))}
                <button onClick={handleNextPage}>Next &rarr;</button>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPage}
                  name=""
                  id=""
                  className="border px-3 py-2 rounded"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Universities;
