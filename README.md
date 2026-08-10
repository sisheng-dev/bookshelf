# bookshelf
Bookshelf website to store all epub files, like an e-reader 

## Digital library

This repository now includes a minimal EPUB library website:

- `/index.html` shows book cards in a digital-library layout
- Clicking a title opens `/reader.html` for instant in-browser reading
- `/library/catalog.json` is the library manifest
- Put EPUB files in `/library/epubs/`

### Add your own books

1. Copy `.epub` files into `/library/epubs/`
2. Add entries in `/library/catalog.json`:

```json
[
  {
    "title": "Book Title",
    "author": "Author Name",
    "cover": "https://example.com/cover.jpg",
    "file": "library/epubs/book-title.epub"
  }
]
```
