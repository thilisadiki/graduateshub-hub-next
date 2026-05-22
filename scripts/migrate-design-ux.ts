import fs from 'fs';
import path from 'path';
import { designUxTasks } from '../data/portfolioTasks/designUx';

const OUT_DIR = path.join(__dirname, '../data/portfolioTasks/design-ux');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

designUxTasks.forEach((task) => {
  const filePath = path.join(OUT_DIR, `${task.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(task, null, 2), 'utf-8');
});

console.log(`Successfully migrated ${designUxTasks.length} tasks to ${OUT_DIR}`);
