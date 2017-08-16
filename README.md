# ts-to-goog

A tool that converts **TypeScript definitions** into **Closure Compiler externs**.

## Motivation

Consuming foreign JavaScript libraries [become quite easy with latest version of ClojureScript](https://clojurescript.org/news/2017-07-12-clojurescript-is-not-an-island-integrating-node-modules), but one still has to provide *externs* when compiling code in advanced mode. ClojureScript can infer a lot itself, but definitely not everything, which is the point where you have to write externs manually. Or...

TypeScript community already maintains [great resource](https://github.com/DefinitelyTyped/DefinitelyTyped) of high quality] definitons for foreign libraries, which together with [tsickle](https://github.com/angular/tsickle), a tool that converts TypeScript code into a form acceptable to the [Closure Compiler](https://github.com/google/closure-compiler/), makes "using foreign libraries" a way easier.

## Usage

 1. Download jar from https://honzabrecka.com/public/generator-0.1.0-SNAPSHOT-standalone.jar
 1. `java -jar generator-0.1.0-SNAPSHOT-standalone.jar <package-to-convert>`, eg: `java -jar generator-0.1.0-SNAPSHOT-standalone.jar @types/react`
