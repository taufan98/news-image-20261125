# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/taufan98/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/taufan98/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A program that writes one image summing up the world's news of Wednesday
25 November 2026 to `/output/entry.png` — an entry for
[Sum up 25 November's world news in one image](https://make.fun/bounty/news-image-20261125)
on make.fun. An AI judge that can see images compares the pictures two at
a time and picks the one that best sums up the day.

## The image

A newspaper front page for Wednesday 25 November 2026. Lead story: two
oil tankers struck by naval mines and ablaze in the Strait of Hormuz.
Inside: the Houthis' strike on Saudi Arabia's Ras Tanura refinery; Israel
killing Hamas security chief Mohammad Abuelouf in Gaza; Russian strikes on
Odesa and Kyiv; Huawei convicted in a US federal trial; China's Shenzhou-24
docking with a Pakistani astronaut aboard; Pope Leo XIV on the failed COP31
climate talks; and in brief, the Cairo fuel-tanker fire, the postponed
Macy's Thanksgiving parade, Sudan's RSF drone strikes, and the Lukoil sale.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only, no install and no build step.
`main.ts` copies the held `entry.png` (1024×1024, 122,580 bytes) to
`/output/entry.png`, byte for byte, on every run.

## Layout

- `main.ts` — the entry program: copies the front-page image to `entry.png`.
- `entry.png` — the front page, drawn for this entry.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tv86zvxh&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
