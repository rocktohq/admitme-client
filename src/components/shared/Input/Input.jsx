const Input = ({ name, type, label, placeholder }) => {
  return (
    <>
      <label className="mb-2.5 block font-medium">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:focus:border-primary"
      />
    </>
  );
};

export default Input;
