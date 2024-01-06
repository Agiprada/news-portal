import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        {/* You're logged in! */}
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered input-accent w-full m-2 bg-white"
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered input-accent w-full m-2 bg-white"
                        />
                        <input
                            type="text"
                            placeholder="category"
                            className="input input-bordered input-accent w-full m-2 bg-white"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
