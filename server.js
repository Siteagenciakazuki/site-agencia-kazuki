const path = require("path");
const express = require("express");
const compression = require("compression");

const { business, navLinks, services, differentiators, process: workProcess, faq, blogPosts } = require("./data/site");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(compression());
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "30d",
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) res.setHeader("Cache-Control", "no-cache");
    },
  })
);

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
    services,
    differentiators,
    workProcess,
    faq,
    meta: {
      title: "Agência de Marketing em Cotia | Kazuki Marketing",
      description:
        "Agência de marketing em Cotia especializada em SEO local, Google Meu Negócio e sites de alta performance. +12 anos de experiência no setor de alimentação. Fale com a Kazuki.",
      canonical: canonical("/"),
      h1: "Agência de Marketing em Cotia especializada em SEO Local",
    },
  });
});

app.get("/servicos", (req, res) => {
  res.render("servicos", {
    services,
    meta: {
      title: "Serviços de Marketing Digital em Cotia | Kazuki Marketing",
      description:
        "SEO local, criação de sites, Google Meu Negócio, tráfego pago e desenvolvimento de software. Conheça os serviços da Kazuki Marketing em Cotia/SP.",
      canonical: canonical("/servicos"),
      h1: "Serviços de Marketing Digital em Cotia",
    },
  });
});

app.get("/sobre", (req, res) => {
  res.render("sobre", {
    differentiators,
    meta: {
      title: "Sobre a Kazuki Marketing | Cotia/SP",
      description:
        "Conheça a Kazuki Marketing: +12 anos de experiência em operações de restaurantes aplicados ao marketing digital e SEO local em Cotia/SP.",
      canonical: canonical("/sobre"),
      h1: "Quem é a Kazuki Marketing",
    },
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    blogPosts,
    meta: {
      title: "Blog | SEO Local e Marketing para Restaurantes",
      description:
        "Conteúdo prático sobre SEO local, Google Meu Negócio e marketing digital para restaurantes e negócios locais em Cotia/SP.",
      canonical: canonical("/blog"),
      h1: "Conteúdo sobre SEO Local e Marketing Digital",
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
      h1: post.title,
    },
  });
});

app.get("/contato", (req, res) => {
  res.render("contato", {
    meta: {
      title: "Contato | Agência Kazuki Marketing em Cotia/SP",
      description:
        "Fale com a Kazuki Marketing pelo WhatsApp ou visite o escritório em Cotia/SP. Orçamento sem compromisso pra SEO local, sites e Google Meu Negócio.",
      canonical: canonical("/contato"),
      h1: "Fale com a Kazuki Marketing",
    },
  });
});

app.get("/privacidade", (req, res) => {
  res.render("privacidade", {
    meta: {
      title: "Política de Privacidade | Kazuki Marketing",
      description: "Política de privacidade da Kazuki Marketing — como coletamos, usamos e protegemos seus dados.",
      canonical: canonical("/privacidade"),
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
      h1: "Política de Cookies",
    },
  });
});

app.get("/sitemap.xml", (req, res) => {
  const staticPaths = ["/", "/servicos", "/sobre", "/blog", "/contato", "/privacidade", "/termos", "/cookies"];
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);
  const urls = [...staticPaths, ...blogPaths]
    .map((p) => `  <url><loc>${canonical(p)}</loc></url>`)
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
