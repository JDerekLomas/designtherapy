# Design Therapy

Next.js site for designtherapy.org. `main` is the live "post-it / design workshop" version with the 55-card Reframing Relationships deck embedded as a resource.

## Site versions (branches)

Each branch is a self-contained version of the site. To bring any of them back online, check it out locally and run `vercel --prod`.

| Branch | What it is |
|---|---|
| `main` | Live version — design-workshop aesthetic, post-its, blog/resources, Reframing Relationships card deck. |
| `workshop-live` | Earlier checkpoint of the workshop version (before MuleRouter assets were hosted locally and the about-image fix). |
| `designtherapy-replica` | A pivot direction — static replication of the live designtherapy.org site. Most of the workshop content is removed in this line. |
| `static-site-replica` | `designtherapy-replica` + a final commit adding site-extraction and design-system documentation. Was previously `main`. |
| `new-version` | Separate Next.js rebuild started fresh (about/approach/services/events/schedule pages, Header/Footer/InputWidget components, /api/input route). Unrelated git history. |

## Bringing a branch back online

```sh
git checkout <branch>
npm install
vercel --prod
```

Vercel deploys whatever files are on disk, so the checked-out branch is what goes live.

## Local dev

```sh
npm install
npm run dev
```
