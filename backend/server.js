const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data - Team Members (15-30 arası)
const teamMembers = [];
const names = [
  'Ahmet Yılmaz', 'Ayşe Demir', 'Mehmet Kaya', 'Fatma Şahin', 'Ali Öztürk',
  'Zeynep Çelik', 'Mustafa Arslan', 'Elif Yıldız', 'Can Aydın', 'Selin Doğan',
  'Burak Koç', 'Deniz Aslan', 'Cemre Yıldırım', 'Emre Çakır', 'İrem Özdemir',
  'Kaan Kara', 'Leyla Şimşek', 'Onur Taş', 'Pınar Güler', 'Rıza Özkan',
  'Seda Bulut', 'Tolga Erdoğan', 'Umut Çınar', 'Vildan Acar', 'Yiğit Güneş'
];

for (let i = 1; i <= 25; i++) {
  const titles = [
    'Senior Software Engineer', 'Product Manager', 'UX Designer',
    'Data Scientist', 'DevOps Engineer', 'Frontend Developer',
    'Backend Developer', 'Full Stack Developer', 'QA Engineer',
    'Marketing Manager', 'Sales Director', 'HR Specialist'
  ];
  
  teamMembers.push({
    id: i,
    name: names[i - 1] || `Team Member ${i}`,
    title: titles[Math.floor(Math.random() * titles.length)],
    picture: `https://i.pravatar.cc/150?img=${i}`
  });
}

// Mock data - Jobs (5-10 arası)
const jobs = [
  { id: 1, title: 'Senior Frontend Developer', url: 'https://company.com/jobs/senior-frontend' },
  { id: 2, title: 'Backend Engineer', url: 'https://company.com/jobs/backend-engineer' },
  { id: 3, title: 'Product Designer', url: 'https://company.com/jobs/product-designer' },
  { id: 4, title: 'Data Analyst', url: 'https://company.com/jobs/data-analyst' },
  { id: 5, title: 'DevOps Specialist', url: 'https://company.com/jobs/devops' },
  { id: 6, title: 'Marketing Manager', url: 'https://company.com/jobs/marketing' },
  { id: 7, title: 'Sales Representative', url: 'https://company.com/jobs/sales' },
  { id: 8, title: 'QA Engineer', url: 'https://company.com/jobs/qa-engineer' }
];

// GET /team_members
app.get('/team_members', (req, res) => {
  res.json(teamMembers);
});

// GET /jobs
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// POST /job/:id
app.post('/job/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, linkedinUrl } = req.body;

  // Validasyon: Tüm alanlar mevcut ve boş olmamalı
  if (!name || !email || !linkedinUrl) {
    return res.status(400).json({ 
      error: 'Tüm alanlar zorunludur: name, email, linkedinUrl' 
    });
  }

  // Email format kontrolü (basit regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Geçersiz email formatı' 
    });
  }

  // LinkedIn URL format kontrolü
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/.*$/i;
  if (!linkedinRegex.test(linkedinUrl)) {
    return res.status(400).json({ 
      error: 'LinkedIn URL formatı geçersiz. LinkedIn profil URL\'si olmalıdır.' 
    });
  }

  // Job ID kontrolü (opsiyonel)
  const job = jobs.find(j => j.id === parseInt(id));
  if (!job) {
    return res.status(404).json({ 
      error: 'İş ilanı bulunamadı' 
    });
  }

  // Başarılı
  res.status(200).json({ 
    message: 'Başvuru başarıyla gönderildi',
    jobTitle: job.title,
    candidate: { name, email, linkedinUrl }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Backend server ${PORT} portunda çalışıyor`);
});