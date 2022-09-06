import type { PluginOption } from 'vite';

const vitePluginRedirect = (redirectMap: Record<string, string>): PluginOption => ({
  name: 'redirect',
  configureServer: (server) => {
    server.middlewares.use((req, res, next) => {
      if (req.url && redirectMap[req.url] !== undefined) {
        res.statusCode = 307;
        res.setHeader('Location', redirectMap[req.url]);
        res.setHeader('Content-Length', '0');
        res.end();
      } else {
        next();
      }
    });
  }
});

export default vitePluginRedirect;
