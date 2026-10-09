import express from 'express';
import cors from 'cors';
import router from './containerRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/containers', router);
//for later de images, miss volumes en natuurlijk netwerken
// app.use('/api/images', imageRoutes);
// app.use('/api/volumes', volumeRoutes);
// app.use('/api/networks', networkRoutes);

app.get('/', (req, res) => {
  res.send('To Get All Container Data: /api/containers');
});
app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});