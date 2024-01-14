    const fs = require('fs');

    // Function to read existing JSON data from file
    const readJsonFile = (filename) => {
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // If the file doesn't exist or is invalid JSON, return an empty object
        return {};
    }
    };

    // Function to write JSON data to file
    const writeJsonFile = (filename, data) => {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
    };

    // Function to save user data
    const saveUserData = (userData) => {
        const filename = 'user-data.json';
        const existingData = readJsonFile(filename);

        // Merge existing data with new user data
        const newData = { ...existingData, ...userData };

        // Write the updated data back to the file
        writeJsonFile(filename, newData);

        console.log('User data saved successfully!');
    };

    // Example: Save user data
    const userData = {
        username: 'john_doe',
        email: 'john@example.com',
        age: 25,
        address: '10 Deltahacks'
    };

    saveUserData(userData);
