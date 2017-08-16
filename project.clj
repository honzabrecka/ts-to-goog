(defproject generator "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/tools.cli "0.3.5"]
                 [funcool/cats "2.1.0"]
                 [cats.match "1.0.0"]
                 [timeout-shell "1.0.0"]]
  :main ^:skip-aot generator.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
