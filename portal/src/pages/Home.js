import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-xl font-bold text-gray-800">Logo</a>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
                            <li><a href="/" className="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="/" className="text-gray-600 hover:text-gray-800">Services</a></li>
                            <li><a href="/" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Projojo</h1>
                <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec aliquam tincidunt, nunc nisl luctus nunc, id tincidunt nisl nunc id nunc.</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">Get Started</button>
            </main>

            <footer className="bg-gray-200 py-4">
                <div className="container mx-auto text-center text-gray-600">
                    &copy; 2023 Projojo. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Home;
