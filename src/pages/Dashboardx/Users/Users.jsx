import { FiDelete } from "react-icons/fi";
import BreadCrumbs from "../../../components/Dashboard/BreadCrumbs";
import { MdUpdate } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import NotFound from "../../../components/shared/NotFound";
import PageTitle from "../../../components/PageTitle";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const {
    data: allUsers = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allUsers", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/users?page=${currentPage}&size=${itemsPerPage}`
      );
      setCount(res.data.userCount);
      return res.data.users;
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
    <main>
      <PageTitle title="Users" />
      <BreadCrumbs
        links={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Users", to: "/dashboard/users" },
        ]}
      />
      {allUsers.length === 0 ? (
        <NotFound message={"No user found!"} />
      ) : (
        <div>
          <div className="overflow-x-auto mt-10">
            <table className="table table-auto">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Basic Info</th>
                  <th className="hidden md:table-cell">Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allUsers.length > 0 &&
                  allUsers.map((user, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <div className="avatar hidden sm:table-cell">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={user?.photo} alt={user?.name} />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold">{user?.name}</h3>
                            <dl className="md:hidden">
                              <dt className="sr-only">Email</dt>
                              <dd>{user?.email}</dd>
                            </dl>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap hidden md:table-cell">
                        {user?.email}
                      </td>
                      <td className="whitespace-nowrap capitalize">
                        {user?.role}
                      </td>
                      <td>
                        {user?.role === "admin" ? (
                          ""
                        ) : (
                          <div className="flex items-center gap-2">
                            <button className="font-bold text-2xl text-error">
                              <FiDelete />
                            </button>
                            <button className="font-bold text-2xl text-black">
                              <MdUpdate />
                            </button>
                          </div>
                        )}
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
              <span className="font-medium">{currentPage + 1}</span>{" "}
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
    </main>
  );
};

export default Users;
