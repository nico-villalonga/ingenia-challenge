This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Some notes

I did not use dummyjson cart API since it does not persist. I went ahead and create a cart slice to manage all cart interactions.
<br/>

The search bar works as follow:

- If no category not search term then the API will look for all products (limit 30)
- If a search term is provided but no category, then it will get from API `/search?q={q}`
- If category is selected but no search term is provided, then it get from API `/category/{category}`
- If category is selected and search term is provided, then data is fetched from API and filtered locally before output

This works in this manner since the API does not expose a filtering mechanism for product categories.
<br>
The search bar is missing a clear button to reset the filters.
<br/>

Pagination is fixed to 30 items (same as API). Its a basic pagination component since it does not have ellipsis to group pages. So it needs to keep limit in 30 so it does not break UI (otherwise it will grow too much).

<br/>

Loading, empty and error states are not handled. So you might see some empty components at loading time and then readjust when data available.
<br/>
Validation and error handling is missing. The API is well populated and there are no missing values, so there should be no issues while plating with the app, but it should definitely have checks
<br/>
So dont try to go to an unexisting detail page through direct url link (ie `/products/0`) since it will break.

## Getting Started

First install dependencies and run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
