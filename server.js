const path = require("path");
const express = require("express");
const compression = require("compression");

const { business, navLinks, services, differentiators, process: workProcess, faq, blogPosts } = require("./data/site");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(compression());

// Serve WebP automaticamente quando o browser suporta, sem mudar o HTML
app.use((req, res, next) => {
  if (/\.(png|jpe?g)$/i.test(req.path) && req.accepts("image/webp")) {
    const webpPath = path.join(__dirname, "public", req.path.replace(/\.(png|jpe?g)$/i, ".webp"));
    const fs = require("fs");
    if (fs.existsSync(webpPath)) {
      res.setHeader("Vary", "Accept");
      res.setHeader("Content-Type", "image/webp");
      res.setHeader("Cache-Control", "public, max-age=2592000");
      return res.sendFile(webpPath);
    }
  }
  next();
});

app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "30d",
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
      if (filePath.endsWith(".woff2")) res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    },
  })
);

// Redireciona www → sem www (canonical definitivo pra SEO)
app.use((req, res, next) => {
  if (req.headers.host && req.headers.host.startsWith("www.")) {
    return res.redirect(301, `https://${req.headers.host.replace(/^www\./, "")}${req.url}`);
  }
  next();
});

// Redireciona trailing slash (ex: /servicos/ → /servicos)
app.use((req, res, next) => {
  if (req.path !== "/" && req.path.endsWith("/")) {
    const clean = req.path.slice(0, -1) + (Object.keys(req.query).length ? "?" + new URLSearchParams(req.query) : "");
    return res.redirect(301, clean);
  }
  next();
});

// Dados globais disponíveis em toda view, sem precisar passar em cada render().
app.use((req, res, next) => {
  res.locals.business = business;
  res.locals.navLinks = navLinks;
  res.locals.currentPath = req.path;
  res.locals.year = new Date().getFullYear();
  next();
});

function canonical(p) {
  return `${business.siteUrl}${p === "/" ? "" : p}`;
}

app.get("/", (req, res) => {
  res.render("home", {
    services, differentiators, workProcess, faq,
    meta: {
      title: "Agência de Marketing em Cotia | Kazuki Marketing",
      description: "Agência de marketing em Cotia especializada em SEO local, Google Meu Negócio e sites de alta performance. +12 anos de experiência no setor de alimentação. Fale com a Kazuki.",
      canonical: canonical("/"),
      ogType: "website",
      h1: "Agência de Marketing em Cotia especializada em SEO Local",
    },
  });
});

app.get("/servicos", (req, res) => {
  res.render("servicos", {
    services,
    meta: {
      title: "Serviços de Marketing Digital em Cotia | Kazuki Marketing",
      description: "SEO local, criação de sites, Google Meu Negócio, tráfego pago e desenvolvimento de software em Cotia/SP. Conheça os serviços da Kazuki Marketing.",
      canonical: canonical("/servicos"),
      ogType: "website",
      h1: "Serviços de Marketing Digital em Cotia",
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Serviços", path: "/servicos" },
      ],
    },
  });
});

app.get("/sobre", (req, res) => {
  res.render("sobre", {
    differentiators,
    meta: {
      title: "Sobre a Kazuki Marketing | Agência de SEO Local em Cotia/SP",
      description: "Conheça a Kazuki Marketing: +12 anos de experiência em operações de restaurantes aplicados ao marketing digital e SEO local em Cotia/SP.",
      canonical: canonical("/sobre"),
      ogType: "website",
      h1: "Quem é a Kazuki Marketing",
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Sobre", path: "/sobre" },
      ],
    },
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    blogPosts,
    meta: {
      title: "Blog de SEO Local | Kazuki Marketing Cotia",
      description: "Conteúdo prático sobre SEO local, Google Meu Negócio e marketing digital para restaurantes e negócios locais em Cotia/SP.",
      canonical: canonical("/blog"),
      ogType: "website",
      h1: "Conteúdo sobre SEO Local e Marketing Digital",
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ],
    },
  });
});

app.get("/blog/:slug", (req, res, next) => {
  const post = blogPosts.find((p) => p.slug === req.params.slug);
  if (!post) return next();
  res.render("blog-post", {
    post,
    meta: {
      title: `${post.title} | Blog Kazuki Marketing`,
      description: post.excerpt,
      canonical: canonical(`/blog/${post.slug}`),
      ogType: "article",
      h1: post.title,
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ],
    },
  });
});

app.get("/contato", (req, res) => {
  res.render("contato", {
    meta: {
      title: "Contato | Agência Kazuki Marketing em Cotia/SP",
      description: "Fale com a Kazuki Marketing pelo WhatsApp. Orçamento sem compromisso pra SEO local, sites e Google Meu Negócio em Cotia/SP.",
      canonical: canonical("/contato"),
      ogType: "website",
      h1: "Fale com a Kazuki Marketing",
      breadcrumb: [
        { name: "Home", path: "/" },
        { name: "Contato", path: "/contato" },
      ],
    },
  });
});

app.get("/privacidade", (req, res) => {
  res.render("privacidade", {
    meta: {
      title: "Política de Privacidade | Kazuki Marketing",
      description: "Política de privacidade da Kazuki Marketing conforme a LGPD — como coletamos, usamos e protegemos seus dados.",
      canonical: canonical("/privacidade"),
      ogType: "website",
      noindex: true,
      h1: "Política de Privacidade",
    },
  });
});

app.get("/termos", (req, res) => {
  res.render("termos", {
    meta: {
      title: "Termos de Uso | Kazuki Marketing",
      description: "Termos de uso do site da Kazuki Marketing.",
      canonical: canonical("/termos"),
      ogType: "website",
      noindex: true,
      h1: "Termos de Uso",
    },
  });
});

app.get("/cookies", (req, res) => {
  res.render("cookies", {
    meta: {
      title: "Política de Cookies | Kazuki Marketing",
      description: "Como o site da Kazuki Marketing usa cookies.",
      canonical: canonical("/cookies"),
      ogType: "website",
      noindex: true,
      h1: "Política de Cookies",
    },
  });
});

app.get("/sitemap.xml", (req, res) => {
  const today = new Date().toISOString().split("T")[0];
  const pages = [
    { path: "/",           freq: "weekly",  priority: "1.0" },
    { path: "/servicos",   freq: "monthly", priority: "0.9" },
    { path: "/sobre",      freq: "monthly", priority: "0.8" },
    { path: "/blog",       freq: "weekly",  priority: "0.8" },
    { path: "/contato",    freq: "monthly", priority: "0.7" },
  ];
  const blogPages = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    freq: "monthly",
    priority: "0.7",
    lastmod: p.date,
  }));
  const urls = [...pages, ...blogPages]
    .map((p) => `  <url>
    <loc>${canonical(p.path)}</loc>
    <lastmod>${p.lastmod || today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`)
    .join("\n");

  res.type("application/xml").send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
  );
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send(`User-agent: *\nAllow: /\n\nSitemap: ${business.siteUrl}/sitemap.xml`);
});

app.use((req, res) => {
  res.status(404).render("404", {
    meta: {
      title: "Página não encontrada | Kazuki Marketing",
      description: "Página não encontrada.",
      canonical: canonical(req.path),
      h1: "Página não encontrada",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Kazuki Marketing rodando em http://localhost:${PORT}`);
});
