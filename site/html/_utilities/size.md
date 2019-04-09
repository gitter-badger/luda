---
title: Size
---

## Responsive Sizes

{% capture width %}
<div class="bc-dark">
  <p class="w-auto px-small d-inline-block va-top bc-primary c-light">.w-auto</p>
  <p class="w-25 px-small bc-danger c-light">.w-25</p>
  <p class="w-33 px-small bc-primary c-light">.w-33</p>
  <p class="w-50 px-small bc-danger c-light">.w-50</p>
  <p class="w-66 px-small bc-primary c-light">.w-66</p>
  <p class="w-75 px-small bc-danger c-light">.w-75</p>
  <p class="w-100 px-small bc-primary c-light">.w-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ width }}
</div>
``` html{{ width }}```

{% capture height %}
<div class="d-flex bc-dark" style="height: 21rem">
  <p class="h-25 px-tiny bc-primary c-light">.h-25</p>
  <p class="h-33 px-tiny bc-danger c-light">.h-33</p>
  <p class="h-50 px-tiny bc-primary c-light">.h-50</p>
  <p class="h-66 px-tiny bc-danger c-light">.h-66</p>
  <p class="h-75 px-tiny bc-primary c-light">.h-75</p>
  <p class="h-100 px-tiny bc-danger c-light">.h-100</p>
  <p class="h-auto px-tiny bc-primary c-light">.h-auto</p>
</div>
{% endcapture %}
<div class="example">
  {{ height }}
</div>
``` html{{ height }}```



## Size Limits

{% capture max_w_100 %}
<div class="bc-dark">
  <p style="width: 200%" class="max-w-100 px-small bc-primary c-light">.max-w-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ max_w_100 }}
</div>
``` html{{ max_w_100 }}```

{% capture min_w_100 %}
<div class="bc-dark">
  <p style="width: 20%" class="min-w-100 px-small bc-primary c-light">.min-w-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ min_w_100 }}
</div>
``` html{{ min_w_100 }}```

{% capture min_w_100vw %}
<div class="bc-dark">
  <p style="width: 20%" class="min-w-100vw px-small bc-primary c-light">.min-w-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ min_w_100vw }}
</div>
``` html{{ min_w_100vw }}```


{% capture max_h_100 %}
<div class="bc-dark" style="height: 6rem">
  <p style="height: 200%" class="max-h-100 px-small bc-primary c-light">.max-h-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ max_h_100 }}
</div>
``` html{{ max_h_100 }}```


{% capture min_h_100 %}
<div class="bc-dark" style="height: 6rem">
  <p class="min-h-100 px-small bc-primary c-light">.min-h-100</p>
</div>
{% endcapture %}
<div class="example">
  {{ min_h_100 }}
</div>
``` html{{ min_h_100 }}```

{% capture min_h_100vh %}
<div class="bc-dark">
  <p class="min-h-100vh px-small bc-primary c-light">.min-h-100vh</p>
</div>
{% endcapture %}
<div class="example">
  {{ min_h_100vh }}
</div>
``` html{{ min_h_100vh }}```

