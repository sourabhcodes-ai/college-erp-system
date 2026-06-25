import Sidebar from "../components/Sidebar";

function Dashboard() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-gray-100 min-h-screen">

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <div className="bg-white p-6 rounded-lg shadow mt-6">

                    <h2 className="text-xl font-semibold">
                        Welcome {user?.id}
                    </h2>

                    <p className="mt-2">
                        Role: {user?.role}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;