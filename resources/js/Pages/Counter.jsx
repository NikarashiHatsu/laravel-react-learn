import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Counter({ auth }) {
    const [count, setCount] = useState(0);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Counter App</h2>}
        >
            <Head title="Counter App" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <p className="text-gray-900 dark:text-gray-100 text-2xl text-center mb-6">
                            { count }
                        </p>

                        <div className="flex items-center justify-center space-x-4">
                            <button
                                onClick={() => setCount(count + 1)}
                                className='transition duration-300 ease-in-out px-4 py-2 rounded dark:text-white bg-lime-500 hover:bg-lime-600'
                            >
                                Tambah
                            </button>

                            <button
                                onClick={() => setCount(0)}
                                className='transition duration-300 ease-in-out px-4 py-2 rounded dark:text-white bg-red-500 hover:bg-red-600'
                            >
                                Reset
                            </button>

                            <button
                                onClick={() => setCount(count - 1)}
                                className='transition duration-300 ease-in-out px-4 py-2 rounded dark:text-white bg-lime-500 hover:bg-lime-600'
                            >
                                Kurangi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
