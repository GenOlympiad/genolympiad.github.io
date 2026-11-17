# 2026-11-17 import notes

Source: genolympiad-base-20261117.zip, supplied by the benchmark owner. The CSV is retained verbatim. The normalized model-metadata.json records the ZIP SHA-256, every source result directory, checked release sources, and provider identity.

These are 20 independent runs over the 801-task benchmark, with one sample per task and Gemini 2.5 Flash via OpenRouter. They are not replacements for the original paper's multi-read results. Overlapping names are reruns, not duplicate rows to average.

- strict / relaxed: aggregate over scored tasks only.
- strict_fail0 / relaxed_fail0: aggregate over scored + not_generated; non-generated tasks contribute zero.
- images: number of scored tasks (not a census of every generated artifact).
- tasks: scored + not_generated, with withheld excluded.
- image_rate: 100 * scored / (scored + not_generated).
- Axis scores: only Strict is supplied, using the scored-image denominator. Axis Relaxed and axis fail-zero counts are unavailable and must not be reconstructed from Overall or the overall completion fraction.

The Qwen base entries remain in their own group; they are not image generation models. The source export is titled "untrained models" but other listed models include post-trained commercial models; no training-stage claim is inferred from that title.

Dates distinguish announcements, public API access, and exact checkpoint availability. Exact base-model release dates and the exact day for Muse Glimmer are left unset where authoritative sources do not establish them. Do not substitute repository creation or evaluation date for release date. Detailed notes are attached to each model in model-metadata.json.

Provider SVGs for Kimi/Moonshot AI, DeepSeek, Mistral AI, Anthropic, Z.ai and Meta use the corresponding marks from @lobehub/icons-static-svg. They are stored locally. Existing OpenAI/Google/Qwen assets are reused. Marks identify providers, not endorsements.

## Website integration

New model names are added directly to the original result tables. Overlapping names retain their previously published results. Main-table Overall uses the scored-task denominator. Missing axis Relaxed values display as an em dash. The single leaderboard retains T2I-only filtering; no extra batch or denominator UI is used.

## Revised export

Archive (2) provides all 180 axis Relaxed values. The 17 newly added table rows now have complete scores. Published overlapping models retain their original results. Axis fail-zero counts are still unavailable.
