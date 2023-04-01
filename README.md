<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# some

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a collection contains at least `n` elements which are truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import some from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-some@deno/mod.js';
```

#### some( collection, n )

Tests whether a `collection` contains at least `n` elements which are truthy.

```javascript
var arr = [ 0, 0, 1, 2, 3 ];

var bool = some( arr, 3 );
// returns true
```

If provided an empty `collection`, the function returns `false`.

```javascript
var bool = some( [], 1 );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   The function does **not** skip `undefined` elements and is thus not optimized for sparse collections.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import some from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-some@deno/mod.js';

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = ( randu() > 0.95 );
}

bool = some( arr, 5 );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-any`][@stdlib/utils/any]</span><span class="delimiter">: </span><span class="description">test whether at least one element in a collection is truthy.</span>
-   <span class="package-name">[`@stdlib/utils-every`][@stdlib/utils/every]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection are truthy.</span>
-   <span class="package-name">[`@stdlib/utils-for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-none`][@stdlib/utils/none]</span><span class="delimiter">: </span><span class="description">test whether all elements in a collection are falsy.</span>
-   <span class="package-name">[`@stdlib/utils-some-by`][@stdlib/utils/some-by]</span><span class="delimiter">: </span><span class="description">test whether a collection contains at least `n` elements which pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-some.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-some

[test-image]: https://github.com/stdlib-js/utils-some/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-some/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-some/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-some?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-some.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-some/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-some/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-some/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-some/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-some/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-some/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/any]: https://github.com/stdlib-js/utils-any/tree/deno

[@stdlib/utils/every]: https://github.com/stdlib-js/utils-every/tree/deno

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each/tree/deno

[@stdlib/utils/none]: https://github.com/stdlib-js/utils-none/tree/deno

[@stdlib/utils/some-by]: https://github.com/stdlib-js/utils-some-by/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
