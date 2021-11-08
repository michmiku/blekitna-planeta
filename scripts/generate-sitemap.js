require("dotenv").config();

const fs = require("fs");

const globby = require("globby");
const { join } = require("path");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  try {
    const pages = await globby([
      "pages/**/*{.js,.mdx}",
      "!pages/_*.js",
      "!pages/api",
    ]);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const parts = path.split("/");
                if (parts[parts.length - 1] !== "[slug]") {
                  const route =
                    parts[parts.length - 1] === "index"
                      ? parts.slice(0, -1).join("/")
                      : path;
                  return `
                        <url>
                            <loc>${`https://www.blekitnaplaneta.com.pl${route}`}</loc>
                        </url>
                    `;
                } else {
                  const postsDirectory = join(process.cwd(), "_posts");
                  const url = parts.slice(0, -1).join("/");
                  const slugs = fs.readdirSync(join(postsDirectory, url));
                  const all = slugs.map((article) => {
                    return `
                        <url>
                            <loc>${`https://www.blekitnaplaneta.com.pl${url}/${article.slice(
                              0,
                              -3
                            )}`}</loc>
                        </url>
                        `;
                  });
                  return all.join("");
                }
              })
              .join("")}
        </urlset>
    `;

    // If you're not using Prettier, you can remove this.
    const formatted = prettier.format(sitemap, {
      ...prettierConfig,
      parser: "html",
    });
    fs.writeFileSync("public/sitemap.xml", formatted);
  } catch (error) {
    console.log(error);
  }
})();
