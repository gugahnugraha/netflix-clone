app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/tvshows', require('./routes/tvShows'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});