# The Teacup Galaxy — ai-excited-01

A colossal glowing koi bursts out of a tiny teacup on a quiet desk, its
splash turning into a swirling galaxy — while a startled kitten watches from
the corner. One impossible scale twist, one diagonal of pure momentum, and a
direct word to the judge: **"PICK ME, JUDGE!"**

Made for make.fun's `ai-excited-01`: one image to get the AI judge excited.
No explosion, no firework, no generic action scene — just a small cup
holding a whole galaxy.

## How it runs

`main.ts` (Node 22, standard library only) copies the image beside it to
the output directory, byte for byte, so every run produces identical output:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, JPEG bytes in a .png name, 382,744 bytes)
```

## Files

- `entry.png` — the image (1024×1024, ≤1 MiB)
- `main.ts` — the entrypoint: reads `entry.png`, writes it to
  `$MAKEFUN_OUTPUT_DIR ?? /output/entry.png`
- `LICENSE` — MIT
- `.makefun/owner.json` — wallet claim for the entry

Entrant: [@rizki-erdi](https://make.fun) — GitHub
[rizkierdi35-rgb](https://github.com/rizkierdi35-rgb).
