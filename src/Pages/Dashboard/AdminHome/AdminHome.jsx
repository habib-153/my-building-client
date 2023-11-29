/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
import { MdApartment } from "react-icons/md";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // const pieChatData = stats.map(data => {
  //   return { name: data.category, value: data.revenue}
  // })
  const pieChartData = [
    // { name: 'Apartments', value: stats?.apartmentPer },
    { name: 'Available', value: stats?.availablePer },
    { name: 'Booked', value: stats?.bookedPer },
  ];
  
  return (
    <div>
      <h2 className="flex gap-3 items-center">
        <span>Hi, Welcome </span>
        <div className="text-2xl font-semibold">
          {user?.displayName ? user.displayName : "Back"}
        </div>
      </h2>
      <div className="w-full">
        <div className="card mx-auto bg-base-100 shadow-xl">
          <figure className="w-full">
            <img className="w-[250px] rounded-full"
              src={user.photoURL}
              alt="img"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {user.displayName}
            </h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <SectionTitle heading="Stats"></SectionTitle>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-3xl text-secondary">
              <FaDollarSign></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats?.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-3xl">
              <FaUsers></FaUsers>
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{stats?.users}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-3xl">
            <FaUsers></FaUsers>
            </div>
            <div className="stat-title">Members</div>
            <div className="stat-value">{stats?.totalMembers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-3xl">
            <MdApartment />
            </div>
            <div className="stat-title">Apartments</div>
            <div className="stat-value">{stats?.apartments}</div>
          </div>
        </div>
      </div>
        <div className=" w-full">
          <PieChart className="mx-auto" width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
  );
};

export default AdminHome;
