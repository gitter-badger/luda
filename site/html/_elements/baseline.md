---
title: Baseline
description: As a professional designer, you care about vertical rhythm much more than stupid coders. Baseline grid is your good friend, no doubt!
---

## Usage
The height of baseline grid is set at `1rem` in Luda. The vertical sizes of most Luda components are setted to match the height of the baseline grid, except for elements without a certain height like images.

If you need change elements height to match the baseline grid, you can add the `.baseline` class to elements' container to show the baseline grid. So the vertical rhythm of your layout can be checked easily.

Let's see below example.
{% capture baseline %}
<div class="baseline">
  <!-- Set the height of this div at 3rem to match the baseline grid. -->
  <div class="bc-primary mb-small" style="height: 3rem"></div>
  <p>Once upon time a girl named Cinderella lived with her stepmother and two stepsisters.  Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was still dark and cold to start the fire.  It was she who cooked the meals. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire...</p>
  <button class="btn btn-primary my-small">I Like This</button>
</div>
{% endcapture %}
{{ baseline }}
``` html{{ baseline }}```