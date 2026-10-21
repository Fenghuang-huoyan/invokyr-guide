# Adsterra — invokyrguide.wiki

Native Banner is wired for the homepage and guide pages, immediately after Quick Answer (`afterQuickAnswer` in `sites/invokyrguide/ads.config.ts`). The script is rendered once on those pages. The 404 page does not include the slot.

This zone uses a full script URL. There is no `/invoke.js` suffix, and `invokeBase` stays empty so the old host is not hardcoded.

| Field | Value | Used in the script? |
| --- | --- | --- |
| Zone key | `a9afaed3d79743b4a3f6dc4a0a2677c9` | Yes. `afterQuickAnswer.id`, and the container id `container-a9afaed3d79743b4a3f6dc4a0a2677c9` |
| Script src | `https://bauval.org/21/a9afaed3d79743b4a3f6dc4a0a2677c9` | Yes. Full `afterQuickAnswer.scriptSrc` |
| Website ID | `6139248` | No. Ops note only |
| Placement ID | `31845874` | No. Ops note only |

Adult and sensitive categories stay off.

`analytics.gaId` in `sites/invokyrguide/site.config.ts` is `G-9T3GLR1VSH`. The base layout loads that GA4 id with gtag on every page, including 404. There is no Google site-verification meta tag.
