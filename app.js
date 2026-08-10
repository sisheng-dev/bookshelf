async function loadCatalog() {
  const response = await fetch("library/catalog.json");
  if (!response.ok) {
    throw new Error("Could not load catalog");
  }
  return response.json();
}

function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";

  const image = document.createElement("img");
  image.src = book.cover || "https://via.placeholder.com/300x450?text=EPUB";
  image.alt = `${book.title} cover`;

  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author || "Unknown author";

  const link = document.createElement("a");
  link.href = `reader.html?book=${encodeURIComponent(book.file)}`;
  link.textContent = "Read now";

  card.append(image, title, author, link);
  return card;
}

function renderBooks(catalog) {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = "";

  if (!Array.isArray(catalog) || catalog.length === 0) {
    grid.innerHTML =
      '<div class="empty-state">No books yet. Add EPUB files to <code>/library/epubs</code> and update <code>/library/catalog.json</code>.</div>';
    return;
  }

  for (const book of catalog) {
    if (book?.title && book?.file) {
      grid.appendChild(createBookCard(book));
    }
  }
}

loadCatalog().then(renderBooks).catch((error) => {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = `<div class="empty-state">${error.message}</div>`;
});
