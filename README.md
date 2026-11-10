# GenOlympiad

**Benchmarking Frontier Image Models at Their Capability Boundaries**

[Project page](https://genolympiad.github.io/) | [Paper](https://arxiv.org/abs/2610.26850) | [Benchmark code](https://github.com/GenOlympiad/GenOlympiad)

GenOlympiad evaluates text-to-image models across nine capability axes: text fidelity, counterfactual instruction following, symbolic systems, world-knowledge grounding, physical consistency, quantity and precision, spatial and 3D reasoning, latent computation, and long-range consistency.

This repository hosts the GitHub Pages project website. Benchmark code and evaluation tools are maintained in the [main GenOlympiad repository](https://github.com/GenOlympiad/GenOlympiad).

## Leaderboard

The interactive leaderboard ranks image generation models using Strict or Relaxed scores. It supports category filters, all nine capability axes, model search, and a release-date progress chart. Scores are read directly from the full results table in `index.html`.

Scores are reported out of 100. Withheld tasks are excluded from axis and overall scores. Overall scores are task-level aggregates, not the unweighted average of the nine axis scores. Ties in Strict are ordered by Relaxed, and vice versa.

### Latest addition: GPT-Image-2.6 Sunburst

| Axis | Strict | Relaxed |
| --- | ---: | ---: |
| Text | 30.9 | 44.4 |
| C-Fact | 26.7 | 40.7 |
| Symbol | 22.7 | 34.9 |
| World | 15.2 | 30.5 |
| Phys | 10.5 | 29.0 |
| Quant | 16.7 | 35.8 |
| Spatial | 10.0 | 27.9 |
| Latent | 11.2 | 28.4 |
| Long | 14.6 | 31.8 |
| **Overall** | **17.4** | **33.6** |

These results are for **GPT-Image-2.6 Sunburst**, not Flare. The final results use the Table 1 evaluation protocol: the initial judgment plus four rounds of cold reads, with scored tasks as the denominator. Release date: **November 4, 2026**, from the [official OpenAI announcement](https://openai.com/index/introducing-images-2-6/).

## Updating the website

- `index.html`: paper information, full results table, figures, and the date metadata used by the progress chart.
- `static/js/leaderboard.js`: ranking, filtering, progress chart, and provider-logo mapping.
- `static/css/leaderboard.css`: leaderboard layout and styling.
- `static/js/leaderboard-dates.json`: release-date reference manifest.
- `static/images/providers/`: local provider logos and their source notes.
- `static/genolympiad-demos/`: self-contained evaluation examples.

### Add a model

1. Add a row to the appropriate category of the full results table in `index.html`. Use nine pairs of Strict and Relaxed scores in the table's axis order, followed by the Overall pair (20 numeric cells). Closed-source and open-source T2I rows enter the interactive leaderboard automatically.
2. Use the task-level Overall scores from the evaluation output. Recheck the bold maximum values within that category for each column.
3. To include a model in the progress chart, add its exact display name, release date, and source URL to both the inline `lb-dates` JSON in `index.html` and `static/js/leaderboard-dates.json`. Models without a date remain in the rankings.
4. Add a provider mapping and local logo in `leaderboard.js` if the provider is new.
5. Check Strict and Relaxed rankings, category and axis filters, and the mobile layout before publishing.

## Local preview

From this repository, run:

```sh
python -m http.server 8768
```

Open http://127.0.0.1:8768/. The website is static and requires no build step. GitHub Pages serves the repository files directly.

## Citation

```bibtex
@misc{hu2026genolympiadbenchmarkingfrontierimage,
  title={GenOlympiad: Benchmarking Frontier Image Models at Their Capability Boundaries},
  author={Xi Hu and Martin Bell and Liang Zheng},
  year={2026},
  eprint={2610.26850},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2610.26850}
}
```

## Acknowledgments and website license

The website uses the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), adopted from [Nerfies](https://nerfies.github.io/). Provider marks identify the model providers; see `static/images/providers/SOURCES.txt` for asset sources.

The website retains the template's [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). This describes the website template and does not assign a new license to the separate benchmark code, model outputs, or third-party brand assets.
