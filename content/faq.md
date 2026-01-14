+++
date = '2025-07-05T03:36:57-08:00'
draft = false
title = 'Frequently Asked Questions'
+++

The historic environment record is a detailed and nuanced repository
of information, and this viewer attempts to ease the first steps of
exploring it. It is not a full-featured, semantic search engine, but
provides quick lookup functionality for casual users. Here, we answer
some key questions.

## What is the purpose of this viewer?

To make public historic environment information quick and easy to
access on a range of devices for a range of stakeholders, as a gateway
to more powerful research tools.

## What are the different dots on the map?

When zoomed close in, blue map markers point to any search results.

When zoomed out, large, red circles indicate search matches instead. When you have
a selected record type (e.g. Historic Buildings), the small, grey circles represent the
entries that do not match your search, to help contextualize.

While the blue markers are preferred by most casual map users and clearly indicate a
precise location, they are confusing and slow to load when large numbers of them appear at once.
When zoomed out, the map may show hundreds of visible search matches, so the red dots are required for performance and
clarity, even though they are too large to show an exact location. Clicking a red or grey dot will
cause the map to zoom close in to that location, and blue markers will replace the red dots (if there are matches near the click).
The meaning of markers and red dots is the same: there is a match at that location.

For ease of understanding, this tool does not show different types of markers for different
types of assets or entries.

## What technologies does this use?

A number of tools from the [Arches Project](https://www.archesproject.org/) ecosystem are used. The specific, alpha-level platform here is an [AGPL-licensed](https://www.gnu.org/licenses/agpl-3.0.html) tool called **Starches**, which combines [Hugo](https://gohugo.io/), [Pagefind](https://pagefind.app/), [Alizarin](https://github.com/flaxandteal/alizarin/), [Flatgeobuf](https://flatgeobuf.org/).org/) to create a performant, fully-static service. As it is static, we can serve large amounts of traffic with simple caching, the possibility of edge-caching and virtually no service-side processing. For technical users who are interested, you can explore each historic asset's data as a self-contained static JSON in Arches' resource format, which is rendered on its viewer page with [Alizarin](https://github.com/flaxandteal/alizarin/) - check your browser's web inspector.
