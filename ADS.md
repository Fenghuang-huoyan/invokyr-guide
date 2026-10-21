# Adsterra — invokyrguide.wiki

The Native Banner slot is wired for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/invokyrguide/ads.config.ts`). The 404 page does not include a slot. There is no sidebar slot and no footer slot.

Nothing loads yet.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | `ADSTERRA_AFTER_QUICK_ANSWER` | No. The `ADSTERRA_` prefix keeps the placement inactive |
| Script src | empty | No |
| Invoke base | empty | No |

When Adsterra issues a zone for this domain, replace the id with that zone key and set `scriptSrc` to the full script URL they give you. Adult and sensitive categories stay off.

`analytics.gaId` in `sites/invokyrguide/site.config.ts` is empty, so pages do not load Google Analytics. There is no Google site-verification meta tag.
