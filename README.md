# ts-to-goog

A tool that converts **TypeScript definitions** into **Closure Compiler externs**.

## Motivation

Consuming foreign JavaScript libraries [became piece of cake with latest version of ClojureScript](https://clojurescript.org/news/2017-07-12-clojurescript-is-not-an-island-integrating-node-modules), but you have to still provide externs when compiling code in advanced mode. ClojureScript [can infer a lot itself](https://clojurescript.org/guides/externs), but definitely not everything, which is the point where yo have to write the externs manually.

Last year I spent a lot of time with TypeScript language, a typed superset of JavaScript that compiles to JavaScript. While in ClojureScript you have to provide appropriate externs only if you want to compile in advanced mode, in TypeScript you are forced to provide externs, they call them definitions, even for development. Otherwise you won't be able to compile.

TypeScript community therefore maintens [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), a resource with ~3500 high quality definitions. Also in JavaScript community it's good practice to provide TypeScript definitions even if the package itself is in pure JavaScript.

While working in TypeScript I came accross [tsickle](https://github.com/angular/tsickle), TypeScript to Closure Translator, and I got the idea - Could it be used to convert TypeScript definitions into Closure externs?

## Usage

 1. `wget -O gen.jar https://honzabrecka.com/public/generator-0.1.0-SNAPSHOT-standalone.jar`
 1. `java -jar gen.jar <npm-package>` eg. `java -jar gen.jar @types/react`
 1. Enjoy generated extern in `externs` directory.

## The state of the converter

As a proof of concept I converted all definitions from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). Results can be found in `externs` directory.

First version was just a bash script as I wanted to validate my idea quickly. Then I rewrote it to Clojure, because it's meant to be used in ClojureScript world, where ClojureScript compiler itself and tooling around ClojureScript are written in Clojure and therefore JVM is standard equipment.

Currently we are disscussing integration with existing tooling, namely [cljsjs](http://cljsjs.github.io/). I tryied to summarize my thoughts on [this topic](https://github.com/cljsjs/packages/issues/1292):

Ts-to-goog takes an advantage from already existing TypeScript's ecosystem. It means that every single package with "typings" (written in TypeScript or providing TypeScript definition file) published on npm should be convertible and therefore reused in ClojureScript ecosystem. This is crucial as it differs from how cljsjs currently works.

Cljsjs packages provides both `:externs` and `:foreign-libs`, where both files require manual maintenance. It's completely separated from npm, which means that when the new version of npm package is published, cljsjs package is out of date and there's no automated mechanism to update it.

Also even though that the user who wants to update may reuse `:externs` from that outdated package, `:foreign-libs` may be something not-so-easy to update as it requires compilation on user's environment and each library comes with its own setup...

This point became invalid with recent version of ClojureScript that brings first-class support for `:npm-deps`. As it can consume npm modules directly, there's no need for `:foreign-libs` in cljsjs packages, which means that update is quite easy.

This is exactly how DefinitelyTyped is designed. To use a library you have to install both packages, one for library and second for types.

Here's my suggestion:

 - cljsjs packages generated from TypeScript defs would contain just `:externs`.
 - Those packages should have ts namespace in its name, eg. cljsjs.ts.react
 - We can build a service that would periodically check for new releases on npm and convert&publish them automatically to clojars to remove any redundant manual work.

## Contributing

All help is appreciated. Please open an issue or [tweet at me](https://twitter.com/honzabrecka) if you want some help getting started, or just want to discuss ideas.
