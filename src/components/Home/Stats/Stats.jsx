const Stats = () => {
  const stats = [
    { id: 1, name: "Registred Users", value: "8,000" },
    { id: 2, name: "Universities", value: "700" },
    { id: 3, name: "Happy Students", value: "6,000" },
    { id: 4, name: "Total Applications", value: "16,000" },
  ];

  return (
    <div className="text-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
