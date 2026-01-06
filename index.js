const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoints for agent data
app.get('/api/agents', (req, res) => {
  // Return list of agents
  res.json({ agents: [] });
});

app.get('/api/agents/:id', (req, res) => {
  // Return specific agent data
  const agentId = req.params.id;
  res.json({ id: agentId, name: `Agent ${agentId}` });
});

app.listen(PORT, () => {
  console.log(`Agent Observability Dashboard running on port ${PORT}`);
});