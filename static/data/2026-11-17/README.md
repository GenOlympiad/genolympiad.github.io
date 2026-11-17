# GenOlympiad scores for untrained models

All 801 GenOlympiad tasks, one sample per task, judged by Gemini 2.5 Flash (the benchmark paper's judge) through OpenRouter. Scores are 0-100. Withheld tasks are left out.

- `genolympiad-base.tex`: LaTeX table (`tab:genolympiad-base`). `build.pdf` shows how it looks.
- `genolympiad-base.md`: the same table, plus the strict and relaxed scores for each of the 9 categories.
- `genolympiad-base.csv`: all numbers, including which results folder each row came from.

Official: the benchmark's own score, which leaves out tasks where the model drew no image.
No image = 0: those tasks count as 0. This is how failures are counted in our main table.
The two Qwen base models fail to draw an image for many tasks, so their official score is over an easier subset.

Code models write a program that we render offline. Image models output pixels directly.
Qwen3.5-27B and Gemma 4 31B have not been run on GenOlympiad.

To rebuild: `python geno_base_table.py <out dir>` from the repo (it reads `results/`).
