import toast from "react-hot-toast";
import Input from "../Input/Input";

const Modal = () => {
  const handleAddUniversity = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const logo = form.logo.files[0];
    const country = form.country.value;
    const address = form.address.value;

    // * Validations
    // If all fields are empty
    if (name === "" && logo === undefined && country === "" && address === "") {
      return toast.error("All fields are required!");
    }
    // If name field is empty
    else if (name === "") {
      return toast.error("Please provide university name!");
    }
    // If logo field is empty
    else if (logo === undefined || logo === null || logo === "") {
      return toast.error("Please upload university logo!");
    }
    // If country field is empty
    else if (country === "") {
      return toast.error("Please provide country!");
    }
    // If address field is empty
    else if (address === "") toast.error("Please provide address!");
  };
  return (
    <>
      <dialog id="addUniversity" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Add University</h3>
          <div>
            <form onSubmit={handleAddUniversity} className="mt-5">
              <div className="mb-4">
                <Input
                  label="University Name"
                  type="text"
                  name="name"
                  placeholder="Enter university name"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="University Logo"
                  type="file"
                  name="logo"
                  placeholder="Upload Logo"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="Enter country"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Address"
                  type="text"
                  name="address"
                  placeholder="Enter address"
                />
              </div>
              <div className="text-center">
                {" "}
                <button type="submit" className="btn btn-primary w-full">
                  Add University
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog" className="flex items-center">
              <button className="btn btn-sm btn-circle absolute right-0 top-0">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
