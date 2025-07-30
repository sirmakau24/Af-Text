// updateProgress.js
import fs from 'fs';
import path from 'path';

const today = new Date().toISOString().split('T')[0];

const logEntry = `### ${today}
- [x] Socket.IO integrated successfully 💬
- [x] MongoDB message storage tested 🧠
- [x] Login screen functional 🔐
`;

const filepath = path.join(process.cwd(), 'project-progress.md');

const header = `# AfriText Chat App – Project Progress & Monetization Plan

---

## 📝 Daily Build Logs
`;

function updateProgress() {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, header + '\n' + logEntry, 'utf8');
    console.log('📁 Created new project-progress.md');
  } else {
    const prev = fs.readFileSync(filepath, 'utf8');
    if (!prev.includes(today)) {
      const updated = prev + '\n' + logEntry;
      fs.writeFileSync(filepath, updated, 'utf8');
      console.log(`✅ Progress updated for ${today}`);
    } else {
      console.log(`⏸️ Already logged for ${today}`);
    }
  }
}

updateProgress();