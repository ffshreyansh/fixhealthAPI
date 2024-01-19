const express = require('express');
const app = express();
const PORT = 3000;

// Sample data for doctors
const doctors = [
  {
    id: 1,
    name: 'Dr. Rahul Kumar',
    expertise: 'Cardiologist',
    city: 'New York',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Dr. Neha Sharma',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Dr. Amrit Prabhat',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww',
  },
  {
    id: 4,
    name: 'Dr. Niharika Rai',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    name: 'Dr. Amit Kumar',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww',
  },
  {
    id: 6,
    name: 'Dr. Prashant Jain',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww',
  },
  {
    id: 7,
    name: 'Dr. Saurabh Kumar',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    name: 'Dr. Jane Smith',
    expertise: 'Dermatologist',
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
  },
  // Add more doctors as needed
];

// Endpoint to get the list of doctors
app.get('/doctors', (req, res) => {
    const { city } = req.query;
  
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }
  
    const filteredDoctors = doctors.filter((doctor) => doctor.city.toLowerCase() === city.toLowerCase());
    res.json(filteredDoctors);
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
