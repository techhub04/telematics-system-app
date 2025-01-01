import Header from "../../layouts/header/header";

const Dashboard = () => {
  return (
    <section>     
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Thematic 1</h3>
              <p className="mt-2">Details about Thematic 1.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Thematic 2</h3>
              <p className="mt-2">Details about Thematic 2.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Thematic 3</h3>
              <p className="mt-2">Details about Thematic 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
