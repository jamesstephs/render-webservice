const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
  education: {
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    year: '2nd Year Student (2023-2024)',
    university: 'University of Southern Philippines Foundation (USPF)'
  },

  highschools: [
    'Junior Highschool (JHS)',
    'Gr7-G10 (2015-2020)',
    'University of San Carlos North Campus (USC NC)',
  ],

  skills: [
    'Average proficiency in front-end technologies: HTML, CSS, and JavaScript.',
    'Strong graphic design skills.',
    '10 years of experience in video editing.',
    'Excellent communication and teamwork abilities.'
  ],

  experience: [
    'Proficient video editor with a decade of experience.',
    'Extensive skills in crafting compelling visual narratives across multiple platforms.',
    'Dedication to excellence demonstrated through a side hustle in video editing.'
  ],
  awards: [
    'Dean\'s List, USPF',
    '1st placer in intramurals softball'
  ],
  personalInfo: {
    name: 'James Stephen B Dikitanan',
    address: 'Lahug, Cebu City',
    phoneNumber: '09430518711',
    email: 'jdikitanan_ccs@uspf.edu.ph',
    birthdate: 'June 7 2003',
    sex: 'Male'
  }
};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
