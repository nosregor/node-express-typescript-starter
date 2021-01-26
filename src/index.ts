import server from './server';

const PORT: string = server.get('port');

server.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${PORT}`,
  );
});
