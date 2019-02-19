import './install.coffee'



luda
 
  $child: (selector, $ancestor) ->
    $ancestor = document unless $ancestor
    $ancestor.querySelector selector

  $children: (selector, $ancestor) ->
    $ancestor = document unless $ancestor
    $descendant = @$child selector, $ancestor
    if $descendant
      descendants = Array.from($ancestor.querySelectorAll selector)
    else
      descendants = []

  $unnested: (selector, $ancestor, ancestorSelector) ->
    descendants = @$children selector, $ancestor
    descendants.filter ($descendant) =>
      $descendant if @$parent(ancestorSelector, $descendant) is $ancestor

  $parent: (selector, $descendant) ->
    $ancestor = $descendant.parentNode
    if $ancestor
      if $ancestor.matches and $ancestor.matches selector
        $ancestor
      else
        @$parent selector, $ancestor

  $parents: (selector, $descendant, _ancestors) ->
    $ancestor = @$parent selector, $descendant
    _ancestors = [] unless _ancestors
    if $ancestor
      _ancestors.push($ancestor)
      @$parents selector, $ancestor, _ancestors
    else
      _ancestors

  $after: ($node, $target) ->
    $parent = $target.parentNode
    if $parent.lastChild is $target
      $parent.appendChild $node
    else
      $parent.insertBefore $node, $target.nextSibling

  $prepend: ($node, $target) ->
    if $target.firstChild
      $target.insertBefore $node, $target.firstChild
    else
      $target.appendChild $node

  reflow: ($element) -> $element.offsetHeight