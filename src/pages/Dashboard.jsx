import LastProject from "../components/lastProject";

function Dashboard() {
  return (
    <div className="h-full w-full grid gap-4 grid-cols-4 grid-rows-4 bg-background">
      <div className="col-start-1 col-end-3 p-4  bg-background-secondary rounded-2xl">
        <LastProject />
      </div>
      <div className="col-start-3 col-end-5 bg-background-secondary rounded-2xl"></div>
    </div>
  );
}

export default Dashboard;
