function Dashboard() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="bg-blue-600 text-white p-4 flex justify-between">

                <h1 className="text-xl font-bold">
                    College ERP
                </h1>

                <button
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Logout
                </button>

            </div>

            <div className="p-8">

                <h2 className="text-3xl font-bold">
                    Welcome {user?.id}
                </h2>

                <p className="mt-2 text-gray-600">
                    Role: {user?.role}
                </p>

            </div>

        </div>
    );
}

export default Dashboard;