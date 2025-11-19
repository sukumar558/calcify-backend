<!DOCTYPE html>
<html lang="en" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcify Pro - All Tools</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
        }
    </script>
    <style>
        .tool-card {
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .tool-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
    </style>
</head>
<body class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen transition-colors duration-500">
    <header class="shadow-md dark:shadow-lg bg-white dark:bg-gray-800 sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Calcify Pro 🧮</h1>
            <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path id="sun-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    <path id="moon-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
            </button>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-100">All Calculation & Conversion Tools</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="tools/age.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">1. Age Calculator 🎂</h3>
                <p class="text-gray-600 dark:text-gray-400">Calculate exact age, down to the day.</p>
            </a>
            <a href="tools/bmi.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">2. BMI Calculator 🏋️</h3>
                <p class="text-gray-600 dark:text-gray-400">Determine your Body Mass Index.</p>
            </a>
            <a href="tools/percentage.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">3. Percentage Calculator %</h3>
                <p class="text-gray-600 dark:text-gray-400">Find X percent of Y, or percentage increase/decrease.</p>
            </a>
            <a href="tools/gst.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">4. GST Calculator 💰</h3>
                <p class="text-gray-600 dark:text-gray-400">Calculate net/gross amount and GST components.</p>
            </a>
            <a href="tools/pf.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">5. PF / EPF Calculator 💵</h3>
                <p class="text-gray-600 dark:text-gray-400">Calculate Provident Fund contribution (Employee/Employer).</p>
            </a>
            <a href="tools/salary.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">6. Salary to Hourly ⏱️</h3>
                <p class="text-gray-600 dark:text-gray-400">Convert your annual salary to an hourly rate.</p>
            </a>
            <a href="tools/emi.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">7. Loan EMI Calculator 🏠</h3>
                <p class="text-gray-600 dark:text-gray-400">Calculate Equated Monthly Installment for a loan.</p>
            </a>
            <a href="tools/agediff.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">8. Age Difference Calculator 🧑‍🤝‍🧑</h3>
                <p class="text-gray-600 dark:text-gray-400">Find the time difference between two dates of birth.</p>
            </a>
            <a href="tools/time.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">9. Time Converter ⏰</h3>
                <p class="text-gray-600 dark:text-gray-400">Convert units of time (hours to seconds, etc.).</p>
            </a>
            <a href="tools/unit.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">10. Unit Converter 📏</h3>
                <p class="text-gray-600 dark:text-gray-400">Convert length, weight, volume, and more.</p>
            </a>
            <a href="tools/fuel.html" class="tool-card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400">
                <h3 class="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">11. Fuel Cost Calculator ⛽</h3>
                <p class="text-gray-600 dark:text-gray-400">Estimate the cost of fuel for a trip.</p>
            </a>
        </div>
    </main>

    <footer class="mt-12 py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
            &copy; 2025 Calcify Pro. All rights reserved. Built with Node.js & Tailwind CSS.
        </div>
    </footer>

    <script src="assets/js/script.js"></script>
</body>
</html>
