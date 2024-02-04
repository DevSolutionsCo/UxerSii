import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
function Ranking() {
  const data = [
    { name: "dsds", donaciones: "200" },
    { name: "Pedro", donaciones: "555" },
    { name: "Vegetta77", donaciones: "222" },
  ];
  console.log("flhjhkjfhk");

  return (
    <>
      <div className="">
        <BarChart
          width={360}
          height={320}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="donaciones" stackId="a" fill="#A9DFE1" />
        </BarChart>
      </div>
    </>
  );
}

export default Ranking;
