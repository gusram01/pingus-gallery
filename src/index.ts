import app from './app';

const port = app.get('port');

app.listen(port, () => console.log(`Server listen on port: ${port}`));
